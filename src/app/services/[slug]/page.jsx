import Image from "next/image";

const services = [
  {
    image: "/assets/ecommerce.png",
    slug: "ecommerce",
    title: "eCommerce Store Setup",
    desc: "Launch and scale stores on Shopify, eBay, Vinted, and TikTok Shop—fully optimized for success.",
  },
  {
    image: "/assets/SEO.png",
    slug: "seo-marketing",
    title: "SEO & Performance Marketing",
    desc: "Boost your visibility on Google and drive high-converting traffic with expert SEO & paid ads.",
  },
  {
    image: "/assets/content.png",
    slug: "content-marketing",
    title: "Content Marketing",
    desc: "Build trust and drive sales with powerful, targeted content across platforms and channels.",
  },
  {
    image: "/assets/bulb.svg",
    slug: "web-development",
    title: "Custom Web Development",
    desc: "Build fast, responsive, and branded websites tailored to your business goals.",
  },
  {
    image: "/assets/bulb.svg",
    slug: "graphic-design",
    title: "Graphic Design & Branding",
    desc: "Professional, eye-catching visuals and identity design that sets your brand apart.",
  },
];

export default function ServiceDetail({ params }) {
  const { slug } = params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20 text-red-500">Service not found</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#9333EA] flex items-center justify-center">
          <Image
            src={service.image}
            width={40}
            height={40}
            alt={service.title}
          />
        </div>
        <h1 className="text-4xl font-bold text-[#0F172A]">{service.title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl">{service.desc}</p>
      </div>
    </div>
  );
}
