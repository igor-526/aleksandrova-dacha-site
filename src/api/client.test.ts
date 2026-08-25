import { afterEach, describe, expect, it } from "vitest";

import {
  buildHeaders,
  resolveApiBaseUrl,
  resolveEquestrianServiceKey,
} from "./client";

const originalEnv = process.env;

afterEach(() => {
  process.env = { ...originalEnv };
});

describe("resolveApiBaseUrl", () => {
  it("keeps the configured production API host intact", () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_BASE_URL: "https://api.eqcms.ru/api",
    };

    expect(resolveApiBaseUrl()).toBe("https://api.eqcms.ru/api");
  });

  it("adds the OpenAPI /api prefix when only the host is configured", () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_BASE_URL: "https://api.eqcms.ru",
    };

    expect(resolveApiBaseUrl()).toBe("https://api.eqcms.ru/api");
  });

  it("removes trailing slashes from the configured API URL", () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_BASE_URL: "https://api.eqcms.ru/api///",
    };

    expect(resolveApiBaseUrl()).toBe("https://api.eqcms.ru/api");
  });

  it("keeps callback traffic on the absolute backend origin", () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_BASE_URL: "https://backend.example.test/api",
    };

    expect(`${resolveApiBaseUrl()}/callback_requests`).toBe(
      "https://backend.example.test/api/callback_requests",
    );
  });
});

describe("resolveEquestrianServiceKey", () => {
  it("uses the explicit public selector in browser-compatible code", () => {
    process.env = {
      ...originalEnv,
      EQUESTRIAN_SERVICE_KEY: "ignored-server-only-key",
      NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY: " site-ad ",
    };

    expect(resolveEquestrianServiceKey()).toBe("site-ad");
  });

  it("does not hide missing public configuration behind a fallback", () => {
    process.env = {
      ...originalEnv,
      EQUESTRIAN_SERVICE_KEY: "default-equestrian",
      NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY: "",
    };

    expect(resolveEquestrianServiceKey()).toBe("");
  });
});

describe("buildHeaders", () => {
  it("adds X-Equestrian-Service-Key for GET requests", () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY: "default-equestrian",
    };

    expect(buildHeaders().get("X-Equestrian-Service-Key")).toBe(
      "default-equestrian"
    );
  });

  it("does not add X-Equestrian-Service-Key for write requests", () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY: "default-equestrian",
    };

    expect(
      buildHeaders({ method: "POST" }).has("X-Equestrian-Service-Key")
    ).toBe(false);
  });
});
