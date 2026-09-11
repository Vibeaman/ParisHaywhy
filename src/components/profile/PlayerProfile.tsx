import { SectionHeading } from "./SectionHeading";
import { assets, player } from "@/lib/profile-data";

export function PlayerProfile() {
  return (
    <section id="profile" className="content-section profile-section" data-reveal>
      <SectionHeading index="01" eyebrow="IDENTITY FILE" title="PLAYER PROFILE" />
      <div className="player-panel">
        <div className="operator-visual">
          <img src={assets.gameCard} alt="Paris Haywhy CODM game card" />
          <div className="frame-corner top-left" /><div className="frame-corner bottom-right" />
          <span className="operator-label">GAME CARD // UID VERIFIED</span>
        </div>
        <div className="player-intel">
          <div className="intel-status"><span /> VERIFIED PLAYER FILE <b>#001</b></div>
          <dl>
            <div><dt>USERNAME</dt><dd>{player.username}</dd></div>
            <div><dt>GAMER TAG</dt><dd>{player.gamerTag}</dd></div>
            <div><dt>MAIN GAME</dt><dd>{player.game}</dd></div>
            <div><dt>STATUS</dt><dd className="active-value">{player.status}</dd></div>
          </dl>
          <blockquote>“{player.bio}”</blockquote>
        </div>
      </div>
    </section>
  );
}
