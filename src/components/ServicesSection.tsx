import { Wrench, Car, Gauge, Cog, Battery, Droplets, RotateCcw, Shield } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Oil Changes',
    description: 'Quick and thorough oil service with quality synthetic and conventional options.',
  },
  {
    icon: Shield,
    title: 'Brake Service',
    description: 'Complete brake inspections, pad replacements, rotor resurfacing, and upgrades.',
  },
  {
    icon: Cog,
    title: 'Engine Diagnostics',
    description: 'State-of-the-art diagnostic tools to identify and resolve any engine issue.',
  },
  {
    icon: Car,
    title: 'Suspension & Steering',
    description: 'From alignments to complete suspension overhauls and performance upgrades.',
  },
  {
    icon: Battery,
    title: 'Electrical Systems',
    description: 'Full electrical diagnostics, wiring repairs, and performance electronics.',
  },
  {
    icon: RotateCcw,
    title: 'Transmission Service',
    description: 'Manual and automatic transmission repairs, rebuilds, and performance upgrades.',
  },
  {
    icon: Wrench,
    title: 'Engine Swaps',
    description: 'Complete engine swap services from mild builds to wild race-prepped powerplants.',
  },
  {
    icon: Gauge,
    title: 'Performance Tuning',
    description: 'ECU tuning, forced induction setups, and complete performance packages.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-sm font-medium text-racing-blue uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Honest. Fair. <span className="text-gradient-racing">Family-Trusted.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From routine maintenance to complex engine builds, we treat every vehicle 
            with the same precision and care — whether it's your daily commuter or a 
            record-breaking race car.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-gradient rounded-lg p-5 sm:p-6 hover:border-racing-blue/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-racing-blue/10 flex items-center justify-center mb-4 group-hover:bg-racing-blue/20 transition-colors">
                <service.icon className="w-6 h-6 text-racing-blue" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure what service you need? Give us a call.
          </p>
          <a 
            href="tel:9054572977" 
            className="inline-flex items-center gap-2 text-racing-blue hover:text-racing-blue-glow transition-colors font-display font-semibold"
          >
            <span>(905) 457-2977</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
