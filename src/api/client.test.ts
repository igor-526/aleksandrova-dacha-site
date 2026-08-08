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
});

describe("resolveEquestrianServiceKey", () => {
  it("uses EQUESTRIAN_SERVICE_KEY as the canonical service key", () => {
    process.env = {
      ...originalEnv,
      EQUESTRIAN_SERVICE_KEY: " default-equestrian ",
      NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY: "ignored-public-key",
    };

    expect(resolveEquestrianServiceKey()).toBe("default-equestrian");
  });

  it("does not use NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY as a fallback", () => {
    process.env = {
      ...originalEnv,
      EQUESTRIAN_SERVICE_KEY: "",
      NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY: "ignored-public-key",
    };

    expect(resolveEquestrianServiceKey()).toBe("default-equestrian");
  });
});

describe("buildHeaders", () => {
  it("adds X-Equestrian-Service-Key for GET requests", () => {
    process.env = {
      ...originalEnv,
      EQUESTRIAN_SERVICE_KEY: "default-equestrian",
    };

    expect(buildHeaders().get("X-Equestrian-Service-Key")).toBe(
      "default-equestrian"
    );
  });

  it("does not add X-Equestrian-Service-Key for write requests", () => {
    process.env = {
      ...originalEnv,
      EQUESTRIAN_SERVICE_KEY: "default-equestrian",
    };

    expect(
      buildHeaders({ method: "POST" }).has("X-Equestrian-Service-Key")
    ).toBe(false);
  });
});
