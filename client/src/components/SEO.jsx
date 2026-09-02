import { useEffect } from 'react'

/**
 * Reusable SEO component for managing document head metadata and JSON-LD structured schemas.
 */
export default function SEO({
  title = 'Krishna Profile | Premium Electrical Pole & Fabrication Manufacturer in India',
  description = 'Krishna Profile is a premier Indian manufacturer of octagonal steel poles, swaged tubular poles, high mast lighting towers, V-cross arm sets, guy sets, and transmission line hardware.',
  keywords = 'Krishna Profile, Krishna Profile electrical poles, octagonal pole manufacturer, swaged tubular pole, high mast lighting tower, V-cross arm, transmission line hardware, Gujarat steel pole fabricator, Sihor Bhavnagar pole factory',
  canonical = 'https://krishnaprofile.com',
  ogType = 'website',
  ogImage = 'https://krishnaprofile.com/assets/icon-logo.png',
  schema = null,
}) {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes('Krishna Profile') ? title : `${title} | Krishna Profile`
    document.title = fullTitle

    // Helper function to set or update meta tag
    const updateMetaTag = (selector, nameAttr, nameValue, contentValue) => {
      let meta = document.querySelector(selector)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(nameAttr, nameValue)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', contentValue)
    }

    // Helper function to set or update link tag
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`)
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    // 2. Primary Meta Tags
    updateMetaTag('meta[name="description"]', 'name', 'description', description)
    updateMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords)
    updateMetaTag('meta[name="author"]', 'name', 'author', 'Krishna Profile')

    // 3. Canonical Tag
    updateLinkTag('canonical', canonical)

    // 4. OpenGraph Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical)
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage)
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType)
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Krishna Profile')
    updateMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US')

    // 5. Twitter Card Tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)

    // 6. Geo-location Tags for Local SEO & AEO
    updateMetaTag('meta[name="geo.region"]', 'name', 'geo.region', 'IN-GJ')
    updateMetaTag('meta[name="geo.placename"]', 'name', 'geo.placename', 'Sihor, Bhavnagar, Gujarat, India')
    updateMetaTag('meta[name="geo.position"]', 'name', 'geo.position', '21.731875;71.970605')
    updateMetaTag('meta[name="ICBM"]', 'name', 'ICBM', '21.731875, 71.970605')

    // 7. Inject / Update Dynamic JSON-LD Structured Data Schema
    let scriptTag = document.getElementById('dynamic-json-ld')
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = 'dynamic-json-ld'
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(schema, null, 2)
    } else if (scriptTag) {
      scriptTag.remove()
    }
  }, [title, description, keywords, canonical, ogType, ogImage, schema])

  return null
}
