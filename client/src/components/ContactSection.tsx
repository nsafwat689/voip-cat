import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section - Modern Enterprise Blue Design
 * Features: Contact info cards, contact form with validation
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Our Location',
      details: '251 Mercer St, New York, NY 10012, USA',
    },
    {
      icon: Phone,
      label: 'Call or WhatsApp Us',
      details: '+201557649136',
    },
    {
      icon: Mail,
      label: 'Email Us',
      details: 'sales.voipcat@gmail.com',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      details: 'Mon-Fri: 9AM - 8PM\nSat: 10AM - 4PM',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-bold text-3xl md:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our team is ready to assist you
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            let href = '#';
            
            if (info.label === 'Call or WhatsApp Us') {
              href = 'https://wa.me/201557649136?text=Hello%20VoIP%20Cat';
            } else if (info.label === 'Email Us') {
              href = 'mailto:sales.voipcat@gmail.com';
            }
            
            const isClickable = info.label === 'Call or WhatsApp Us' || info.label === 'Email Us';
            
            return (
              <a
                key={index}
                href={href}
                target={isClickable && info.label === 'Call or WhatsApp Us' ? '_blank' : undefined}
                rel={isClickable && info.label === 'Call or WhatsApp Us' ? 'noopener noreferrer' : undefined}
                className={`card-elevated p-6 space-y-4 transition-all duration-300 ${isClickable ? 'hover:shadow-lg hover:border-primary cursor-pointer' : ''}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {info.label}
                  </h4>
                  <p className={`text-sm whitespace-pre-line ${isClickable ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                    {info.details}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="card-elevated p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+201557649136"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button className="w-full btn-glow">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
