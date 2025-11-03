import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Input } from "../forms/Input";
import { Textarea } from "../forms/Textarea";
import { Select } from "../forms/Select";
import { Checkbox } from "../forms/Checkbox";
import { Radio } from "../forms/Radio";
import { Switch } from "../forms/Switch";
import { DatePicker } from "../forms/DatePicker";
import { TimePicker } from "../forms/TimePicker";
import { FileUpload } from "../forms/FileUpload";
import { BookingForm } from "../forms/BookingForm";

const meta: Meta = {
  tags: ["autodocs"],
  title: "UI/Forms",
  parameters: {
    layout: "centered",
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj;

export const Controls: Story = {
  render: () => {
    const [value, setValue] = useState("initial");
    const [selected, setSelected] = useState("option1");
    const [checked, setChecked] = useState(true);
    const [radio, setRadio] = useState("r1");
    const [switchOn, setSwitchOn] = useState(false);

    return (
      <div className="grid max-w-3xl gap-6 rounded-3xl bg-[#fdfaf4] p-6 text-[#2f3600]">
        <Input
          label="Имя"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Ваше имя"
        />
        <Textarea
          label="Комментарий"
          placeholder="Расскажите о своих пожеланиях"
          helperText="Можно до 500 символов"
        />
        <Select
          label="Услуга"
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          options={[
            { value: "option1", label: "Прогулка" },
            { value: "option2", label: "Фотосессия" },
            { value: "option3", label: "Мини-зоопарк" },
          ]}
        />
        <div className="flex flex-wrap gap-6">
          <Checkbox
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            label="Согласен с правилами клуба"
          />
          <Radio
            checked={radio === "r1"}
            onChange={() => setRadio("r1")}
            name="radio-demo"
            label="Маршрут №1"
          />
          <Radio
            checked={radio === "r2"}
            onChange={() => setRadio("r2")}
            name="radio-demo"
            label="Маршрут №2"
          />
          <Switch
            checked={switchOn}
            onChange={(event) => setSwitchOn(event.target.checked)}
            label="Напомнить за сутки"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <DatePicker label="Дата" />
          <TimePicker label="Время" />
        </div>
        <FileUpload
          label="Прикрепите фото"
          helperText="до 10МБ, форматы JPG/PNG"
        />
      </div>
    );
  },
};

export const FullBookingForm: Story = {
  render: () => (
    <div className="max-w-3xl bg-[#f8f2e4] p-6">
      <BookingForm
        options={[
          { value: "riding", label: "Конная прогулка" },
          { value: "lesson", label: "Индивидуальная тренировка" },
          { value: "zoo", label: "Мини-зоопарк" },
        ]}
        policyLink="#"
        onSubmit={(values) => {
          console.log("Booking submitted", values);
        }}
      />
    </div>
  ),
};
