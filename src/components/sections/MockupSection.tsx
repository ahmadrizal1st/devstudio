import { Zap, Users, Shield, Layers, ArrowRight } from "lucide-react";

export const MockupSection = () => {
  return (
    <section className="relative z-30 pb-12 sm:pb-16 lg:pb-20">
      {/* Blurred purple blob moved from HeroSection */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-visible pointer-events-none">
        <div className="absolute top-0 left-0 -ml-20 -mt-64 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px]" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        
        {/* 4 Column Features - Pulled up to overlap Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 sm:-mt-32 lg:-mt-48 mb-16 lg:mb-24">
          {[
            {
              icon: <Zap className="h-6 w-6 text-primary" />,
              title: "Fast Development",
              desc: "Boost productivity with powerful and intuitive tools."
            },
            {
              icon: <Users className="h-6 w-6 text-primary" />,
              title: "Team Collaboration",
              desc: "Work together seamlessly in real-time."
            },
            {
              icon: <Shield className="h-6 w-6 text-primary" />,
              title: "Secure & Reliable",
              desc: "Enterprise-grade security you can trust."
            },
            {
              icon: <Layers className="h-6 w-6 text-primary" />,
              title: "Scalable Platform",
              desc: "Designed to grow with your team and projects."
            }
          ].map((feature, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl transition-transform duration-300 group flex flex-col h-full relative z-10 transform-gpu overflow-hidden">
              <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{feature.desc}</p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl">
          <img 
            src="/responsive-mockup.png" 
            alt="Responsive Website Mockup" 
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
