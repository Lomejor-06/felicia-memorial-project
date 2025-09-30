import { Button } from "@/components/ui/button";

const FinalWords = () => {
  const sections = [
    {
      title: "Heartfelt Thanks",
      content: "Words cannot express our gratitude for your love, support, and presence during this difficult time."
    },
    {
      title: "Keeping Memories Alive", 
      content: "We invite you to continue sharing stories that keep Mom's spirit and teachings present in our lives."
    },
    {
      title: "Her Everlasting Love",
      content: "Though she is no longer physically with us, Mom's love continues to guide and sustain us through each day."
    },
    {
      title: "Legacy Continues",
      content: "We honor her memory by living the values she instilled: kindness, strength, faith, and unwavering love."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground underline">
          Thank You & Final Words
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 border border-muted/20">
              <h3 className="text-2xl font-semibold mb-4 text-accent">
                {section.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
                {section.title === "Keeping Memories Alive" && (
                  <Button 
                    variant="link" 
                    className="p-0 h-auto ml-1 text-accent hover:text-accent/80"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe6YFuc7aoWAjHWkyPiuIzGSGzB_f37UTYJ1vmNBN2S02aJug/viewform?usp=preview', '_blank')}
                  >
                    sharing
                  </Button>
                )}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-semibold text-accent italic mb-8">
            "A life that touches others goes on forever."
          </blockquote>
          <p className="text-lg text-muted-foreground font-semibold">
            Thank you for helping us celebrate the beautiful life and lasting legacy 
            of our beloved Felicia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalWords;