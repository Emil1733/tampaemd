import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Do You Need a Permit for Pool Removal in Tampa?",
  description: "Planning pool removal in Tampa? Learn which local building department to contact, what to ask about permits, and how to prepare for demolition.",
  alternates: { canonical: "/blog/do-you-need-a-permit-in-tampa" },
};

export default function TampaPoolPermitGuide() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "Blog", href: "/blog" },
        { name: "Tampa Pool Removal Permits", href: "/blog/do-you-need-a-permit-in-tampa" },
      ]} />
      <article className="section bg-surface">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h1>Do You Need a Permit to Remove a Pool in Tampa?</h1>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Before demolishing, filling in, or removing a swimming pool in Tampa, confirm the applicable permit and inspection requirements with the building department that has jurisdiction over your property. The answer can depend on your address, the scope of demolition, and the proposed use of the area afterward.
          </p>
          <p>
            This homeowner guide explains what to check before requesting a <Link href="/" style={{ color: "var(--primary)", fontWeight: 700 }}>Tampa pool removal or pool demolition estimate</Link>. It is general guidance, not an official permit determination.
          </p>

          <h2>1. City of Tampa or unincorporated Hillsborough County?</h2>
          <p>
            A Tampa mailing address does not always mean a property is inside Tampa city limits. Start by confirming the jurisdiction for the actual property address. Different local authorities may have different applications, review processes, and inspection requirements.
          </p>
          <ul>
            <li><a href="https://www.tampa.gov/construction-services" target="_blank" rel="noopener noreferrer">City of Tampa Construction Services</a></li>
            <li><a href="https://hcfl.gov/residents/property-owners-and-renters/permits-and-records" target="_blank" rel="noopener noreferrer">Hillsborough County permits and records</a></li>
          </ul>
          <p>Ask whether your proposed full removal, partial removal, or abandonment requires a building or demolition permit, and whether other approvals are involved.</p>

          <h2>2. Full removal versus partial removal</h2>
          <p>
            Full removal generally means excavating and hauling away the pool shell. Partial removal or abandonment may leave some material in place, subject to the applicable rules and approved plan. Requirements can differ, so do not assume that breaking holes in the shell and adding fill is automatically permitted.
          </p>
          <p>Compare the options in our <Link href="/full-vs-partial-pool-removal">full versus partial pool removal guide</Link>.</p>

          <h2>3. Questions to ask before demolition</h2>
          <ul>
            <li>Which permits or approvals apply to this address and proposed removal method?</li>
            <li>Is a site plan, survey, or description of the existing pool required?</li>
            <li>How should electrical, gas, plumbing, and pool equipment be disconnected?</li>
            <li>Are there inspection, backfill, compaction, or drainage requirements?</li>
            <li>Are tree protection, easements, floodplain rules, or other site constraints relevant?</li>
            <li>What documentation should the homeowner retain after completion?</li>
          </ul>

          <h2>4. Why groundwater and backfill matter in Tampa Bay</h2>
          <p>
            Groundwater, soil conditions, and access for heavy equipment can affect the removal method and restoration plan. The appropriate approach is site-specific. Read about <Link href="/resources/high-water-table-dewatering">high-water-table considerations</Link> and <Link href="/resources/soil-stabilization-backfill">backfill and compaction</Link>.
          </p>

          <h2>5. How much are permits, and how long do they take?</h2>
          <p>
            There is no reliable universal fee or approval timeline for every Tampa-area pool removal. Costs and processing times depend on jurisdiction, application type, scope, and whether additional reviews are required. Confirm current fees and estimated processing times directly with the relevant department before budgeting or scheduling work.
          </p>

          <h2>6. Prepare for a pool removal estimate</h2>
          <p>
            Have your property address, approximate pool dimensions, pool type, photographs, access details, and intended future use of the yard ready. A contractor can use this information to discuss feasible removal options and identify questions for the permitting authority.
          </p>
          <p>
            For additional context, see our <Link href="/pool-removal-cost-tampa">Tampa pool removal cost guide</Link> and <Link href="/pool-demolition-process">pool demolition process</Link>.
          </p>
          <div className="glass-card" style={{ padding: "2rem", marginTop: "2rem" }}>
            <h2>Estimate your Tampa pool removal project</h2>
            <p>Use the calculator below for an initial planning estimate. Final pricing and required approvals depend on the property and the contractor's assessment.</p>
            <Calculator />
          </div>
        </div>
      </article>
    </>
  );
}
