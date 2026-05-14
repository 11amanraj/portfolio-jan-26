import ProjectsList from "../Components/Project/ProjectsList";
import HeroSection from "../Components/Hero/HeroSection";
import Footer from "../Components/Footer/Footer";
import UICarousel from "../Components/Home/UICarousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 overflow-y-scroll snap-y snap-mandatory">
      <HeroSection />
      <ProjectsList />
      <div className="bg-primary -mt-8">
        <UICarousel />
      </div>
      <Footer />
    </div>
  );
}
