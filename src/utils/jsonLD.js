import siteData from "../data/siteData.json";
import { slugify } from "./slugify";

export default function jsonLDGenerator({ type, post, url }) {
  const schemas = [];

  // Organization Schema (Global)
  schemas.push({
    "@type": "Organization",
    "name": siteData.organization.name,
    "legalName": siteData.organization.legalName,
    "url": siteData.organization.url,
    "logo": siteData.organization.logo,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteData.organization.contactPoint.telephone,
      "contactType": siteData.organization.contactPoint.contactType,
      "email": siteData.organization.contactPoint.email,
      "areaServed": siteData.organization.contactPoint.areaServed,
      "availableLanguage": siteData.organization.contactPoint.availableLanguage
    },
    "sameAs": siteData.organization.sameAs
  });

  // WebSite Schema (Global or Home)
  schemas.push({
    "@type": "WebSite",
    "name": siteData.title,
    "url": siteData.siteUrl,
    "description": siteData.description,
    "publisher": {
      "@id": `${siteData.siteUrl}#organization`
    }
  });

  // BlogPosting Schema (Conditional)
  if (type === "post") {
    schemas.push({
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "headline": post.title,
      "description": post.description,
      "image": post.image.src,
      "author": {
        "@type": "Person",
        "name": post.author,
        "url": `/author/${slugify(post.author)}`
      },
      "datePublished": post.date
    });
  }

  return `<script type="application/ld+json">
    ${JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemas
    })}
  </script>`;
}
