import Profile from "@/app/components/profile/profile";
import Projects from "@/app/components/projects/projects";
import Footer from "@/app/components/footer/footer";
import ContactForm from "@/app/components/contact/contact-form/contact-form";

export default function Home() {
  return (
      <>
        <Profile/>
        <Projects/>
        <ContactForm/>
        <Footer/>
      </>
  );
}
