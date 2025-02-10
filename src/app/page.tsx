import Link from "next/link"
import { ArrowRight } from "lucide-react"

const LoginLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white">

      <div className="w-full max-w-md mx-auto ">

        {/* Welcome Message */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold text-white">Bienvenido</h2>
          <p className="text-xl text-gray-400">Comienza con tu cuenta</p>
        </div>

        {/* Continue Button */}
        <Link href="/phone">
          <button
            className="w-full h-14 rounded-lg bg-white text-black text-lg 
            font-medium flex items-center justify-center gap-2 
            transition-all hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>

        {/* Terms */}
        <p className="text-center text-sm mt-8 text-gray-400">
          Al continuar, aceptas nuestros{" "}
          <button className="font-medium text-white hover:underline focus:outline-none">Términos y Condiciones</button>
        </p>
      </div>
    </div>
  )
}

export default LoginLanding
