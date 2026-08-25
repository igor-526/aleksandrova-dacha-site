import { afterEach, describe, expect, it, vi } from "vitest";

import { callBackRequestCreate } from "./callBackRequest";

const originalEnv = process.env;

afterEach(() => {
  process.env = { ...originalEnv };
  vi.unstubAllGlobals();
});

describe("callBackRequestCreate", () => {
  it("uses the public callback boundary, selector and compatible body", async () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_BASE_URL: "https://api.example.test/api",
      NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY: "site-ad",
    };
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 201,
      statusText: "Created",
      text: async () => "{}",
    });
    vi.stubGlobal("fetch", fetchMock);

    await callBackRequestCreate({
      name: "Анна",
      phone: "+7 999 123-45-67",
      comment: "Перезвоните вечером",
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    const headers = new Headers(options.headers);

    expect(url).toBe("https://api.example.test/api/callback_requests");
    expect(options.method).toBe("POST");
    expect(JSON.parse(String(options.body))).toEqual({
      name: "Анна",
      phone: "+7 999 123-45-67",
      comment: "Перезвоните вечером",
    });
    expect(String(options.body)).not.toContain("notes");
    expect(headers.get("Content-Type")).toBe("application/json");
    expect(headers.get("X-Equestrian-Service-Key")).toBe("site-ad");
    expect(headers.has("Authorization")).toBe(false);
    expect(headers.has("Cookie")).toBe(false);
    expect(options.credentials).toBeUndefined();
  });

  it("omits the selector when public browser configuration is missing", async () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_BASE_URL: "https://api.example.test/api",
      NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY: "",
      EQUESTRIAN_SERVICE_KEY: "must-not-leak",
    };
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      statusText: "Unauthorized",
      text: async () => JSON.stringify({ detail: "Missing selector" }),
    });
    vi.stubGlobal("fetch", fetchMock);

    await callBackRequestCreate({ name: "Анна", phone: "+79991234567" });

    const [, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(new Headers(options.headers).has("X-Equestrian-Service-Key")).toBe(false);
  });

  it("preserves the backend status code for consumer error UX", async () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_BASE_URL: "https://api.example.test/api",
    };
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
        statusText: "Unauthorized",
        text: async () => JSON.stringify({ detail: "Invalid selector" }),
      }),
    );

    await expect(
      callBackRequestCreate({ name: "Анна", phone: "+79991234567" }),
    ).resolves.toEqual({
      status: "error",
      statusCode: 401,
      data: { detail: "Invalid selector" },
    });
  });

  it("preserves a CORS-readable validation response", async () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_BASE_URL: "https://api.example.test/api",
    };
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 422,
        statusText: "Unprocessable Entity",
        text: async () => JSON.stringify({ detail: "Invalid phone" }),
      }),
    );

    await expect(
      callBackRequestCreate({ name: "Анна", phone: "invalid" }),
    ).resolves.toEqual({
      status: "error",
      statusCode: 422,
      data: { detail: "Invalid phone" },
    });
  });

  it("preserves a network failure for generic consumer error UX", async () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_BASE_URL: "https://api.example.test/api",
    };
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));

    await expect(
      callBackRequestCreate({ name: "Анна", phone: "+79991234567" }),
    ).resolves.toEqual({
      status: "error",
      data: { detail: "Network error or invalid JSON" },
    });
  });
});
