"use client";

import { useState } from "react";
import { Button } from "../button/Button";
import { Checkbox } from "./Checkbox";
import { DatePicker } from "./DatePicker";
import { Input } from "./Input";
import { Select, type SelectOption } from "./Select";
import { Textarea } from "./Textarea";
import { TimePicker } from "./TimePicker";
import { cn } from "../utils/cn";

export type BookingFormValues = {
  name: string;
  phone: string;
  serviceType: string;
  date: string;
  time: string;
  notes: string;
  agree: boolean;
};

export type BookingFormProps = {
  serviceType?: string;
  options?: SelectOption[];
  onSubmit?: (values: BookingFormValues) => void;
  policyLink?: string;
  className?: string;
};

const defaultOptions: SelectOption[] = [
  { value: "riding", label: "Конная прогулка" },
  { value: "zoo", label: "Посещение мини-зоопарка" },
  { value: "lesson", label: "Обучение верховой езде" },
  { value: "photo", label: "Фотосессия" },
];

export function BookingForm({
  serviceType,
  options = defaultOptions,
  onSubmit,
  policyLink = "/policy",
  className,
}: BookingFormProps) {
  const [values, setValues] = useState<BookingFormValues>({
    name: "",
    phone: "",
    serviceType: serviceType ?? options[0]?.value ?? "",
    date: "",
    time: "",
    notes: "",
    agree: false,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormValues, string>>
  >({});

  const update = <K extends keyof BookingFormValues>(
    key: K,
    value: BookingFormValues[K]
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nextErrors: typeof errors = {};
    if (!values.name) nextErrors.name = "Укажите ваше имя";
    if (!values.phone) nextErrors.phone = "Укажите телефон";
    if (!values.date) nextErrors.date = "Выберите дату";
    if (!values.time) nextErrors.time = "Выберите время";
    if (!values.agree) nextErrors.agree = "Необходимо согласие";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      onSubmit?.(values);
    }
  };

  return (
    <form
      className={cn(
        "grid gap-5 rounded-3xl border border-[#d3c6aa] bg-[#f9e0a2]/40 p-6 shadow-[var(--shadow-soft,0_12px_28px_rgba(56,64,0,0.1))]",
        className
      )}
      onSubmit={handleSubmit}
    >
      <Input
        label="Имя"
        placeholder="Как к вам обращаться?"
        value={values.name}
        onChange={(event) => update("name", event.target.value)}
        error={errors.name}
        autoComplete="name"
      />
      <Input
        label="Телефон"
        placeholder="+7 (999) 123-45-67"
        value={values.phone}
        onChange={(event) => update("phone", event.target.value)}
        error={errors.phone}
        autoComplete="tel"
      />
      <Select
        label="Услуга"
        value={values.serviceType}
        onChange={(event) => update("serviceType", event.target.value)}
        options={options}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <DatePicker
          label="Дата"
          value={values.date}
          onChange={(event) => update("date", event.target.value)}
          error={errors.date}
        />
        <TimePicker
          label="Время"
          value={values.time}
          onChange={(event) => update("time", event.target.value)}
          error={errors.time}
          intervalMinutes={30}
        />
      </div>
      <Textarea
        label="Пожелания"
        placeholder="Например, количество всадников или повод мероприятия"
        value={values.notes}
        onChange={(event) => update("notes", event.target.value)}
      />
      <div className="space-y-2">
        <Checkbox
          checked={values.agree}
          onChange={(event) => update("agree", event.target.checked)}
          label={
            <span>
              Соглашаюсь с{" "}
              <a className="underline" href={policyLink}>
                политикой обработки персональных данных
              </a>
            </span>
          }
        />
        {errors.agree && (
          <p className="text-xs text-[#a03b3b]">{errors.agree}</p>
        )}
      </div>
      <Button type="submit" variant="primary" size="lg">
        Отправить заявку
      </Button>
    </form>
  );
}
