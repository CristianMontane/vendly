import { MessageCircle } from "lucide-react";
import VerificationForm from "@/components/organisms/VerificationForm";

const VerificationCode: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-md mx-auto px-6">
        <div className="mb-8 text-center mt-16">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-100">
            <MessageCircle className="w-8 h-8 text-gray-900" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Ingresa el código</h2>
          <p className="text-gray-600">Enviado al +57 XXX XXX XXXX</p>
        </div>
        <VerificationForm />
      </div>
    </div>
  );
};

export default VerificationCode;
