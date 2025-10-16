import Profile from "@/app/components/profile/profile";
import Projects from "@/app/components/projects/projects";
import Footer from "@/app/components/footer/footer";
import ContactMe from "@/app/components/contact/contact-form/contact-me";

export default function Home() {
  return (
      <>
        <Profile/>
        <Projects/>
        <ContactMe/>
        <Footer/>
      </>
  );
}
