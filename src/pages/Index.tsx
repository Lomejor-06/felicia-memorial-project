import Hero from "@/components/Hero";
import HerStory from "@/components/HerStory";
import PhotoGallery from "@/components/PhotoGallery";
import Impact from "@/components/Impact";
import Memories from "@/components/Memories";
import Tributes from "@/components/Tributes";
import ServiceDetails from "@/components/ServiceDetails";
import FinalWords from "@/components/FinalWords";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HerStory />
      <PhotoGallery />
      <Impact />
      <Memories />
      <Tributes />
      <ServiceDetails />
      <FinalWords />
    </div>
  );
};

export default Index;
