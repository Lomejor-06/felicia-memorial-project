const Memories = () => {
  const memories = [
    {
      title: "Rising up early to nurture her household",
      content: "Before dawn broke each day, while her children were in primary and secondary school, she would quietly rise and fill the home with delicious aromas from the kitchen. Despite the early hours, her radiant smile never faded as she lovingly prepared meals. With remarkable foresight, she taught all her sons the art of cooking, ensuring they would never lack this essential life skill."
    },
    {
      title: "Unwavering Entrepreneurial Spirit", 
      content: "Her business journey was a testament to her determination—evolving from a modest petty trader to a water factory manager and later on a versatile cement supplier. Through her example, she instilled in us the values of perseverance and commitment to enterprise. It's no wonder that entrepreneurship flows naturally through the veins of all her children today."
    },
    {
      title: "Her Guiding Philosophy",
      content: "\"It is well.\" These simple yet powerful words formed the cornerstone of her approach to life. Whether facing triumph or tribulation, she embodied serene confidence and unshakable faith. Through her example, she taught us that life's most formidable challenges yield to the gentle strength of persistent kindness and unwavering hope."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-foreground">
          Favorite Memories
        </h2>
        
        <div className="space-y-12">
          {memories.map((memory, index) => (
            <div key={index} className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-muted/20">
              <h3 className="text-2xl font-semibold mb-4 text-accent">
                "{memory.title}"
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {memory.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memories;