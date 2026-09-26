import { Button } from '@/components/ui/button';
import { Gauge, Zap, LineChart, Settings } from 'lucide-react';
import engineBuild from '@/assets/engine-build.jpg';

const features = [
  {
    icon: Gauge,
    title: 'Dyno Tuning',
    description: 'Precise tuning on our in-house dyno to maximize power and efficiency.',
  },
  {
    icon: Zap,
    title: 'Forced Induction',
    description: 'Turbo and supercharger installations with custom tuning solutions.',
  },
  {
    icon: LineChart,
    title: 'Data Logging',
    description: 'Advanced data acquisition to analyze and optimize performance.',
  },
  {
    icon: Settings,
    title: 'Custom Builds',
    description: 'Complete engine builds from mild street setups to full race motors.',
  },
];

const DynoSection = () => {
  return (
    <section id="dyno" className="py-12 sm:py-20 lg:py-32 bg-carbon relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 carbon-texture opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <span className="inline-block text-sm font-medium text-fire-orange uppercase tracking-widest mb-4">
                Performance Lab
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The Dyno & <span className="text-gradient-fire">Performance Lab</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Our state-of-the-art dyno facility delivers precise tuning for everything 
                from naturally aspirated street cars to 1000+ horsepower race machines. 
                When it comes to performance, we specialize in <em>everything automotive under the sun</em>.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-fire-orange/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-fire-orange" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="fire" size="xl" asChild className="w-full sm:w-auto px-4 sm:px-10">
              <a href="/contact">
                <Gauge className="w-5 h-5 mr-2" />
                Book Dyno Session
              </a>
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden glow-orange">
              <img
                src={engineBuild}
                alt="Custom engine build at Splitfire"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-fire-orange/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-fire-orange" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">1000+ HP</div>
                  <div className="text-sm text-muted-foreground">Builds Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynoSection;
