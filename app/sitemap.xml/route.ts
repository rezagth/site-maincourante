import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://operia.example';
  const pages = [
    '/',
    '/contact',
    '/demo',
    '/platform',
    '/main-courante-electronique-hopital',
    '/logiciel-securite-hospitaliere',
    '/tracabilite-incidents-hopital',
    '/supervision-securite-hospitaliere',
    '/plateforme-operations-hospitalieres',
    '/registre-digital-hopital',
    '/logiciel-incidents-hospitaliers',
    '/ressources',
    '/guides/comparatif-main-courante-papier-digitale',
    '/guides/choisir-logiciel-securite-hospitaliere',
    '/guides/plateforme-supervision-hospitaliere',
  ];

  const urls = pages
    .map((p) => `  <url>\n    <loc>${baseUrl}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
