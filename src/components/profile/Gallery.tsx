import { useState } from "react";
import { Maximize2, X } from "lucide-react";

import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { gallery } from "@/lib/profile-data";

export function Gallery() {
  const [activeImage, setActiveImage] = useState<(typeof gallery)[number] | null>(null);

  return (
    <section id="gallery" className="content-section gallery-section" data-reveal>
      <SectionHeading index="03" eyebrow="VISUAL ARCHIVE" title="THE LOADOUT / GALLERY" />
      <div className="cinematic-gallery">
        {gallery.map((image, index) => (
          <button type="button" className={`gallery-shot shot-${index + 1}`} key={image.label} onClick={() => setActiveImage(image)} aria-label={`View ${image.label}`}>
            <img src={image.src} alt={image.alt} loading="lazy" /><span>0{index + 1} // {image.label}</span><Maximize2 />
          </button>
        ))}
      </div>
      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.label} onClick={() => setActiveImage(null)}>
          <Button variant="ghost" size="icon" className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image"><X /></Button>
          <img src={activeImage.src} alt={activeImage.alt} /><span>{activeImage.label}</span>
        </div>
      )}
    </section>
  );
}
