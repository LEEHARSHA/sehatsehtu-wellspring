import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, Phone, Star } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional healthcare team"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-medical opacity-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            SehatSehtu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional Healthcare Services at Your Doorstep
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-healthcare text-healthcare" />
            ))}
            <span className="text-sm text-muted-foreground ml-2">Trusted by 1000+ families</span>
          </div>
        </header>

        {/* Booking Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-card/95 backdrop-blur-sm border-0 shadow-soft hover:shadow-card-hover transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Nursing Care</h3>
                <p className="text-muted-foreground mb-6">
                  Professional nursing services including vital monitoring, medication management, and specialized care
                </p>
                <Button variant="medical" size="xl" className="w-full">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Nursing Care
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/95 backdrop-blur-sm border-0 shadow-soft hover:shadow-card-hover transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-healthcare rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-healthcare-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-healthcare mb-2">Physiotherapy</h3>
                <p className="text-muted-foreground mb-6">
                  Expert physiotherapy treatments for rehabilitation, pain management, and wellness
                </p>
                <Button variant="healthcare" size="xl" className="w-full">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Physiotherapy
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Contact */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Need immediate assistance?</p>
          <Button variant="booking" size="lg">
            <Phone className="mr-2 h-5 w-5" />
            Call Now: +91-XXXX-XXXX
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;