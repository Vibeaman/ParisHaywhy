import { Crosshair, Gamepad2, Music2, Shield, Target, Trophy, Zap } from "lucide-react";

import lifestyleAsset from "../assets/paris-lifestyle.webp";
import loadoutAsset from "../assets/paris-loadout.webp";
import profileAsset from "../assets/paris-profile.webp";
import gameCardAsset from "../assets/paris-game-card.jpeg";
import headerAsset from "../assets/paris-haywhy-header.jpeg";
import { leaderboardAsset, hurricaneLoadoutAsset } from "../assets/weapon-images";

export const assets = {
  lifestyle: lifestyleAsset,
  loadout: loadoutAsset,
  profile: profileAsset,
  gameCard: gameCardAsset,
  header: headerAsset,
};

export const player = {
  username: "Paris Haywhy",
  gamerTag: "7207918917695045633",
  game: "Call of Duty: Mobile",
  status: "ONLINE",
  bio: "Just here to play, compete, improve and have fun.",
};

export const codmStats = [
  { label: "Level", value: "401", icon: Zap },
  { label: "MVP rate", value: "15.38%", icon: Target },
  { label: "MVP awards", value: "21", icon: Trophy },
  { label: "Profile likes", value: "11,751", icon: Gamepad2 },
  { label: "Clan status", value: "NOT IN A CLAN", icon: Shield },
];

export const gallery = [
  { src: gameCardAsset, label: "PLAYER GAME CARD", alt: "Paris Haywhy Call of Duty Mobile game card" },
  { src: profileAsset, label: "OPERATOR PROFILE", alt: "Paris Haywhy Call of Duty Mobile operator profile" },
  { src: loadoutAsset, label: "ACTIVE LOADOUT", alt: "Haywhy_Fc Call of Duty Mobile loadout" },
  { src: lifestyleAsset, label: "OFF THE GRID", alt: "Haywhy_Fc gaming and lifestyle highlights" },
];

export const tiktok = {
  label: "TikTok",
  handle: "@haywhyyontt",
  url: "https://www.tiktok.com/@haywhyyontt",
  detail: "1,683 FOLLOWERS // 90.5K LIKES",
  icon: Music2,
};

export const weapons = [
  {
    name: "WEAPON MASTER RANK 66",
    detail: "LEADERBOARD // TOP 100 // 8196",
    image: leaderboardAsset,
    alt: "Paris Haywhy ranked 66 on the Call of Duty Mobile Weapon Master leaderboard",
  },
  {
    name: "FSS HURRICANE SHADOW SKYLINE",
    detail: "MYTHIC LEVEL 3 // LOADOUT",
    image: hurricaneLoadoutAsset,
    alt: "Haywhy_Fc FSS Hurricane Shadow Skyline mythic loadout in Call of Duty Mobile",
  },
];

export const bioFacts: Array<[string, string]> = [
  ["PLAYER", "HAYWHY_FC"],
  ["NAME", "Paris Haywhy"],
  ["ROLE", "CODM Creator / TikToker"],
  ["MAIN GAME", "Call of Duty: Mobile"],
  ["PLATFORM", "Mobile"],
  ["CURRENT LEVEL", "401"],
  ["GAME MODES", "Multiplayer / Battle Royale"],
  ["PLAY STYLE", "Compete · Improve · Have fun"],
];

export const records = [
  { label: "PLAYER LEVEL", value: "401", icon: Trophy },
  { label: "MVP AWARDS", value: "21", icon: Crosshair },
  { label: "PROFILE LIKES", value: "11,751", icon: Target },
];

export const navItems: Array<[string, string]> = [
  ["HOME", "home"],
  ["PROFILE", "profile"],
  ["CODM", "codm"],
  ["GALLERY", "gallery"],
  ["TIKTOK", "socials"],
];
