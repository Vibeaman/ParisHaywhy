import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { player } from "@/lib/profile-data";

export function GamerTag() {
  const [copied, setCopied] = useState(false);

  const copyTag = async () => {
    await navigator.clipboard.writeText(player.gamerTag);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="tag-section" data-reveal>
      <div className="tag-inner">
        <p className="eyebrow">IDENTITY CODE</p><h2>MY GAMER TAG</h2>
        <div className="tag-display"><span>{player.gamerTag}</span><i aria-hidden="true" /></div>
        <Button variant="outline" className="copy-button" onClick={copyTag}>{copied ? <Check /> : <Copy />}{copied ? "TAG COPIED ✓" : "COPY TAG"}</Button>
      </div>
    </section>
  );
}
