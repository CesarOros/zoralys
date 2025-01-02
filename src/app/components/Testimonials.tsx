import Image from "next/image";

const testimonials = [
  {
    name: "María González",
    company: "Tech Innovators",
    quote:
      "Zoralys transformó nuestra presencia online y aumentó nuestras ventas en un 200%.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Carlos Rodríguez",
    company: "Digital Solutions",
    quote:
      "Su equipo de desarrollo creó una aplicación que superó todas nuestras expectativas.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
