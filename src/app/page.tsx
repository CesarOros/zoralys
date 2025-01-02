import Banner from "./components/Banner";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <ContactForm />
    </main>
  );
}
