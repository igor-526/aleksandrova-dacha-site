import { ApiResult, DetailResponse } from "@/types";

export function addQueryParamsToUrl<T extends Record<string, unknown>>(
  url: string,
  params: T = {} as T
) {
  const hashIndex = url.indexOf("#");
  const hasHash = hashIndex >= 0;

  const withoutHash = hasHash ? url.slice(0, hashIndex) : url;
  const hash = hasHash ? url.slice(hashIndex) : "";

  const [path, initialQuery = ""] = withoutHash.split("?");
  const searchParams = new URLSearchParams(initialQuery);

  for (const [key, value] of Object.entries(params)) {
    if (value == null) continue;

    if (Array.isArray(value)) {
      searchParams.delete(key);
      for (const item of value) {
        if (item != null) {
          searchParams.append(key, String(item));
        }
      }
      continue;
    }

    searchParams.set(key, String(value));
  }

  const queryString = searchParams.toString();
  const queryPart = queryString ? `?${queryString}` : "";

  return `${path}${queryPart}${hash}`;
}

function resolveApiBaseUrl() {
  const explicitUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? 
    process.env.API_BASE_URL;
  
  if (explicitUrl) {
    const trimmed = explicitUrl.trim();
    
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      return trimmed.replace(/\/+$/, "");
    }
    
    if (trimmed.startsWith("//")) {
      if (typeof window !== "undefined") {
        const protocol = window.location.protocol;
        return `${protocol}${trimmed.replace(/\/+$/, "")}`;
      }
      return `https:${trimmed.replace(/\/+$/, "")}`;
    }
    
    if (trimmed.startsWith("/")) {
      if (typeof window !== "undefined") {
        return `${window.location.origin}${trimmed.replace(/\/+$/, "")}`;
      }
      return `http://localhost:8001${trimmed.replace(/\/+$/, "")}`;
    }
    
    if (typeof window !== "undefined") {
      const protocol = window.location.protocol;
      return `${protocol}//${trimmed.replace(/\/+$/, "")}`;
    }
    
    return `https://${trimmed.replace(/\/+$/, "")}`;
  }

  if (typeof window !== "undefined") {
    const { protocol, hostname, port } = window.location;

    const configuredPort = process.env.NEXT_PUBLIC_API_PORT;
    const backendPort =
      configuredPort && configuredPort.trim() !== ""
        ? configuredPort
        : port && port !== "" && port !== "3000"
          ? port
          : "8001";

    const normalizedPort =
      (protocol === "http:" && backendPort === "80") ||
      (protocol === "https:" && backendPort === "443")
        ? ""
        : `:${backendPort}`;

    return `${protocol}//${hostname}${normalizedPort}/api`;
  }

  return "http://localhost:8001/api";
}

export default async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<ApiResult<T>> {
  const apiBaseUrl = resolveApiBaseUrl();
  const url = `${apiBaseUrl}${path}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...normalizeHeaders(options?.headers),
      },
    });

    if (res.status === 204 || res.status === 205) {
      return { status: "ok", data: null as unknown as T };
    }

    const raw = await res.text();
    const parsed = raw ? safeJson(raw) : null;

    if (res.ok) {
      return { status: "ok", data: (parsed as T) ?? (null as unknown as T) };
    }

    const detail =
      (parsed as DetailResponse | null)?.detail ||
      (raw?.trim() || res.statusText || "Request failed");

    return { status: "error", data: { detail } };
  } catch {
    return { status: "error", data: { detail: "Network error or invalid JSON" } };
  }
}

function normalizeHeaders(headers?: HeadersInit): Record<string, string> {
  if (!headers) {
    return {};
  }

  if (headers instanceof Headers) {
    return Object.fromEntries(headers.entries());
  }

  if (Array.isArray(headers)) {
    return Object.fromEntries(headers);
  }

  return headers;
}

function safeJson(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}
