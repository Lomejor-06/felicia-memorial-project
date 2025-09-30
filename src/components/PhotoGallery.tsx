const PhotoGallery = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground underline">
          Photo Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto">
            <div className="relative w-full aspect-[3/4]">
              <img
                src="/Wedding Anniversary Image.avif"
                alt="Wedding Anniversary Celebration"
                className="w-full max-h-[500px] object-contain mx-auto"
              />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto">
            <div className="relative w-full aspect-[3/4]">
              <img
                src="/Family Portrait.avif" 
                alt="Family Portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <p className="text-center text-lg text-muted-foreground italic">
          A life beautifully lived through moments big and small.
        </p>
      </div>
    </section>
  );
};

export default PhotoGallery;