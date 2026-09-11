import { SectionHeading } from "./SectionHeading";
import { assets, codmStats, weapons } from "@/lib/profile-data";

export function CodmSection() {
  return (
    <section id="codm" className="content-section" data-reveal>
      <SectionHeading index="02" eyebrow="CURRENT MAIN GAME" title="CALL OF DUTY: MOBILE" />
      <div className="codm-layout">
        <div className="codm-feature">
          <img src={assets.loadout} alt="Haywhy_Fc Call of Duty Mobile player loadout" loading="lazy" />
          <div className="codm-overlay"><span>SELECTED LOADOUT</span><strong>COMBAT READY</strong></div>
        </div>
        <div className="stats-grid">
          {codmStats.map(({ label, value, icon: Icon }, index) => <article className="hud-stat" key={label}><span>0{index + 1}</span><Icon /><p>{label}</p><strong>{value}</strong></article>)}
        </div>
      </div>
      <div className="armory-header"><span>ACTIVE ARMORY</span><strong>WEAPONS IN USE</strong><i /></div>
      <div className="weapon-grid">
        {weapons.map((weapon, index) => (
          <article className="weapon-card" key={weapon.name}>
            <img src={weapon.image} alt={weapon.alt} loading="lazy" />
            <div className="weapon-scan" aria-hidden="true" />
            <span>WPN // 0{index + 1}</span>
            <div><p>{weapon.detail}</p><h3>{weapon.name}</h3></div>
          </article>
        ))}
      </div>
    </section>
  );
}
