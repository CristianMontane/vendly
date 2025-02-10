import React from "react";
import { Phone } from "lucide-react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import IconWrapper from "../atoms/IconWrapper";

interface PhoneInputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({ value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <Label>Número de teléfono</Label>
      <div className="relative">
        <IconWrapper>
          <Phone className="w-5 h-5 text-gray-600" />
        </IconWrapper>
        <Input type="tel" value={value} placeholder="+57 XXX XXX XXXX" onChange={onChange} />
      </div>
      {error && <p className="text-sm text-red-500 pl-4">{error}</p>}
    </div>
  );
};

export default PhoneInputField;
