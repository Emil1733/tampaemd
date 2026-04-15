import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://poolremovaltampa.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `https://poolremovaltampa.com${item.href}`
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="container" style={{ padding: "1rem 1.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Link href="/" style={{ color: "var(--primary)", display: "flex", alignItems: "center" }} aria-label="Home">
            <Home size={14} />
          </Link>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <li style={{ display: "flex", alignItems: "center" }}>
              <ChevronRight size={12} style={{ opacity: 0.5 }} />
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              {index === items.length - 1 ? (
                <span style={{ fontWeight: 600, color: "var(--text-main)" }} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} style={{ color: "var(--primary)" }}>
                  {item.name}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
