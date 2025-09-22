import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Wind, 
  Baby, 
  Users, 
  Dumbbell, 
  Trophy,
  Stethoscope
} from "lucide-react";
import physiotherapyImage from "@/assets/physiotherapy.jpg";

const PhysiotherapyServices = () => {
  const services = [
    {
      title: "CardioThoracic",
      description: "Specialized rehabilitation for patients recovering from cardiac and thoracic surgeries, improving cardiovascular health and respiratory function",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      title: "Respiratory",
      description: "Comprehensive pulmonary rehabilitation for conditions like COPD, asthma, and post-COVID recovery to enhance breathing capacity",
      icon: Wind,
      color: "text-blue-500", 
      bgColor: "bg-blue-50",
    },
    {
      title: "Gynaecology & Obstetrics",
      description: "Specialized care for women's health including prenatal and postnatal physiotherapy, pelvic floor rehabilitation",
      icon: Baby,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      title: "Geriatrics",
      description: "Age-appropriate therapy for elderly patients focusing on mobility, balance, fall prevention, and maintaining independence",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      title: "General Well Being & Physical",
      description: "Comprehensive physical wellness programs for pain management, posture correction, and overall fitness improvement",
      icon: Dumbbell,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Sports Physiotherapy",
      description: "Performance enhancement and injury prevention for athletes, sports injury rehabilitation and return-to-sport programs",
      icon: Trophy,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-healthcare mb-4">
            Explore Our Physiotherapy Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert physiotherapy treatments tailored to your specific needs and recovery goals
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-soft max-w-4xl mx-auto">
            <img
              src={physiotherapyImage}
              alt="Professional physiotherapy treatment"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Professional Physiotherapy Care</h3>
              <p className="text-muted-foreground">
                Our certified physiotherapists provide evidence-based treatments to help you recover and thrive
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 border-0 shadow-soft p-6 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-7 h-7 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-healthcare flex-1">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-healthcare group-hover:text-healthcare-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="healthcare" size="lg">
            <Stethoscope className="mr-2 h-5 w-5" />
            Book Physiotherapy Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyServices;