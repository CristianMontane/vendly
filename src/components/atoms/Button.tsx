interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-14 rounded-lg text-lg font-medium flex items-center justify-center gap-2 
        ${disabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-black text-white"}`}
    >
      {children}
    </button>
  );
};

export default Button;
