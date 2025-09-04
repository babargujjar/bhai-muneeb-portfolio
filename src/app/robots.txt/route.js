// app/robots.txt/route.js
export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://betelbee.com/sitemap.xml
  `.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
