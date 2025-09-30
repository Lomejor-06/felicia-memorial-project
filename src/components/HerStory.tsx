const HerStory = () => {
  const storySteps = [
    {
      number: "1",
      title: "Early Life",
      content: "Born on June 5, 1958, in Ibadan, at the heart of Oyo state, Nigeria into the family of Pa Olukayode Olajugbe and Mummy Alice Olajugbe (of blessed memory), of Ajale Compound in Igbajo, Boluwaduro Local Government Area, Osun State. Felicia's journey began in a warm and loving household that instilled in her profound values and an infectious passion for life. Her childhood narrative was woven with threads of hard work and unwavering commitment."
    },
    {
      number: "2", 
      title: "Family & Marriage",
      content: "She married her soulmate 46 years ago(1979), building a beautiful family and home filled with love and laughter. She was selfless and went the extra mile to support her five boys until they all emerged as successful young men who love God and live on purpose. She was a gift to her husband who loved her passionately - They were practically inseparable"
    },
    {
      number: "3",
      title: "Career & Passions", 
      content: "With little education terminating in Primary school, Felicia took an interest in photography, the career that connected her to her husband. They were both photographers for many years after which she began to engage in trading activities as the demand of child raising set in. She was a dedicated trader who was always at her duty post. Outside work, she found interest in prison outreach, visitation to her local church members, and her beloved church choir. She learnt to play the violin until she could play with the church's central choir, this is one passion she pursed to the peak."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-foreground">
          Her Story
        </h2>
        
        <div className="space-y-12">
          {storySteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line */}
              {index < storySteps.length - 1 && (
                <div className="absolute left-8 top-20 w-px h-16 bg-muted opacity-50"></div>
              )}
              
              <div className="flex gap-8 items-start">
                {/* Number circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-semibold">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HerStory;