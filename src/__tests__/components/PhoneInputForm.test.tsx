import { render, screen, fireEvent } from "@testing-library/react";
import PhoneInputForm from "@/components/organisms/PhoneInputForm";
import { useRouter } from "next/navigation";
import { describe } from "node:test";
import jest from "next/jest";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("PhoneInputForm", () => {
  it("renderiza correctamente", () => {
    render(
      <AuthProvider>
        <PhoneInputForm />
      </AuthProvider>
    );
    expect(screen.getByText("Continuar")).toBeInTheDocument();
  });

  it("muestra error si el número de teléfono es inválido", () => {
    render(
      <AuthProvider>
        <PhoneInputForm />
      </AuthProvider>
    );

    const input = screen.getByPlaceholderText("+57 XXX XXX XXXX");
    fireEvent.change(input, { target: { value: "12345" } });

    expect(screen.getByText("Número inválido. Usa el formato +57 XXX XXX XXXX")).toBeInTheDocument();
  });

  it("redirige a la página de verificación si el número es válido", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(
      <AuthProvider>
        <PhoneInputForm />
      </AuthProvider>
    );

    const input = screen.getByPlaceholderText("+57 XXX XXX XXXX");
    fireEvent.change(input, { target: { value: "+57 321 123 4567" } });

    const button = screen.getByText("Continuar");
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith("/verification");
  });
});
