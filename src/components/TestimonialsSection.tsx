import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus T.',
    text: 'Fair pricing, honest staff. They diagnosed an issue other shops missed and saved me thousands. My go-to shop now.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    text: 'Splitfire looks after my daily driver as well as my family\'s cars. They treat you like family - no upselling, just honest work.',
    rating: 5,
  },
  {
    name: 'Jason R.',
    text: 'Had my turbo build done here. The attention to detail is incredible. These guys know performance inside and out.',
    rating: 5,
  },
  {
    name: 'Linda M.',
    text: 'Been bringing my cars here for 5 years. Consistent quality and they always explain what needs to be done. Highly recommend!',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-fire-orange text-fire-orange" />
            ))}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            4.6 Star <span className="text-gradient-fire">Google Rating</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Don't just take our word for it — hear from our customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-gradient rounded-lg p-6 relative group hover:border-fire-orange/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-fire-orange/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-fire-orange text-fire-orange'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <div className="font-display font-semibold text-foreground">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Splitfire+Auto+Repairs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-racing-blue hover:text-racing-blue-glow transition-colors font-display font-semibold"
          >
            See All Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
