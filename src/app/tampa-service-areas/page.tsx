import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Pool Removal in Tampa Bay | Cities & Permit Resources",
  description: "Explore pool removal and demolition planning resources for Tampa, Brandon, Riverview, Clearwater, St. Petersburg, and surrounding communities.",
  alternates: { canonical: "/tampa-service-areas" },
};

const areas = [
  { name: "South Tampa", href: "/tampa-service-areas/south-tampa", detail: "Backyard equipment access, nearby structures, and city permitting questions." },
  { name: "Brandon", href: "/tampa-service-areas/brandon", detail: "Pool demolition choices, hauling access, and Hillsborough County jurisdiction checks." },
  { name: "Riverview", href: "/tampa-service-areas/riverview", detail: "Groundwater, drainage, and site-restoration considerations." },
  { name: "Carrollwood", href: "/tampa-service-areas/carrollwood", detail: "Mature landscaping, tree protection, and restricted equipment access." },
  { name: "St. Petersburg", href: "/tampa-service-areas/st-petersburg", detail: "Pinellas-area permit questions and coastal groundwater conditions." },
  { name: "Clearwater", href: "/tampa-service-areas/clearwater", detail: "Demolition planning, disposal, and local permitting." },
  { name: "Wesley Chapel", href: "/tampa-service-areas/wesley-chapel", detail: "Pasco County permitting and residential site access." },
];

export default function TampaServiceAreas() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Areas", href: "/tampa-service-areas" }]} />
      <section className="hero bg-surface">
        <div className="container">
          <h1>Pool Removal in Tampa Bay: Local Planning Guides</h1>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.8, maxWidth: "850px" }}>
            Pool removal costs and requirements can vary by property, access, groundwater, and local jurisdiction. Explore our city-specific guides before comparing demolition options or requesting an estimate.
          </p>
          <p>
            Start with the main <Link href="/" style={{ color: "var(--primary)", fontWeight: 700 }}>pool removal Tampa guide</Link> for an overview of full and partial removal, cost factors, and next steps.
          </p>
        </div>
      </section>
      <section className="section bg-surface-alt">
        <div className="container">
          <h2>Tampa Bay city and neighborhood guides</h2>
          <div className="grid grid-cols-2 gap-8">
            {areas.map((area) => (
              <div className="glass-card" key={area.href} style={{ padding: "2rem" }}>
                <h3><Link href={area.href}>{area.name} pool removal</Link></h3>
                <p>{area.detail}</p>
                <Link href={area.href} style={{ color: "var(--primary)", fontWeight: 700 }}>Read the {area.name} guide</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Local permits and site conditions</h2>
          <p>Pool removal is not a one-size-fits-all project. Verify the applicable building department and requirements for your address before work begins.</p>
          <ul>
            <li><Link href="/blog/do-you-need-a-permit-in-tampa">Tampa pool removal permit questions</Link></li>
            <li><Link href="/resources/hillsborough-pool-permits">Hillsborough County permit guide</Link></li>
            <li><Link href="/resources/pinellas-pool-permits">Pinellas County permit guide</Link></li>
            <li><Link href="/resources/pasco-pool-permits">Pasco County permit guide</Link></li>
            <li><Link href="/resources/high-water-table-dewatering">Groundwater and dewatering</Link></li>
          </ul>
          <div className="glass-card" style={{ padding: "2rem", marginTop: "2rem" }}>
            <h2>Plan your pool removal project</h2>
            <p>Use this preliminary calculator to explore potential costs. It is not a contractor quote.</p>
            <Calculator />
          </div>
        </div>
      </section>
    </>
  );
}
