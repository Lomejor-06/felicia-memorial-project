import { Button } from "@/components/ui/button";

const Tributes = () => {
  const tributes = [
    {
      from: "Mrs. Johnson",
      message: "Felicia wasn't just a colleague but a guiding light"
    },
    {
      from: "The Choir",
      message: "She was an example of dedication in the choir ministry"  
    },
    {
      from: "Pastor Dave",
      message: "Heaven's choir has gained a magnificent voice. Felicia's faith wasn't just in her words but in her actions"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground underline">
          Tributes and Condolences
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tributes.map((tribute, index) => (
            <div key={index} className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-muted/20 text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent">
                From {tribute.from}
              </h3>
              <p className="text-foreground italic">
                {tribute.message}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="accent" 
            size="lg"
            className="px-8 py-4 text-base font-medium"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe6YFuc7aoWAjHWkyPiuIzGSGzB_f37UTYJ1vmNBN2S02aJug/viewform?usp=preview', '_blank')}
          >
            Drop a Tribute
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tributes;