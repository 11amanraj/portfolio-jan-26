import ProjectsList from "./Components/Project/ProjectsList";
import HeroSection from './Components/Hero/HeroSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 overflow-y-scroll snap-y snap-mandatory">
      <HeroSection />
      <ProjectsList />
    </div>
  );
}
