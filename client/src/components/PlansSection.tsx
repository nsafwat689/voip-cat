import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

/**
 * VoIP Plans Section - Modern Enterprise Blue Design
 * Features: Three-tier pricing with feature lists, comparison layout
 */
export default function PlansSection() {
  const plans = [
    {
      name: 'Standard Plan',
      features: [
        'Basic call quality',
        'Standard features',
        'Calls to 50 countries',
        'Email support',
      ],
      highlighted: false,
    },
    {
      name: 'Platinum Plan',
      features: [
        'Calls to 190+ countries',
        'Crystal-clear HD quality',
        'Premium features',
        '24/7 dedicated support',
      ],
      highlighted: true,
    },
    {
      name: 'Premium Plan',
      features: [
        'Calls to 100 countries',
        'HD call quality',
        'Advanced features',
        'Priority support',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="plans" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-bold text-3xl md:text-4xl font-bold text-foreground text-center">
            Our VoIP Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your communication needs
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 card-elevated border-2 border-primary shadow-xl'
                  : 'card-elevated border border-border'
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8 space-y-6 h-full flex flex-col">
                {/* Plan Name */}
                <div>
                  <h3 className="font-bold font-bold text-2xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                </div>



                {/* Features List */}
                <div className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mt-auto ${
                    plan.highlighted
                      ? 'btn-glow'
                      : 'bg-secondary text-white hover:bg-secondary/90'
                  }`}
                >
                  View Rates
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
