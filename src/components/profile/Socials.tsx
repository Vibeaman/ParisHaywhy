import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "./SectionHeading";
import { tiktok } from "@/lib/profile-data";

export function Socials() {
  return (
    <section id="socials" className="content-section socials-section" data-reveal>
      <SectionHeading index="06" eyebrow="SOCIAL UPLINK" title="FIND ME ONLINE" />
      <a className="social-feature" href={tiktok.url} target="_blank" rel="noreferrer" aria-label={`Open ${tiktok.label} profile ${tiktok.handle}`}>
        <span className="social-glow" aria-hidden="true" />
        <div className="social-feature-inner">
          <tiktok.icon />
          <div className="social-feature-meta">
            <span>{tiktok.label}</span>
            <strong>{tiktok.handle}</strong>
            <small>{tiktok.detail}</small>
          </div>
          <ArrowUpRight />
        </div>
        <div className="social-feature-bar" aria-hidden="true"><span />FOLLOW CHANNEL</div>
      </a>
    </section>
  );
}
