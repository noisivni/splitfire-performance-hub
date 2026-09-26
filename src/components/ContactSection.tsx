import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xdaarjjq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({ title: 'Message Sent!', description: "We'll get back to you as soon as possible." });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else throw new Error('Form submission failed');
    } catch (error) {
      toast({ title: 'Error', description: 'Something went wrong. Please call us directly.', variant: 'destructive' });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-32 bg-carbon relative">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 card-gradient rounded-lg p-5 sm:p-8 max-w-2xl mx-auto">
          <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <Input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <Textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required rows={5} />
          <Button type="submit" disabled={isSubmitting} className="w-full">
            <Send className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;


