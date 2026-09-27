import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Gauge, Wrench, Trophy } from 'lucide-react';
import heroImage from '@/assets/civic-flames-hq.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100svh-2rem)] flex items-center justify-center overflow-hidden py-24 sm:min-h-screen sm:py-0">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Carbon Texture Overlay */}
      <div className="absolute inset-0 carbon-texture opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/20 backdrop-blur-sm animate-fade-in">
            <Trophy className="w-4 h-4 text-fire-orange" />
            <span className="text-sm font-medium text-foreground">World Record Holders</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
            <span className="text-foreground">From Daily Maintenance to</span>
            <br />
            <span className="text-gradient-racing">World Records</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Expert service for your daily driver. Elite engineering for your race car. 
            Splitfire Auto Repairs — Mississauga's premier performance shop.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-fade-in animation-delay-300">
            <Button variant="hero" size="xl" asChild className="px-4 sm:px-10">
              <Link to="/contact">
                <Wrench className="w-5 h-5 mr-2" />
                Book Your Service
              </Link>
            </Button>
            <Button variant="outline-racing" size="xl" asChild className="px-4 sm:px-10">
              <Link to="/dyno-lab">
                <Gauge className="w-5 h-5 mr-2" />
                Dyno Tuning
              </Link>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-8 max-w-2xl mx-auto pt-4 sm:pt-8 animate-fade-in animation-delay-400">
            <div className="text-center">
              <div className="font-display text-xl sm:text-3xl font-bold text-racing-blue">7.59s</div>
              <div className="text-xs sm:text-sm text-muted-foreground">AWD F2K Record</div>
            </div>
            <div className="text-center">
              <div className="font-display text-xl sm:text-3xl font-bold text-fire-orange">188 MPH</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Top Speed</div>
            </div>
            <div className="text-center">
              <div className="font-display text-xl sm:text-3xl font-bold text-foreground">4.6★</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Google Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link 
        to="/services" 
        className="absolute bottom-3 sm:bottom-8 inset-x-0 mx-auto w-fit flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </Link>
    </section>
  );
};

export default HeroSection;
