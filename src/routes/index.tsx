import { createFileRoute } from "@tanstack/react-router";

import { BehindPlayer } from "@/components/profile/BehindPlayer";
import { CodmSection } from "@/components/profile/CodmSection";
import { FloatingNav } from "@/components/profile/FloatingNav";
import { Footer } from "@/components/profile/Footer";
import { Gallery } from "@/components/profile/Gallery";
import { GamerTag } from "@/components/profile/GamerTag";
import { Hero } from "@/components/profile/Hero";
import { PlayerProfile } from "@/components/profile/PlayerProfile";
import { PlayerRecord } from "@/components/profile/PlayerRecord";
import { Socials } from "@/components/profile/Socials";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haywhy_Fc | CODM Player Profile" },
      { name: "description", content: "Enter the official digital player profile of Haywhy_Fc — Call of Duty: Mobile player." },
      { property: "og:title", content: "Haywhy_Fc | Player Profile" },
      { property: "og:description", content: "Locked in. Game on. Explore the player profile of Haywhy_Fc." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <main className="profile-site" id="home">
      <FloatingNav />
      <Hero />
      <PlayerProfile />
      <GamerTag />
      <CodmSection />
      <Gallery />
      <BehindPlayer />
      <PlayerRecord />
      <Socials />
      <Footer />
    </main>
  );
}
