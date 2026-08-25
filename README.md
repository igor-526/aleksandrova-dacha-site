# Site for Russian equestrian

## Public API configuration

`NEXT_PUBLIC_API_BASE_URL` must be an absolute backend API URL, including the
`/api` prefix (for example, `https://api.aleksandrova-dacha.ru/api`). Browser
requests, including `POST /callback_requests`, are sent directly to this URL;
the Next.js application does not proxy API traffic.

`NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY` identifies the public site tenant and is
embedded at build time because the callback form runs in the browser. It is a
non-secret identity hint sent as `X-Equestrian-Service-Key`. If it is missing,
the header is omitted and backend returns a CORS-readable `401`; there is no
hidden environment-specific fallback. The callback request is anonymous:
the browser does not send CMS cookies, `Authorization`, or CMS-only API calls.

For local development use an absolute URL as well:

```dotenv
NEXT_PUBLIC_API_BASE_URL=http://localhost:8001/api
NEXT_PUBLIC_EQUESTRIAN_SERVICE_KEY=default-equestrian
```

## Observability

Public consumer использует `@sentry/nextjs` для client/server/edge ошибок.
Sentry выключен по умолчанию; browser-конфигурация встраивается при сборке.
Переменные, sanitization, тестирование и rollback описаны в
[`docs/operations/observability.md`](../../docs/operations/observability.md).

## Structure
```text
/
│
├── about
│   ├── contacts
│   ├── zoo
│   ├── history
│   ├── team
│   └── gallery
│
├── horse_riding
│   ├── adults
│   └── children
│
├── horse_walking
│
├── photosession
│   ├── examples
│   └── preparing
│
├── service
│   ├── rental
│   └── breeding
│
└── blog
```
