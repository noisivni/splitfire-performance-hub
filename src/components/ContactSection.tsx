import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree submission (replace YOUR_FORM_ID with actual Formspree endpoint)
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: 'We\'ll get back to you as soon as possible.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please call us directly.',
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-carbon relative">
      <div className="absolute inset-0 carbon-texture opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-racing-blue uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Book Your <span className="text-gradient-racing">Service</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to get your car running right? Drop us a message or call us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="card-gradient rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-muted border-border focus:border-racing-blue"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-muted border-border focus:border-racing-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="bg-muted border-border focus:border-racing-blue"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your vehicle and what you need..."
                  rows={5}
                  required
                  className="bg-muted border-border focus:border-racing-blue resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://maps.google.com/?q=6160+Netherhart+Rd+Unit+10+Mississauga+ON"
                target="_blank"
                rel="noopener noreferrer"
                className="card-gradient rounded-lg p-6 hover:border-racing-blue/50 transition-all duration-300 group"
              >
                <MapPin className="w-6 h-6 text-racing-blue mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">Address</h3>
                <p className="text-sm text-muted-foreground">
                  6160 Netherhart Rd Unit 10<br />
                  Mississauga, ON
                </p>
              </a>

              <a
                href="tel:9054572977"
                className="card-gradient rounded-lg p-6 hover:border-racing-blue/50 transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 text-racing-blue mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">(905) 457-2977</p>
              </a>

              <div className="card-gradient rounded-lg p-6">
                <Clock className="w-6 h-6 text-fire-orange mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Mon-Fri: 9am - 6pm<br />
                  Sat: 10am - 4pm
                </p>
              </div>

              <a
                href="mailto:info@splitfireauto.ca"
                className="card-gradient rounded-lg p-6 hover:border-racing-blue/50 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-fire-orange mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">info@splitfireauto.ca</p>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden border border-border h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.6847456!2d-79.6892!3d43.7031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d0d0d0d0d0d%3A0x0!2s6160%20Netherhart%20Rd%20Unit%2010%2C%20Mississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Splitfire Auto Repairs Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
