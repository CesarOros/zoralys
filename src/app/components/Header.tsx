import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Zoralys</div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="text-gray-800 hover:text-blue-600"
            >
              Servicios
            </Link>
            <Link
              href="#portafolio"
              className="text-gray-800 hover:text-blue-600"
            >
              Portafolio
            </Link>
            <Link
              href="#testimonios"
              className="text-gray-800 hover:text-blue-600"
            >
              Testimonios
            </Link>
            <Link
              href="#contacto"
              className="text-gray-800 hover:text-blue-600"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
