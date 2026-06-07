import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BentoReferenceCard } from "@/components/BentoReferenceCard";
import { references } from "@/lib/data/references";

export const ReferencesPreviewSection = () => {
  // Bento box fits perfectly with 5 items (1 large 2x2, and 4 small 1x1)
  const previewReferences = references.slice(0, 5);

  return (
    <section id="referensi" className="py-24 relative bg-background overflow-hidden">
      {/* Subtle Glowing Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">Portofolio Kami</Badge>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl tracking-tight">
            Karya <span className="text-primary">Terbaik</span> Kami
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Eksplorasi berbagai desain website premium yang telah kami kerjakan. Terinspirasi dan temukan gaya yang cocok untuk bisnis Anda.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[280px] sm:auto-rows-[320px]">
          {previewReferences.map((reference, index) => (
            <BentoReferenceCard 
              key={reference.id} 
              reference={reference} 
              featured={index === 0} 
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/reference">
            <Button size="lg" className="rounded-xl px-8 py-6 text-lg bg-[#8B5CF6] text-white hover:bg-[#8B5CF6] hover:text-white shadow-none border-none">
              Lihat lainnya
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
