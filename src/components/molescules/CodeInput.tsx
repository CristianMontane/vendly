import React from "react";

interface CodeInputProps {
  values: string[];
  onChange: (index: number, value: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ values, onChange }) => {
  return (
    <div className="flex justify-between gap-4">
      {values.map((val, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={val}
          onChange={(e) => onChange(index, e.target.value)}
          className="w-14 h-14 text-center text-2xl font-bold rounded-lg border-2 border-gray-200 text-black"
        />
      ))}
    </div>
  );
};

export default CodeInput;
