import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

const TRACK_SRC = "/audio/disfruto.mp3?v=2";

export function Soundtrack() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(TRACK_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const sync = () => setPlaying(!audio.paused);
    audio.addEventListener("play", sync);
    audio.addEventListener("pause", sync);

    const tryPlay = () => {
      void audio.play().catch(() => setPlaying(false));
    };

    tryPlay();

    const unlock = () => {
      if (audio.paused) tryPlay();
    };

    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });

    return () => {
      audio.pause();
      audio.removeEventListener("play", sync);
      audio.removeEventListener("pause", sync);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      void audio.play().catch(() => setPlaying(false));
      return;
    }

    audio.pause();
  };

  return (
    <Button
      type="button"
      variant="ghost"
      className="audio-toggle"
      onClick={toggle}
      aria-label={playing ? "Pause soundtrack" : "Play soundtrack"}
      aria-pressed={playing}
    >
      {playing ? <Pause /> : <Play />}
      <span>{playing ? "PAUSE" : "PLAY"}</span>
    </Button>
  );
}
