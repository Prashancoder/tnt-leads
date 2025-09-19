import { Card, CardContent } from '@/components/ui/card';
import { Users, TrendingUp, Building, Award, Shield, Handshake } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Our Buyers",
      description: "We understand your dreams and necessities and bring them to reality by offering the ideal home that you have always longed for."
    },
    {
      icon: TrendingUp,
      title: "Investors",
      description: "We understand your value points regarding the market, key customers and present you an idea that will generate cash flow."
    },
    {
      icon: Building,
      title: "Developers",
      description: "We don't just commit but deliver results and our track record speaks for itself. With a Goal-Oriented approach, we are one of the topmost real estates."
    },
    {
      icon: Handshake,
      title: "Channel Partners",
      description: "Building a trusted network & keeping the business transparent is what we can boast about. We do offer our support & commit to financial growth."
    }
  ];

  const whyChoose = [
    {
      icon: Award,
      title: "Seasoned Professionals",
      description: "T and T Realty brings a wealth of expertise to every client interaction with 20+ years of professional experience."
    },
    {
      icon: TrendingUp,
      title: "Market Knowledge",
      description: "Our team possesses an intimate understanding of the Gurgaon real estate scene, staying ahead of trends and fluctuations."
    },
    {
      icon: Building,
      title: "Strategic Developer Collaborations",
      description: "Our collaborations ensure clients gain access to the most coveted projects, amplifying investment potential."
    },
    {
      icon: Shield,
      title: "High Customer Satisfaction",
      description: "Our consistently high customer satisfaction rate reflects our client-centric approach and exceptional service delivery."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About T and T Realty</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reality Of Real Estate - T and T Realty Services Private Limited is a leading 
            consultancy company incorporated in 2014 to drive Social and Economic Growth 
            through REAL ESTATE.
          </p>
        </div>

        {/* We Are Happy to Serve */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            We Are Happy to Serve
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-professional transition-smooth">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <feature.icon size={32} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                T and T Realty Services Pvt. Ltd. stands as a leading name in Real Estate 
                Consulting across the Delhi NCR region. Incepted in Year 2014, with our 
                proven track record, client-focused approach, and deep market expertise, 
                we are the trusted partner for navigating the real estate landscape.
              </p>
              <p>
                At T and T Realty, we specialize in a comprehensive range of services for 
                buying, selling, and investing in real estate. We are committed to building 
                partnerships, adding values to our assets & providing strong returns to our 
                investors and associates.
              </p>
              <p>
                T and T derives its name from the <strong>Trust</strong> of its stakeholders 
                and <strong>Transparency</strong> in all transactions. The commitment to these 
                principles ensures that we deliver reliable and effective results for our clients.
              </p>
            </div>
          </div>
          <div className="bg-gradient-primary p-8 rounded-lg text-primary-foreground">
            <h4 className="text-xl font-semibold mb-4">Our Leadership</h4>
            <p className="text-sm mb-4">
              Two main foundation pillars of our company - <strong>Mr. Ashish Thapar</strong> and 
              <strong> Mr. Gurpreet Ratra</strong>, with more than 20 years of Professional and 
              Corporate experience in the world of Real Estate and Infrastructure.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-secondary">20+</div>
                <div className="text-xs">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-xs">Transparent Deals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose T&T Realty */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose T&T Realty?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;