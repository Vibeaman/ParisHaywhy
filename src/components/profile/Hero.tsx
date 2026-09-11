import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { assets } from "@/lib/profile-data";

export function Hero() {
  return (
    <section className="game-hero">
      <div className="hero-art" aria-hidden="true"><img src={assets.header} alt="" /></div>
      <div className="hero-grid" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="hero-coordinates" aria-hidden="true">LAT 06.5244° N<br />LNG 03.3792° E</div>
      <div className="hero-index" aria-hidden="true">PLAYER // 01</div>
      <div className="hero-content">
        <div className="status-pill"><span /> ONLINE <b>01</b></div>
        <p className="hero-overline">PLAYER PROFILE // COD:M</p>
        <h1>HAYWHY<span>_FC</span></h1>
        <p className="hero-line">LOCKED IN. <strong>GAME ON.</strong></p>
        <Button asChild className="hud-button hero-cta"><a href="#profile">ENTER PROFILE <ArrowDown /></a></Button>
      </div>
      <div className="hero-data" aria-hidden="true"><span>SYS.STATUS</span><strong>ACTIVE</strong><span>REGION</span><strong>NG</strong></div>
      <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown /></div>
    </section>
  );
}
