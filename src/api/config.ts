const envBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!envBaseUrl) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

const envMockBaseUrl =
  process.env.NEXT_PUBLIC_MOCK_API_BASE_URL ??
  `http://localhost:${process.env.PORT ?? "3000"}`;

const normalizeBase = (value: string) => value.replace(/\/+$/, "");

export const BASE_URL = normalizeBase(envBaseUrl);
export const MOCK_BASE_URL = normalizeBase(envMockBaseUrl);

type Primitive = string | number | boolean;
export type QueryParamValue = Primitive | Primitive[];
export type QueryParams = Record<string, QueryParamValue>;

const isAbsoluteUrl = (path: string) => /^https?:\/\//i.test(path);

const buildQueryString = (params: QueryParams = {}) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        searchParams.append(`${key}[]`, String(item));
      });
    } else {
      searchParams.append(key, String(value));
    }
  });

  const query = searchParams.toString();
  return query ? `?${query}` : "";
};

const buildUrl = (path: string, params: QueryParams = {}) => {
  const sanitizedPath = path.replace(/^\/+/, "");
  const base = isAbsoluteUrl(path) ? "" : `${BASE_URL}/`;
  const url = isAbsoluteUrl(path) ? path : `${base}${sanitizedPath}`;
  const queryString = buildQueryString(params);

  return `${url}${queryString}`;
};

const jsonHeaders: HeadersInit = {
  "Content-Type": "application/json; charset=UTF-8",
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Request failed with status ${response.status}: ${errorBody}`.trim(),
    );
  }

  return (await response.json()) as T;
};

export const get = async <T>(
  path: string,
  params: QueryParams = {},
): Promise<T> => {
  const url = buildUrl(path, params);
  const response = await fetch(url, {
    method: "GET",
    headers: jsonHeaders,
  });

  return handleResponse<T>(response);
};

export const post = async <T>(
  path: string,
  body: unknown = {},
): Promise<T> => {
  const url = buildUrl(path);
  const response = await fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(body),
  });

  return handleResponse<T>(response);
};
