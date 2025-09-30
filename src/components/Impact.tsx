const Impact = () => {
  const impactAreas = [
    {
      title: "Unconditional Love",
      description: "The foundation of everything she did"
    },
    {
      title: "Community Building", 
      description: "She was always looking out for the steadfastness and growth of the people around her"
    },
    {
      title: "Music Artistry",
      description: "She stirred up the choir in our local church and ensured that the choir in our jurisdiction was dutiful and committed. she excelled with the violin"
    },
    {
      title: "Family Values",
      description: "Raised a family rooted in integrity, compassion, and resilience. She was a dutiful home keeper that rose early consistently to give meat to her house"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground underline">
          Her Impact and Legacy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {impactAreas.map((area, index) => (
            <div key={index} className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 border border-muted/20">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {area.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-lg text-muted-foreground max-w-4xl mx-auto">
          Felicia's impact extends far beyond her immediate circle. Her dedication to 
          uplifting others created ripples that continue to transform lives in our 
          community and beyond.
        </p>
      </div>
    </section>
  );
};

export default Impact;