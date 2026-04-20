import ProjectsList from "./Components/Project/ProjectsList";
import HeroSection from './Components/Hero/HeroSection';
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 overflow-y-scroll snap-y snap-mandatory">
      <HeroSection />
      <ProjectsList />
      <Footer />
    </div>
  );
}
