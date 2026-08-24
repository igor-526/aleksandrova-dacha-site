"use client";

import React, { useEffect } from "react";

import { captureErrorOnce } from "../lib/observability/sentry";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    captureErrorOnce(error);
  }, [error]);

  return (
    <html lang="ru">
      <body>
        <main role="alert" className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 p-6 text-center">
          <h1 className="text-2xl font-semibold">Что-то пошло не так</h1>
          <p>Попробуйте повторить действие. Если ошибка сохранится, вернитесь позже.</p>
          <button type="button" onClick={reset} className="rounded bg-black px-4 py-2 text-white">
            Повторить
          </button>
        </main>
      </body>
    </html>
  );
}
