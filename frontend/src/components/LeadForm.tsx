import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';
import { apiPost } from '@/lib/api';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type LeadFormVariant = 'full' | 'compact';

interface LeadFormProps {
  variant?: LeadFormVariant;
  transparent?: boolean;
  onSubmitted?: () => void;
}

const LeadForm = ({ variant = 'full', transparent = false, onSubmitted }: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your full name",
        variant: "destructive"
      });
      return;
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Phone number is required",
        description: "Please enter your phone number",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await apiPost('/api/leads', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        source: 'website-landing'
      });
      
      toast({
        title: "Thank you for your interest!",
        description: "Our team will contact you within 24 hours.",
        variant: "default"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      if (onSubmitted) onSubmitted();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const FormCard = (
    <Card className={cn('shadow-card backdrop-blur-md', transparent ? 'bg-background/60 border-white/20' : '')}>
      <CardHeader>
        <CardTitle>Request Free Consultation</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="flex items-center gap-2">
              <User size={16} />
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter your full name"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail size={16} />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Enter your email address"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone size={16} />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="Enter your phone number"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare size={16} />
              Your Requirements
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell us about your property requirements, budget, preferred location, etc."
              className="mt-1"
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Send My Request'}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our Privacy Policy and Terms & Conditions
          </p>
        </form>
      </CardContent>
    </Card>
  );

  if (variant === 'compact') {
    return FormCard;
  }

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a free consultation with our expert team. Share your requirements 
              and let us help you find the perfect property investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                  <CardDescription>
                    Contact our experienced team for personalized real estate solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" size={20} />
                    <div>
                      <div className="font-semibold">Call Us Now</div>
                      <div className="text-muted-foreground">+91 8088113333</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-muted-foreground">info@tandtrealty.in</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success mt-1" size={20} />
                    <div>
                      <div className="font-semibold">HARERA Registered</div>
                      <div className="text-muted-foreground">Reg No: /Ext1/2023/222</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
                <h3 className="text-xl font-semibold mb-3">Why Choose T&T Realty?</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ 10+ Years of Experience</li>
                  <li>✓ 2000+ Satisfied Customers</li>
                  <li>✓ HARERA Registered Company</li>
                  <li>✓ End-to-end Property Solutions</li>
                  <li>✓ Transparent Dealings</li>
                </ul>
              </div>
            </div>

            {FormCard}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;