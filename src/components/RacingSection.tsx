import { Trophy, Timer, Gauge } from 'lucide-react';
import winnersCircle from '@/assets/winners-circle.jpg';
import datsunWhelie from '@/assets/datsun-wheelie.jpg';

const records = [
  {
    car: 'AWD F2K Civic',
    time: '7.59s',
    speed: '188 mph',
    description: 'The fastest AWD Honda in the quarter-mile. A testament to precision engineering and relentless tuning.',
    image: winnersCircle,
  },
  {
    car: 'Datsun 240Z',
    time: '7.99s',
    speed: '193 mph',
    description: 'A classic chassis with modern power. This Z breaks into the 7-second club with style.',
    image: datsunWhelie,
  },
];

const RacingSection = () => {
  return (
    <section id="racing" className="py-20 lg:py-32 bg-background relative">
      {/* Section Header */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-fire-orange uppercase tracking-widest mb-4">
            <Trophy className="w-4 h-4" />
            Splitfire Racing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hall of <span className="text-gradient-fire">Fame</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just build race cars — we build <strong>record breakers</strong>. 
            Our shop cars prove what's possible when passion meets precision.
          </p>
        </div>

        {/* Records Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {records.map((record, index) => (
            <div
              key={record.car}
              className="group relative rounded-xl overflow-hidden border border-border bg-card"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={record.image}
                  alt={record.car}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                {/* Stats Row */}
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-racing-blue" />
                    <span className="font-display text-2xl font-bold text-racing-blue">{record.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-fire-orange" />
                    <span className="font-display text-2xl font-bold text-fire-orange">{record.speed}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-2">
                  {record.car}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm lg:text-base">
                  {record.description}
                </p>

                {/* Record Badge */}
                <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-fire-orange/20 border border-fire-orange/30">
                    <Trophy className="w-4 h-4 text-fire-orange" />
                    <span className="text-xs font-display font-semibold text-fire-orange uppercase">Record</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RacingSection;
