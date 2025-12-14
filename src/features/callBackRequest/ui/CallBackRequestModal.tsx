"use client";

import { Button, Checkbox, Modal, cn, Input, Textarea } from "@/ui";
import { useState } from "react";
import { sendCallBackRequest } from "../services/sendCallBackRequest";

export type FeedbackFormValues = {
  name: string;
  phone: string;
  notes: string;
  agree: boolean;
};

export type CallBackRequestModalProps = {
  serviceType?: string;
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

export function CallBackRequestModal({
  policyLink = "/policy",
  className,
  triggerLabel = "Связаться",
}: CallBackRequestModalProps) {
  const [open, setOpen] = useState(false);
  const [sentOpen, setSentOpen] = useState(false);
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

  const handleSubmit = async () => {
    const nextErrors: typeof errors = {};
    if (!values.name) nextErrors.name = "Введите имя";
    if (!values.phone) nextErrors.phone = "Введите телефон";
    if (!values.agree)
      nextErrors.agree =
        "Необходимо согласиться с политикой конфиденциальности";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      try {
        await sendCallBackRequest({
          name: values.name,
          phone: values.phone,
          notes: values.notes,
        });
        setOpen(false);
        setSentOpen(true);
        setValues(defaultValues);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
        // Можно добавить обработку ошибок, например, показать toast
      }
    }
  };

  const footer = (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
      <Button
        type="button"
        variant="secondary"
        size="md"
        className="text-sm sm:text-base"
        onClick={() => setOpen(false)}
      >
        Отмена
      </Button>
      <Button
        variant="primary"
        size="md"
        className="text-sm sm:text-base"
        onClick={handleSubmit}
        disabled={true}
      >
        Отправить заявку
      </Button>
    </div>
  )

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="primary" size="lg">
        {triggerLabel}
      </Button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Связаться с нами"
        footer={footer}
      >
        <form
          className={cn(
            "grid gap-4 text-sm sm:gap-5 sm:text-base",
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
        </form>
      </Modal>

      <Modal
        open={sentOpen}
        onOpenChange={setSentOpen}
        title="Заявка отправлена"
      >
        <div className="px-2 py-1 text-base text-[#2f3600]">
          Мы свяжемся с вами в ближайшее время.
        </div>
      </Modal>
    </>
  );
}

export const FeedbackForm = CallBackRequestModal;
