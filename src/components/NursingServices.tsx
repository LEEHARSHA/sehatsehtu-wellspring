import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Thermometer, 
  Wind, 
  Syringe, 
  Droplet, 
  Zap, 
  Bath, 
  Activity,
  UserCheck
} from "lucide-react";
import vitalCheckImage from "@/assets/vital-check.jpg";
import nebulizationImage from "@/assets/nebulization.jpg";
import vaccinationImage from "@/assets/vaccination.jpg";

const NursingServices = () => {
  const services = [
    {
      title: "Vital Check & GRBS Monitoring",
      description: "Comprehensive vital signs monitoring including blood pressure, pulse, temperature, and glucose levels",
      icon: Thermometer,
      image: vitalCheckImage,
    },
    {
      title: "Nebulization",
      description: "Professional respiratory therapy using nebulizers for asthma, COPD, and other respiratory conditions",
      icon: Wind,
      image: nebulizationImage,
    },
    {
      title: "Immunization & Vaccination",
      description: "Safe and sterile vaccination services for children and adults following WHO guidelines",
      icon: Syringe,
      image: vaccinationImage,
    },
    {
      title: "Feeds (Nasogastric & Jejunal Tube)",
      description: "Expert management of enteral feeding for patients requiring nutritional support",
      icon: Droplet,
    },
    {
      title: "IV Cannula Insertion",
      description: "Sterile intravenous access for medication administration and fluid management",
      icon: Zap,
    },
    {
      title: "Sitz Bath",
      description: "Therapeutic warm water treatment for perineal healing and pain relief",
      icon: Bath,
    },
    {
      title: "Sponge Bath",
      description: "Gentle assisted bathing for bedridden patients maintaining hygiene and comfort",
      icon: Bath,
    },
    {
      title: "Injections",
      description: "Professional administration of intramuscular, subcutaneous, and intravenous medications",
      icon: Syringe,
    },
    {
      title: "ECG",
      description: "Electrocardiogram monitoring for cardiac health assessment and diagnosis",
      icon: Activity,
    },
    {
      title: "Urinary Catheterization",
      description: "Sterile catheter insertion and management for urinary retention and incontinence",
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Explore Our Nursing Care Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional healthcare services delivered by certified nurses in the comfort of your home
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 border-0 shadow-soft overflow-hidden"
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="medical" size="lg">
            <Heart className="mr-2 h-5 w-5" />
            Book Nursing Service Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NursingServices;