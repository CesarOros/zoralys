export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>&copy; 2025 Zoralys. Todos los derechos reservados.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
