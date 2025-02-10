"use client"; // 💡 IMPORTANTE para usar hooks de React

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import PhoneInputField from "../molescules/PhoneInputField";
import Button from "../atoms/Button";
import { ArrowRight } from "lucide-react";
import { mockApi } from "@/api/mockApi";

const PhoneInputForm: React.FC = () => {
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // Estado de carga
  const router = useRouter(); 

  const validatePhone = (value: string) => {
    const phoneRegex = /^\+57\s\d{3}\s\d{3}\s\d{4}$/;
    return phoneRegex.test(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/[^\d\s+]/g, "");

    if (value.startsWith("+57")) {
      value = value.replace(/\D/g, "");
      value = `+57 ${value.slice(2, 5)} ${value.slice(5, 8)} ${value.slice(8, 12)}`.trim();
    }

    setPhone(value);
    if (validatePhone(value)) {
      setIsValid(true);
      setError("");
    } else {
      setIsValid(false);
      setError("Número inválido. Usa el formato +57 XXX XXX XXXX");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 
    if (isValid) {
      setLoading(true); 
      try {
        await mockApi.sendVerificationCode(phone);
        router.push("/phone/verification");
      } catch {
        setError("Error enviando el código.");
      } finally {
        setLoading(false); 
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <PhoneInputField value={phone} onChange={handleChange} error={error} />
      <Button disabled={!isValid || loading}>
        {loading ? "Cargando..." : (
          <>
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </Button>
    </form>
  );
};

export default PhoneInputForm;