import { Button } from "@/components/ui/button";
import feliciaPortrait from "@/assets/felicia-portrait.avif";

const Hero = () => {
  return (
    <section className="min-h-screen bg-background text-foreground px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            In Loving Memory of{" "}
            <span className="font-semibold">
              FELICIA OLUWAYEMISI BAMIGBAYAN
            </span>
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            A cherished wife, mother, grandmother, sister, friend, and pillar of 
            strength who touched countless lives with her boundless love and service. 
            Though she left us on May 25, 2025, her works live on and we know that 
            we shall meet again in heaven.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 text-base font-medium"
              onClick={() => window.open('https://docs.google.com/forms/d/11EIX9XmOrG1VX4XrGd5KWfKI7b6zaUwPnTAzWSym1DM/preview', '_blank')}
            >
              Share Your Memory
            </Button>
            <Button 
              variant="accent" 
              size="lg" 
              className="px-8 py-4 text-base font-medium"
              onClick={() => document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Memorial Service Details
            </Button>
          </div>
        </div>
        
        {/* Right Portrait */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={feliciaPortrait}
                alt="Felicia Oluwayemisi Bamigbayan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;