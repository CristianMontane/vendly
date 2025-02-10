interface InputProps {
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type = "text", value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full pl-16 pr-4 h-14 rounded-lg border-2 border-gray-200 text-xl font-medium tracking-wide text-zinc-800"
    />
  );
};

export default Input;
