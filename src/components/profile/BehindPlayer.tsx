import { Shield } from "lucide-react";

import { SectionHeading } from "./SectionHeading";
import { bioFacts } from "@/lib/profile-data";

export function BehindPlayer() {
  return (
    <section className="content-section" data-reveal>
      <SectionHeading index="04" eyebrow="PERSONNEL DATA" title="BEHIND THE PLAYER" />
      <div className="behind-grid">
        <div className="behind-copy"><Shield /><p>This profile belongs to the player behind the screen — built around the games, moments and matches that shape the journey.</p><span>PROFILE DATA // EDITABLE</span></div>
        <dl className="bio-grid">
          {bioFacts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
