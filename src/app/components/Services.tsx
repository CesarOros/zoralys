// import {
//   CodeBracketIcon,
//   MegaphoneIcon,
//   ChartBarIcon,
// } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Desarrollo de Software",
    description:
      "Creamos soluciones de software personalizadas para impulsar tu negocio.",
    //icon: CodeBracketIcon,
  },
  {
    title: "Marketing Digital",
    description:
      "Estrategias de marketing innovadoras para aumentar tu presencia online.",
    //icon: MegaphoneIcon,
  },
  {
    title: "Análisis de Datos",
    description: "Transformamos datos en insights accionables para tu negocio.",
    //icon: ChartBarIcon,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              {/* <service.icon className="h-12 w-12 text-blue-600 mb-4" /> */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
