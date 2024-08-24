import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/','/about'],
      disallow: [],
    },
    sitemap: 'https://rubixclass.com/sitemap.xml',
  }
}