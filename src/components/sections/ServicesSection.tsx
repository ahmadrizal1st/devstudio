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
    <section id="layanan" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Layanan <span className="text-primary">Kami</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Berbagai pilihan website sesuai kebutuhan bisnis Anda, dari yang
            sederhana hingga kompleks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 flex flex-col"
            >
              <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 flex-1">
                  {service.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {service.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
