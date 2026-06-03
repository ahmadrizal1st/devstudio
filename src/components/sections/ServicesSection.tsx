import {
  Layout,
  Building2,
  Store,
  ShoppingCart,
  Settings,
  Globe,
  RefreshCw,
  Server,
  Tag,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "Landing Page",
    description:
      "Website satu halaman yang fokus pada konversi dan promosi produk/jasa Anda.",
    price: "Mulai Rp 800rb",
  },
  {
    icon: Building2,
    title: "Company Profile",
    description:
      "Website profesional untuk membangun kredibilitas dan memperkenalkan perusahaan.",
    price: "Mulai Rp 1.7jt",
  },
  {
    icon: Store,
    title: "Website UMKM/Bisnis",
    description:
      "Solusi digital lengkap dengan katalog produk untuk bisnis kecil dan menengah.",
    price: "Mulai Rp 2.5jt",
  },
  {
    icon: ShoppingCart,
    title: "Toko Online",
    description:
      "E-commerce dengan keranjang belanja, manajemen produk, dan checkout system.",
    price: "Mulai Rp 4jt",
  },
  {
    icon: Settings,
    title: "Custom System",
    description:
      "Sistem web sesuai kebutuhan bisnis Anda dengan fitur dan fungsionalitas khusus.",
    price: "Mulai Rp 6jt",
  },
  // Paket Tambahan
  {
    icon: Globe,
    title: "Domain Custom",
    description:
      "Domain internasional .net/.org/.info/.biz/.tech/.site/.store/.online/.xyz",
    price: "Mulai Rp 180rb/th",
  },
  {
    icon: RefreshCw,
    title: "Perpanjangan Domain",
    description:
      "Perpanjangan domain standar atau custom sesuai harga registrar",
    price: "Mulai Rp 150rb/th",
  },
  {
    icon: Server,
    title: "Perpanjangan Hosting",
    description: "Perpanjangan hosting 1/3/6/12 bulan dengan harga terjangkau",
    price: "Mulai Rp 40rb",
  },
  {
    icon: Tag,
    title: "Bundling Domain + Hosting",
    description: "Paket bundle domain + hosting 3/6/12 bulan + SSL aktif",
    price: "Mulai Rp 220rb",
  },
];

export const ServicesSection = () => {
  return (
    <section id="layanan" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Layanan <span className="text-primary">Kami</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai pilihan website sesuai kebutuhan bisnis Anda, dari yang sederhana hingga kompleks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card group h-full transition-all duration-300 hover:border-primary/30 flex flex-col rounded-xl overflow-hidden p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-4 border-t border-white/5 mt-auto">
                <p className="text-sm font-semibold text-primary">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
