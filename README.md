# Site for Russian equestrian

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
