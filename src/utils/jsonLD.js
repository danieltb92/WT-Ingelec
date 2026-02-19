import siteData from "../data/siteData.json";
import { slugify } from "./slugify";

const navigationItems = [
  { name: "Inicio", url: "/" },
  { name: "Nosotros", url: "/about" },
  { name: "Servicios", url: "/services" },
];

export default function jsonLDGenerator({ type, post, url }) {
  const urlObj = typeof url === 'string' ? new URL(url) : url;
  const schemas = [];

  // Organization Schema (Global)
  schemas.push({
    "@type": "Organization",
    "@id": `${siteData.siteUrl}#organization`,
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

  // WebSite Schema with SiteNavigationElement for sitelinks
  schemas.push({
    "@type": "WebSite",
    "@id": `${siteData.siteUrl}#website`,
    "name": siteData.title,
    "url": siteData.siteUrl,
    "description": siteData.description,
    "publisher": {
      "@id": `${siteData.siteUrl}#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteData.siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  });

  // SiteNavigationElement for sitelinks
  navigationItems.forEach((item, index) => {
    schemas.push({
      "@type": "SiteNavigationElement",
      "position": index + 1,
      "name": item.name,
      "url": `${siteData.siteUrl}${item.url}`
    });
  });

  // BreadcrumbList Schema
  const pathSegments = urlObj.pathname.split('/').filter(p => p);
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": siteData.siteUrl
    }
  ];

  pathSegments.forEach((segment, index) => {
    const segmentLabel = segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": segmentLabel,
      "item": `${siteData.siteUrl}/${segment}`
    });
  });

  schemas.push({
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
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
