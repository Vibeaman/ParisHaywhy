import { SectionHeading } from "./SectionHeading";
import { records } from "@/lib/profile-data";

export function PlayerRecord() {
  return (
    <section className="record-band" data-reveal>
      <div className="content-section">
        <SectionHeading index="05" eyebrow="ACHIEVEMENT LOG" title="PLAYER RECORD" />
        <div className="record-grid">
          {records.map(({ label, value, icon: Icon }, index) => <article key={label}><span>0{index + 1}</span><Icon /><p>{label}</p><strong>{value}</strong></article>)}
        </div>
      </div>
    </section>
  );
}
