import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

/**
 * Cloud PBX Section - Modern Enterprise Blue Design
 * Features: Pricing cards with hover elevation, feature highlights
 */
export default function CloudPBXSection() {
  const plans = [
    {
      name: 'Golden',
      price: 75,
      period: '/month',
      description: 'Just getting started? The Golden Cloud PBX is the best choice for SOHO environments.',
      feature: 'Up to 8 concurrent calls',
      highlighted: false,
    },
    {
      name: 'Diamond',
      price: 119,
      period: '/month',
      description: 'Need additional performance? The Diamond Cloud PBX is the right choice for your business.',
      feature: 'Up to 40 concurrent calls',
      highlighted: false,
    },
    {
      name: 'Platinum',
      price: 199,
      period: '/month',
      description: 'Operating a bigger call center? The Platinum Cloud PBX was designed for enterprise-level call volumes.',
      feature: 'Up to 80 concurrent calls',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solution for large-scale communication needs. Contact our sales team for personalized pricing and features.',
      feature: 'Unlimited concurrent calls',
      highlighted: false,
      isEnterprise: true,
    },
  ];

  return (
    <section id="cloud-pbx" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-bold text-3xl md:text-4xl font-bold text-white">
            Cloud PBX Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Scalable business phone systems for every size organization
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl transition-all duration-300 ${
                plan.highlighted
                  ? 'lg:scale-105 card-elevated border-2 border-primary shadow-xl'
                  : 'card-elevated border border-border'
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-6 space-y-6">
                {/* Plan Name */}
                <div>
                  <h3 className="font-bold font-bold text-xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  {plan.price && (
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-primary">
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {plan.period}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>

                {/* Feature */}
                <div className="flex items-center gap-3 py-4 border-t border-b border-border">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {plan.feature}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? 'btn-glow'
                      : plan.isEnterprise
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-secondary text-white hover:bg-secondary/90'
                  }`}
                >
                  {plan.isEnterprise ? 'Contact Sales' : 'Get This Plan'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
