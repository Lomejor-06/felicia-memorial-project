import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Youtube } from "lucide-react";

const ServiceDetails = () => {
  const events = [
    {
      title: "Service of Songs",
      date: "Wednesday, July 23, 2025",
      time: "4:00 PM",
      venue: "Deeper Life Bible Church, Ikosi, Ketu, Lagos. 2-6, Rufai Close, behind Chisco Park, Ikosi, Ketu, Lagos"
    },
    {
      title: "Burial Service", 
      date: "Thursday, July 24, 2025",
      time: "09:00 AM",
      venue: "Deeper Life Bible Church, Rufai Close, Ikosi , Ketu, Lagos. 2-6, Rufai Close, behind Chisco Park, Ikosi, Ketu, Lagos"
    },
    {
      title: "Interment",
      date: "Thursday, July 24, 2025", 
      time: "Following Burial Service",
      venue: "RCCG Memorial Garden"
    }
  ];

  return (
    <section id="service-details" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground underline">
          Celebration of Life Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div key={index} className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 border border-muted/20">
              <h3 className="text-2xl font-semibold mb-6 text-accent text-center">
                {event.title}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{event.date}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{event.time}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {event.venue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 border border-muted/20">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground underline">
            Virtual Attendance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="mb-4 text-muted-foreground">
                Click the button below to view Service of Songs
              </p>
              <Button 
                variant="accent" 
                size="lg"
                className="px-8 py-4 text-base font-medium"
                onClick={() => window.open('https://youtu.be/7AvDQw1XoUU', '_blank')}
              >
                <Youtube className="w-5 h-5 mr-2" />
                Service of Songs
              </Button>
            </div>
            
            <div className="text-center">
              <p className="mb-4 text-muted-foreground">
                Click the button below to view Funeral service
              </p>
              <Button 
                variant="accent" 
                size="lg"
                className="px-8 py-4 text-base font-medium"
                onClick={() => window.open('https://youtu.be/J9Jy56KIthE', '_blank')}
              >
                <Youtube className="w-5 h-5 mr-2" />
                Funeral Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;