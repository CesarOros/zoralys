// import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="absolute z-0 opacity-50"
      /> */}
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Innovación en Software y Marketing
        </h1>
        <p className="text-xl mb-8">
          Impulsamos tu negocio con soluciones tecnológicas de vanguardia
        </p>
        <a
          href="#contacto"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
}
