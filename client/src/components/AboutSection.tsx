import { Globe, Users, Zap, Shield } from 'lucide-react';

/**
 * About Section - Modern Enterprise Blue Design
 * Features: Stats grid, icon cards, gradient accents
 */
export default function AboutSection() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '190+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Connect with anyone, anywhere in the world with our extensive network spanning over 190 countries.',
    },
    {
      icon: Zap,
      title: 'Crystal Clear Quality',
      description: 'Experience premium HD voice quality with our advanced VoIP technology and optimized network infrastructure.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee ensure your communications are always protected.',
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Our dedicated support team is available around the clock to assist you with any questions or issues.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-bold text-3xl md:text-4xl font-bold text-foreground">
            About VoIP Cat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses worldwide for over a decade
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-2xl md:text-3xl font-bold text-foreground mb-4">
                10+ Years of Excellence in VoIP Services
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since 2015, VoIP Cat has been at the forefront of Voice over IP technology, providing businesses and individuals with reliable, crystal-clear VoIP services across the globe.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our mission is to deliver premium VoIP solutions at affordable prices without compromising on quality. With our robust infrastructure and dedicated support team, we ensure seamless communication for all our clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Operating in over 190 countries, we understand the unique communication needs of different regions and tailor our services accordingly.
              </p>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-elevated p-6 text-center space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold font-bold text-accent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-elevated p-6 space-y-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold font-bold text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
