import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Building2, 
  ShoppingBag, 
  MapPin, 
  TrendingUp, 
  Users, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Properties",
      description: "Premium apartments, villas, and plots in prime locations across Gurgaon and Delhi NCR.",
      features: ["Ready to Move", "Under Construction", "Luxury Villas", "Affordable Housing"]
    },
    {
      icon: Building2,
      title: "Commercial Properties",
      description: "Strategic commercial spaces including offices, retail, and mixed-use developments.",
      features: ["Office Spaces", "Retail Shops", "IT Parks", "Co-working Spaces"]
    },
    {
      icon: ShoppingBag,
      title: "Retail Shops",
      description: "High-footfall retail spaces in premium malls and commercial complexes.",
      features: ["Mall Shops", "Street Retail", "Food Courts", "Brand Outlets"]
    },
    {
      icon: MapPin,
      title: "SCO Plots",
      description: "Shop-cum-Office plots in developing sectors with excellent growth potential.",
      features: ["Prime Locations", "High ROI", "Flexible Usage", "Investment Grade"]
    }
  ];

  const developers = [
    { name: "DLF", logo: "🏢" },
    { name: "M3M", logo: "🏗️" },
    { name: "Emaar", logo: "🌟" },
    { name: "Vatika", logo: "🌿" },
    { name: "Orris", logo: "⭐" },
    { name: "Trump", logo: "🏛️" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">T and T Realty Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your investment goals and lifestyle needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-professional transition-smooth">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <service.icon size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary p-8 md:p-12 rounded-lg text-center text-primary-foreground mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Invest in Your Future?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Let our expert team guide you to the perfect property investment. 
            Get personalized recommendations based on your budget and goals.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-secondary text-secondary-foreground hover:bg-secondary-light transition-smooth"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>

        {/* Our Associations */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Developer Associations
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {developers.map((developer, index) => (
              <Card key={index} className="shadow-card hover:shadow-professional transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">{developer.logo}</div>
                  <div className="font-semibold text-sm">{developer.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Partnered with leading developers to bring you exclusive projects and competitive prices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;