import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Tag,
  MessageCircle,
  Globe,
  Code2,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  getReferenceById,
  getReferencesByCategory,
  Reference,
} from "@/lib/data/references";

const ReferenceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const reference = id ? getReferenceById(id) : undefined;
  const [previewMode, setPreviewMode] = useState<
    "desktop" | "tablet" | "mobile"
  >("desktop");
  const [previewTab, setPreviewTab] = useState<"url" | "html">(
    reference?.url ? "url" : "html",
  );

  // Get related references (same category, excluding current)
  const relatedReferences: Reference[] = reference
    ? getReferencesByCategory(reference.categoryId)
        .filter((ref) => ref.id !== reference.id)
        .slice(0, 4)
    : [];

  if (!reference) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Referensi tidak ditemukan
          </h1>
          <p className="text-muted-foreground mb-8">
            Maaf, referensi yang Anda cari tidak tersedia.
          </p>
          <Link to="/reference">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Referensi
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-8">
          <div className="container">
            <Link
              to="/reference"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Referensi
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border shadow-lg">
                <img
                  src={reference.image}
                  alt={reference.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Details */}
              <div>
                <Badge variant="secondary" className="mb-4">
                  {reference.category}
                </Badge>

                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {reference.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  {reference.description}
                </p>

                {/* Suggested Package */}
                <Card className="mb-6 border-primary/50 bg-primary/5">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Tag className="h-4 w-4" />
                      <span className="font-medium">
                        Paket yang Direkomendasikan
                      </span>
                    </div>
                    <p className="text-foreground font-semibold">
                      {reference.suggestedPackage}
                    </p>
                  </CardContent>
                </Card>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Fitur yang Terlihat
                  </h2>
                  <ul className="space-y-3">
                    {reference.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppButton
                    message={`Halo RijalsDev, saya tertarik dengan desain seperti "${reference.title}" (${reference.category}). Bisa konsultasi lebih lanjut?`}
                    size="lg"
                    className="flex-1"
                  >
                    Konsultasi Desain Ini
                  </WhatsAppButton>
                  <Link to="/reference" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">
                      Lihat Referensi Lain
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website Preview Section */}
        {(reference.url || reference.websiteHtml) && (
          <section className="py-12 bg-muted/30">
            <div className="container">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Preview Website
                  </h2>
                  <p className="text-muted-foreground">
                    Lihat tampilan website referensi ini secara langsung
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={previewMode === "desktop" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPreviewMode("desktop")}
                    className="gap-2"
                  >
                    <Monitor className="h-4 w-4" />
                    Desktop
                  </Button>
                  <Button
                    variant={previewMode === "tablet" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPreviewMode("tablet")}
                    className="gap-2"
                  >
                    <Tablet className="h-4 w-4" />
                    Tablet
                  </Button>
                  <Button
                    variant={previewMode === "mobile" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPreviewMode("mobile")}
                    className="gap-2"
                  >
                    <Smartphone className="h-4 w-4" />
                    Mobile
                  </Button>
                </div>
              </div>

              {/* Preview Tab Controls */}
              {reference.url && reference.websiteHtml && (
                <div className="flex justify-center mb-6">
                  <div className="bg-muted p-1 rounded-lg">
                    <Button
                      variant={previewTab === "url" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setPreviewTab("url")}
                      className="gap-2"
                    >
                      <Globe className="h-4 w-4" />
                      URL Preview
                    </Button>
                    <Button
                      variant={previewTab === "html" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setPreviewTab("html")}
                      className="gap-2"
                    >
                      <Code2 className="h-4 w-4" />
                      HTML Preview
                    </Button>
                  </div>
                </div>
              )}

              {/* Preview Container */}
              <div className="flex justify-center">
                <div
                  className={`transition-all duration-300 ${
                    previewMode === "mobile"
                      ? "w-[375px]"
                      : previewMode === "tablet"
                        ? "w-[768px]"
                        : "w-full max-w-6xl"
                  }`}
                >
                  {/* Browser/Mobile Frame */}
                  <div className="bg-background rounded-xl border shadow-xl overflow-hidden">
                    {/* Frame Header */}
                    <div className="bg-muted px-4 py-3 border-b flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div
                        className={`${
                          previewMode === "mobile" ? "flex-1" : "flex-1"
                        } bg-background rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-2`}
                      >
                        <Globe className="h-3 w-3" />
                        {reference.url || "website-preview"}
                      </div>
                    </div>

                    {/* Preview Content */}
                    <div className="bg-white">
                      {(reference.url && previewTab === "url") ||
                      (previewTab === "html" && reference.websiteHtml) ? (
                        reference.url && previewTab === "url" ? (
                          <iframe
                            src={reference.url}
                            title={`${reference.title} Preview`}
                            className={`w-full ${
                              previewMode === "mobile"
                                ? "h-[667px]"
                                : previewMode === "tablet"
                                  ? "h-[800px]"
                                  : "h-[600px] lg:h-[700px]"
                            } border-0`}
                            sandbox="allow-scripts allow-same-origin"
                          />
                        ) : (
                          <div
                            className={`w-full overflow-auto ${
                              previewMode === "mobile"
                                ? "h-[667px]"
                                : previewMode === "tablet"
                                  ? "h-[800px]"
                                  : "h-[600px] lg:h-[700px]"
                            }`}
                            dangerouslySetInnerHTML={{
                              __html: reference.websiteHtml,
                            }}
                          />
                        )
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              {reference.url && (
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                  >
                    <Globe className="h-4 w-4" />
                    Buka di Tab Baru
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <Code2 className="h-4 w-4" />
                    HTML Preview Available
                  </span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Related References Section */}
        {relatedReferences.length > 0 && (
          <section className="py-12">
            <div className="container">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Referensi Terkait
                  </h2>
                  <p className="text-muted-foreground">
                    Lihat juga referensi lainnya di kategori yang sama
                  </p>
                </div>
                <Link to="/reference">
                  <Button variant="outline" className="gap-2">
                    Lihat Semua
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Button>
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedReferences.map((related) => (
                  <Link key={related.id} to={`/reference/${related.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full border-0 bg-background shadow-md">
                      <div className="relative aspect-video overflow-hidden rounded-t-xl bg-muted">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <Badge
                            variant="secondary"
                            className="text-xs bg-white/90 text-foreground backdrop-blur-sm"
                          >
                            {related.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors text-lg">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                          {related.description}
                        </p>
                        <div className="mt-4 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Lihat Detail
                          <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ReferenceDetailPage;
