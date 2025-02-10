interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <label className="block text-base font-medium text-gray-900">{children}</label>;
};

export default Label;
