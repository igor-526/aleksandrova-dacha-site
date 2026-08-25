// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CallBackRequestError } from "../services/sendCallBackRequest";
import { CallBackRequestModal } from "./CallBackRequestModal";

const { sendCallBackRequestMock } = vi.hoisted(() => ({
  sendCallBackRequestMock: vi.fn(),
}));

vi.mock("../services/sendCallBackRequest", async (importOriginal) => {
  const actual = await importOriginal<
    typeof import("../services/sendCallBackRequest")
  >();
  return { ...actual, sendCallBackRequest: sendCallBackRequestMock };
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

function openAndFillForm() {
  fireEvent.click(screen.getByRole("button", { name: "Связаться" }));
  fireEvent.change(screen.getByLabelText("Имя"), {
    target: { value: " Анна " },
  });
  fireEvent.change(screen.getByLabelText("Телефон"), {
    target: { value: " +7 999 123-45-67 " },
  });
  fireEvent.change(screen.getByLabelText("Комментарий"), {
    target: { value: " Позвоните вечером " },
  });
  fireEvent.click(
    screen.getByLabelText(/Я согласен с политикой конфиденциальности/),
  );
}

describe("CallBackRequestModal", () => {
  it("submits once, resets the form and shows the success modal", async () => {
    let resolveRequest: (() => void) | undefined;
    sendCallBackRequestMock.mockImplementation(
      () => new Promise<void>((resolve) => { resolveRequest = resolve; }),
    );
    render(<CallBackRequestModal />);
    openAndFillForm();

    const form = document.querySelector("form");
    expect(form).not.toBeNull();
    fireEvent.submit(form!);
    fireEvent.submit(form!);

    expect(sendCallBackRequestMock).toHaveBeenCalledTimes(1);
    expect(sendCallBackRequestMock).toHaveBeenCalledWith({
      name: "Анна",
      phone: "+7 999 123-45-67",
      comment: "Позвоните вечером",
    });
    expect(
      (screen.getByRole("button", { name: "Отправляем…" }) as HTMLButtonElement)
        .disabled,
    ).toBe(true);

    resolveRequest?.();
    await screen.findByText("Мы свяжемся с вами в ближайшее время.");
    expect(screen.queryByLabelText("Имя")).toBeNull();

    const successDialog = screen.getByRole("dialog");
    const closeButtons = within(successDialog).getAllByRole("button", {
      name: "Закрыть",
    });
    fireEvent.click(closeButtons.at(-1)!);
    fireEvent.click(screen.getByRole("button", { name: "Связаться" }));
    expect((screen.getByLabelText("Имя") as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText("Телефон") as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText("Комментарий") as HTMLTextAreaElement).value).toBe("");
  });

  it("shows client errors and does not call the API for invalid data", () => {
    render(<CallBackRequestModal />);
    fireEvent.click(screen.getByRole("button", { name: "Связаться" }));
    fireEvent.click(screen.getByRole("button", { name: "Отправить заявку" }));

    expect(screen.getByText("Введите имя")).toBeTruthy();
    expect(screen.getByText("Введите телефон")).toBeTruthy();
    expect(
      screen.getByText("Необходимо согласиться с политикой конфиденциальности"),
    ).toBeTruthy();
    expect(sendCallBackRequestMock).not.toHaveBeenCalled();
  });

  it("uses backend field limits for client-side validation", () => {
    render(<CallBackRequestModal />);
    fireEvent.click(screen.getByRole("button", { name: "Связаться" }));

    const name = screen.getByLabelText("Имя") as HTMLInputElement;
    const phone = screen.getByLabelText("Телефон") as HTMLInputElement;
    const comment = screen.getByLabelText("Комментарий") as HTMLTextAreaElement;
    expect(name.maxLength).toBe(127);
    expect(phone.maxLength).toBe(63);
    expect(comment.maxLength).toBe(2000);

    fireEvent.change(name, { target: { value: "А".repeat(128) } });
    fireEvent.change(phone, { target: { value: "+79991234567" } });
    fireEvent.click(
      screen.getByLabelText(/Я согласен с политикой конфиденциальности/),
    );
    fireEvent.click(screen.getByRole("button", { name: "Отправить заявку" }));

    expect(screen.getByText("Имя не должно быть длиннее 127 символов")).toBeTruthy();
    expect(sendCallBackRequestMock).not.toHaveBeenCalled();
  });

  it.each([
    [401, "Не удалось определить сайт. Обновите страницу и попробуйте снова."],
    [422, "Проверьте введённые данные и попробуйте отправить заявку снова."],
  ])("preserves data and explains backend %s errors", async (statusCode, message) => {
    sendCallBackRequestMock.mockRejectedValue(
      new CallBackRequestError("backend error", statusCode),
    );
    render(<CallBackRequestModal />);
    openAndFillForm();

    fireEvent.click(screen.getByRole("button", { name: "Отправить заявку" }));

    expect((await screen.findByRole("alert")).textContent).toContain(message);
    expect((screen.getByLabelText("Имя") as HTMLInputElement).value).toBe(" Анна ");
    expect((screen.getByLabelText("Телефон") as HTMLInputElement).value).toBe(" +7 999 123-45-67 ");
    expect((screen.getByLabelText("Комментарий") as HTMLTextAreaElement).value).toBe(" Позвоните вечером ");
    await waitFor(() => {
      expect(
        (screen.getByRole("button", { name: "Отправить заявку" }) as HTMLButtonElement)
          .disabled,
      ).toBe(false);
    });
  });

  it("preserves data and shows a generic request error", async () => {
    sendCallBackRequestMock.mockRejectedValue(new Error("offline"));
    render(<CallBackRequestModal />);
    openAndFillForm();

    fireEvent.click(screen.getByRole("button", { name: "Отправить заявку" }));

    expect((await screen.findByRole("alert")).textContent).toContain(
      "Не удалось отправить заявку. Попробуйте ещё раз позже.",
    );
    expect((screen.getByLabelText("Имя") as HTMLInputElement).value).toBe(" Анна ");
  });
});
