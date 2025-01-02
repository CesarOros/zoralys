import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Cambiauto",
    image: "/cambiauto.png?height=300&width=400",
    details: "https://www.cambiauto.mx",
  },
  //   {
  //     title: "Campaña de Marketing",
  //     image: "/placeholder.svg?height=300&width=400",
  //   },
  //   {
  //     title: "Plataforma E-learning",
  //     image: "/placeholder.svg?height=300&width=400",
  //   },
  //   {
  //     title: "Dashboard Analítico",
  //     image: "/placeholder.svg?height=300&width=400",
  //   },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nuestro Portafolio
        </h2>
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <Link
                  href={project.details}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
