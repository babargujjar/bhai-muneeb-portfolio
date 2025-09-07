import allServicesData from "@/data/services";

export async function GET() {
  const baseUrl = "https://betelbee.com";

  const staticPages = ["", "/about", "/contact", "/privatelabel", "/services"];

   const services = allServicesData.map(
     (service) => `${service.slug}`
   );
  const urls = [
    ...staticPages.map((page) => `${baseUrl}${page}`),
    ...services.map((s) => `${baseUrl}/services/${s}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <priority>${url === baseUrl ? "1.0" : "0.8"}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
