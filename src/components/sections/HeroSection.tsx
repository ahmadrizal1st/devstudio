import { ArrowRight, Code, PlayCircle, Zap, Users, Shield, Layers } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-md px-4 py-1.5 text-sm text-primary mb-6 shadow-sm">
              <span className="text-muted-foreground text-xs font-medium">Jasa Website Profesional</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Website Profesional,<br />
              <span className="text-primary">Harga Terjangkau</span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              DevStudio membantu bisnis Anda tampil online dengan website berkualitas tinggi.
              Platform kolaborasi tangguh untuk tim modern.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WhatsAppButton size="lg" className="h-12 px-8 shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-white font-medium">
                Mulai Sekarang <ArrowRight className="ml-2 h-4 w-4" />
              </WhatsAppButton>
              <a
                href="#paket"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card/50 backdrop-blur-md px-8 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                Lihat Cara Kerjanya
                <PlayCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Illustration - Dashboard Mockup */}
          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto perspective-1000">
            <div className="rounded-xl border border-border bg-card/90 backdrop-blur-xl shadow-2xl overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0">
              {/* Header */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <Zap className="h-3 w-3 text-primary" />
                    <span>DevStudio</span>
                  </div>
                </div>
                <div className="w-10"></div>
              </div>

              {/* Body */}
              <div className="flex h-[320px]">
                {/* Sidebar */}
                <div className="w-40 border-r border-border bg-muted/30 p-4 flex flex-col gap-2">
                  {[
                    { label: "Dashboard", active: true },
                    { label: "Development" },
                    { label: "Projects" },
                    { label: "Teams" },
                    { label: "Analytics" },
                    { label: "Settings" }
                  ].map((item, i) => (
                    <div key={i} className={`px-3 py-2 text-xs rounded-md ${item.active ? 'bg-primary/20 text-primary font-medium' : 'text-muted-foreground hover:bg-muted/80'}`}>
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-gradient-to-br from-transparent to-primary/5">
                  <h3 className="text-sm font-medium mb-4 text-foreground">Overview</h3>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Total Projects", value: "128", inc: "+12%" },
                      { label: "Active Users", value: "1,240", inc: "+16%" },
                      { label: "Deployments", value: "320", inc: "+8%" }
                    ].map((stat, i) => (
                      <div key={i} className="rounded-lg border border-border bg-card p-3 shadow-sm">
                        <div className="text-[10px] text-muted-foreground mb-1">{stat.label}</div>
                        <div className="flex items-baseline gap-2">
                          <div className="text-lg font-bold text-foreground">{stat.value}</div>
                          <div className="text-[10px] text-green-500 font-medium">{stat.inc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs font-medium mb-3 text-foreground">Recent Activity</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 border-t border-border pt-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Code className="h-3 w-3 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-24 bg-muted-foreground/20 rounded mb-1"></div>
                          <div className="h-1.5 w-16 bg-muted-foreground/10 rounded"></div>
                        </div>
                        <div className="text-[10px] text-muted-foreground">1h ago</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* 4 Column Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div key={idx} className="glass-card p-6 rounded-xl transition-transform duration-300 group">
              <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{feature.desc}</p>
              <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                Learn more <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
