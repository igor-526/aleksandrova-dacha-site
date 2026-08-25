"use client";

import { Button, Checkbox, Modal, cn, Input, Textarea } from "@/ui";
import { type FormEvent, useId, useRef, useState } from "react";
import {
  CallBackRequestError,
  sendCallBackRequest,
} from "../services/sendCallBackRequest";

export type FeedbackFormValues = {
  name: string;
  phone: string;
  comment: string;
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
  comment: "",
  agree: false,
};

const CALLBACK_NAME_MAX_LENGTH = 127;
const CALLBACK_PHONE_MAX_LENGTH = 63;
const CALLBACK_COMMENT_MAX_LENGTH = 2000;

export function CallBackRequestModal({
  policyLink = "/policy",
  className,
  triggerLabel = "Связаться",
}: CallBackRequestModalProps) {
  const [open, setOpen] = useState(false);
  const [sentOpen, setSentOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submittingRef = useRef(false);
  const formId = useId();
  const [values, setValues] = useState<FeedbackFormValues>(defaultValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FeedbackFormValues, string>>
  >({});

  const update = <K extends keyof FeedbackFormValues>(
    key: K,
    value: FeedbackFormValues[K]
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSubmitError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingRef.current) return;

    const nextErrors: typeof errors = {};
    if (!values.name.trim()) nextErrors.name = "Введите имя";
    else if (values.name.length > CALLBACK_NAME_MAX_LENGTH)
      nextErrors.name = `Имя не должно быть длиннее ${CALLBACK_NAME_MAX_LENGTH} символов`;
    if (!values.phone.trim()) nextErrors.phone = "Введите телефон";
    else if (values.phone.length > CALLBACK_PHONE_MAX_LENGTH)
      nextErrors.phone = `Телефон не должен быть длиннее ${CALLBACK_PHONE_MAX_LENGTH} символов`;
    if (values.comment.length > CALLBACK_COMMENT_MAX_LENGTH)
      nextErrors.comment = `Комментарий не должен быть длиннее ${CALLBACK_COMMENT_MAX_LENGTH} символов`;
    if (!values.agree)
      nextErrors.agree =
        "Необходимо согласиться с политикой конфиденциальности";

    setErrors(nextErrors);
    setSubmitError(null);

    if (Object.keys(nextErrors).length === 0) {
      submittingRef.current = true;
      setPending(true);
      try {
        await sendCallBackRequest({
          name: values.name.trim(),
          phone: values.phone.trim(),
          comment: values.comment.trim() || null,
        });
        setOpen(false);
        setSentOpen(true);
        setValues(defaultValues);
      } catch (error) {
        if (error instanceof CallBackRequestError && error.statusCode === 401) {
          setSubmitError(
            "Не удалось определить сайт. Обновите страницу и попробуйте снова.",
          );
        } else if (
          error instanceof CallBackRequestError &&
          error.statusCode === 422
        ) {
          setSubmitError(
            "Проверьте введённые данные и попробуйте отправить заявку снова.",
          );
        } else {
          setSubmitError(
            "Не удалось отправить заявку. Попробуйте ещё раз позже.",
          );
        }
      } finally {
        submittingRef.current = false;
        setPending(false);
      }
    }
  };

  const footer = (
    <div className="flex flex-row flex-nowrap gap-3 justify-end">
      <Button
        type="button"
        variant="secondary"
        size="md"
        className="px-3 py-2 text-xs sm:px-4 sm:text-base"
        onClick={() => setOpen(false)}
        disabled={pending}
      >
        Отмена
      </Button>
      <Button
        type="submit"
        form={formId}
        variant="primary"
        size="md"
        className="px-3 py-2 text-xs sm:px-4 sm:text-base"
        loading={pending}
        disabled={pending}
      >
        {pending ? "Отправляем…" : "Отправить заявку"}
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
        onOpenChange={(nextOpen) => {
          if (!pending) setOpen(nextOpen);
        }}
        title="Связаться с нами"
        footer={footer}
        fullWidthOnMobile={true}
      >
        <form
          id={formId}
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
            maxLength={CALLBACK_NAME_MAX_LENGTH}
            className="px-3 py-2 text-sm sm:px-4 sm:text-base"
          />
          <Input
            label="Телефон"
            placeholder="+7 (999) 123-45-67"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            error={errors.phone}
            autoComplete="tel"
            maxLength={CALLBACK_PHONE_MAX_LENGTH}
            className="px-3 py-2 text-sm sm:px-4 sm:text-base"
          />

          <Textarea
            label="Комментарий"
            placeholder="Расскажите, что вас интересует"
            value={values.comment}
            onChange={(event) => update("comment", event.target.value)}
            error={errors.comment}
            maxLength={CALLBACK_COMMENT_MAX_LENGTH}
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
          {submitError && (
            <p className="text-sm text-[#a03b3b]" role="alert">
              {submitError}
            </p>
          )}
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
