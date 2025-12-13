"use client";

import { Button, Checkbox, Modal, cn, Input, Textarea } from "@/ui";
import { useEffect, useRef, useState } from "react";

export type FeedbackFormValues = {
  name: string;
  phone: string;
  notes: string;
  agree: boolean;
};

export type FeedbackFormProps = {
  serviceType?: string;
  onSubmit?: (values: FeedbackFormValues) => void;
  policyLink?: string;
  className?: string;
  triggerLabel?: string;
};

const defaultValues: FeedbackFormValues = {
  name: "",
  phone: "",
  notes: "",
  agree: false,
};

export function FeedbackForm({
  onSubmit,
  policyLink = "/policy",
  className,
  triggerLabel = "Записаться",
}: FeedbackFormProps) {
  const [open, setOpen] = useState(false);
  const [sentOpen, setSentOpen] = useState(false);
  const sentTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [values, setValues] = useState<FeedbackFormValues>(defaultValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FeedbackFormValues, string>>
  >({});

  const update = <K extends keyof FeedbackFormValues>(
    key: K,
    value: FeedbackFormValues[K]
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nextErrors: typeof errors = {};
    if (!values.name) nextErrors.name = "Введите имя";
    if (!values.phone) nextErrors.phone = "Введите телефон";
    if (!values.agree)
      nextErrors.agree =
        "Необходимо согласиться с политикой конфиденциальности";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      onSubmit?.(values);
      setOpen(false);
      setSentOpen(true);
      if (sentTimerRef.current) clearTimeout(sentTimerRef.current);
      sentTimerRef.current = setTimeout(() => setSentOpen(false), 3000);
      setValues(defaultValues);
    }
  };

  useEffect(() => {
    return () => {
      if (sentTimerRef.current) clearTimeout(sentTimerRef.current);
    };
  }, []);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="primary" size="lg">
        {triggerLabel}
      </Button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Запись на занятие"
        footer={<></>}
      >
        <form
          className={cn(
            "grid gap-4 rounded-3xl border border-[#d3c6aa] bg-[#f9e0a2]/40 p-4 text-sm shadow-[var(--shadow-soft,0_12px_28px_rgba(56,64,0,0.1))] sm:gap-5 sm:p-6 sm:text-base",
            className
          )}
          onSubmit={handleSubmit}
        >
          <Input
            label="Имя"
            placeholder="Ваше имя"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            error={errors.name}
            autoComplete="name"
            className="px-3 py-2 text-sm sm:px-4 sm:text-base"
          />
          <Input
            label="Телефон"
            placeholder="+7 (999) 123-45-67"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            error={errors.phone}
            autoComplete="tel"
            className="px-3 py-2 text-sm sm:px-4 sm:text-base"
          />

          <Textarea
            label="Комментарий"
            placeholder="Расскажите, что вас интересует"
            value={values.notes}
            onChange={(event) => update("notes", event.target.value)}
            className="px-3 py-2 text-sm sm:px-4 sm:text-base"
          />
          <div className="space-y-2">
            <Checkbox
              checked={values.agree}
              onChange={(event) => update("agree", event.target.checked)}
              label={
                <span>
                  Я согласен с{" "}
                  <a className="underline" href={policyLink}>
                    политикой конфиденциальности
                  </a>
                </span>
              }
            />
            {errors.agree && (
              <p className="text-xs text-[#a03b3b]">{errors.agree}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="text-sm sm:text-base"
              onClick={() => setOpen(false)}
            >
              Отмена
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="text-sm sm:text-base"
            >
              Отправить заявку
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        open={sentOpen}
        onOpenChange={setSentOpen}
        title="Заявка отправлена"
        footer={<></>}
      >
        <div className="px-2 py-1 text-base text-[#2f3600]">
          Мы свяжемся с вами в ближайшее время.
        </div>
      </Modal>
    </>
  );
}
