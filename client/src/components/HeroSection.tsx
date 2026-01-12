import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

/**
 * Hero Section - Modern Enterprise Blue Design
 * Layout: Asymmetric split with content on left, image on right
 * Features: Gradient background, glowing buttons, smooth animations
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-12 md:py-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Trusted Solutions</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Global Voice over IP{' '}
                <span className="text-accent">
                  (VoIP) Solutions
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                With over 10 years of experience, VoIP Cat provides reliable, high-quality Voice over IP services to every country worldwide at unbeatable prices.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-glow flex items-center gap-2 group">
                Choose Your Plan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold"
              >
                Contact Us
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-primary/20">
              <div>
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">190+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Container with gradient overlay */}
              <img
                src="/images/hero-voip-communication.jpg"
                alt="VoIP Communication"
                className="w-full h-auto object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating card accent */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-border max-w-xs hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Crystal Clear</div>
                  <div className="text-sm text-muted-foreground">HD Quality Calls</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
