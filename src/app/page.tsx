// ** Components
import AboutPage from "@/components/about/AboutPage";
import OurWork from "@/components/about/OurWork";
import ClientsPage from "@/components/Clients/ClientsPage";
import ContactPage from "@/components/contact/ContactPage";
import HomePage from "@/components/Home/HomePage";
import ProjectPage from "@/components/projects/ProjectPage";
import ServicePage from "@/components/services/ServicePage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ServicePage />
      <AboutPage />
      <OurWork />
      <ProjectPage />
      <ClientsPage />
      <ContactPage />
    </div>
  );
}
