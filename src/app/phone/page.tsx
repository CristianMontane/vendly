import PhoneInputForm from "@/components/organisms/PhoneInputForm";

const PhoneInput: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-md mx-auto px-6">
        <div className="text-center space-y-2 mb-16 mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">Ingresa tu número</h2>
          <p className="text-lg text-gray-600">Lo usarás para iniciar sesión</p>
        </div>
        <PhoneInputForm />
      </div>
    </div>
  );
};

export default PhoneInput;
