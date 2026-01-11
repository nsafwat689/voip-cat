import { Star } from 'lucide-react';

/**
 * Testimonials Section - Modern Enterprise Blue Design
 * Features: Quote cards with avatars, star ratings, smooth animations
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'VoIP Cat has revolutionized our international communications. The call quality is exceptional, and the pricing is unbeatable. We\'ve saved over 60% on our communication costs!',
      author: 'Michael Johnson',
      title: 'CEO, TechGlobal Inc.',
      initials: 'MJ',
      rating: 5,
    },
    {
      quote: 'As a multinational company, we needed a reliable VoIP provider that could handle our complex communication needs. VoIP Cat delivered beyond our expectations with their Platinum plan.',
      author: 'Sarah Lee',
      title: 'Operations Director, Nexus Solutions',
      initials: 'SL',
      rating: 5,
    },
    {
      quote: 'The customer support at VoIP Cat is outstanding. Any time we\'ve had an issue, it\'s been resolved quickly and professionally. Their Diamond plan offers the perfect balance of features and value.',
      author: 'David Roberts',
      title: 'IT Manager, Innovate Corp',
      initials: 'DR',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-bold text-3xl md:text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from businesses that transformed their communication with VoIP Cat
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary/10 border border-primary/20 p-8 space-y-6 flex flex-col rounded-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-primary/20">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Author Details */}
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-300">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
