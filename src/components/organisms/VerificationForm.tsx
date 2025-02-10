"use client";

import React, { useState, useEffect } from "react";
import CodeInput from "../molescules/CodeInput";
import Button from "../atoms/Button";
import TimerDisplay from "../atoms/TimerDisplay";
import { mockApi } from "@/api/mockApi";
import { useRouter } from "next/navigation";

const VerificationForm: React.FC = () => {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState<number>(120); 
  const [loading, setLoading] = useState<boolean>(false); // Estado de carga
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true); // Iniciar carga
    try {
      await mockApi.verifyCode(code.join(""));
      alert("Código correcto");
      router.push("/");
    } catch {
      console.error("Código incorrecto");
    } finally {
      setLoading(false); // Finalizar carga
    }
  };

  // Manejo de cambio en los inputs
  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  // Manejo del temporizador
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Formatear el tiempo restante
  const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(2, "0")}:${String(
    timeLeft % 60
  ).padStart(2, "0")}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CodeInput values={code} onChange={handleChange} />
      <TimerDisplay timeLeft={formattedTime} />
      <Button disabled={code.includes("") || loading}>
        {loading ? "Verificando..." : "Verificar"}
      </Button>
      <button type="button" className="w-full py-2 text-center text-gray-900 font-medium">
        Reenviar código
      </button>
    </form>
  );
};

export default VerificationForm;