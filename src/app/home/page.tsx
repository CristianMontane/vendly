export default function Home() {
    return (
      <div className="min-h-screen bg-gray-100">
  
        {/* Main Content */}
        <main className="container mx-auto mt-8 p-4">
          <h2 className="text-3xl font-semibold mb-6">Bienvenido, Usuario</h2>
  
          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stock Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Stock</h3>
              <p className="text-4xl font-bold text-black">1,234</p>
              <p className="text-sm text-gray-500 mt-2">Productos en inventario</p>
            </div>
  
            {/* Ganancias Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Ganancias</h3>
              <p className="text-4xl font-bold text-green-600">$5,678</p>
              <p className="text-sm text-gray-500 mt-2">Ingresos este mes</p>
            </div>
  
            {/* Ventas Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Ventas</h3>
              <p className="text-4xl font-bold text-black">89</p>
              <p className="text-sm text-gray-500 mt-2">Pedidos completados</p>
            </div>
  
            {/* Clientes Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Clientes</h3>
              <p className="text-4xl font-bold text-black">256</p>
              <p className="text-sm text-gray-500 mt-2">Clientes activos</p>
            </div>
  
            {/* Productos Populares Card */}
            <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Productos Populares</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Producto A</span>
                  <span className="text-green-600 font-semibold">143 ventas</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Producto B</span>
                  <span className="text-green-600 font-semibold">98 ventas</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Producto C</span>
                  <span className="text-green-600 font-semibold">76 ventas</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Acciones Rápidas */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Acciones Rápidas</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Añadir Producto
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Ver Pedidos
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Gestionar Inventario
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }
  
  