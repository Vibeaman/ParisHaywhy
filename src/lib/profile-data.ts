import { Crosshair, Gamepad2, Music2, Shield, Target, Trophy, Zap } from "lucide-react";

import loadoutAsset from "../assets/paris-loadout.webp";
import profileAsset from "../assets/paris-profile.webp";
import headerAsset from "../assets/paris-haywhy-header.jpeg";
import mpLoadoutAsset from "../assets/paris-mp-loadout.jpeg";
import { gameCardAsset } from "../assets/gallery-images";
import { leaderboardAsset, hurricaneLoadoutAsset } from "../assets/weapon-images";

export const assets = {
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
  bio: "Memento Mori Memento Vivere",
};

export const codmStats = [
  { label: \"Level\", value: \"450\", icon: Zap },\n  { label: \"MVP rate\", value: \"15.38%\", icon: Target },\n  { label: \"MVP awards\", value: \"93\", icon: Trophy },\n  { label: \"Profile likes\", value: \"11,751\", icon: Gamepad2 },\n  { label: \"Clan status\", value: \"NOT IN A CLAN\", icon: Shield },\n];\n\nexport const gallery = [\n  { src: mpLoadoutAsset, label: \"MULTIPLAYER LOADOUT\", alt: \"Haywhy_Fc Call of Duty Mobile multiplayer loadout with FSS Hurricane Shadow Skyline\" },\n  { src: profileAsset, label: \"OPERATOR PROFILE\", alt: \"Paris Haywhy Call of Duty Mobile operator profile\" },\n];\n\nexport const tiktok = {\n  label: \"TikTok\",\n  handle: \"@haywhyyontt\",\n  url: \"https://www.tiktok.com/@haywhyyontt\",\n  detail: \"1,683 FOLLOWERS // 90.5K LIKES\",\n  icon: Music2,\n};\n\nexport const weapons = [\n  {\n    name: \"WEAPON MASTER RANK 66\",\n    detail: \"LEADERBOARD // TOP 100 // 8196\",\n    image: leaderboardAsset,\n    alt: \"Paris Haywhy ranked 66 on the Call of Duty Mobile Weapon Master leaderboard\",\n  },\n  {\n    name: \"FSS HURRICANE SHADOW SKYLINE\",\n    detail: \"MYTHIC LEVEL 3 // LOADOUT\",\n    image: hurricaneLoadoutAsset,\n    alt: \"Haywhy_Fc FSS Hurricane Shadow Skyline mythic loadout in Call of Duty Mobile\",\n  },\n];\n\nexport const bioFacts: Array<[string, string]> = [\n  [\"PLAYER\", \"HAYWHY_FC\"],\n  [\"NAME\", \"Paris Haywhy\"],\n  [\"ROLE\", \"CODM Creator / TikToker\"],\n  [\"MAIN GAME\", \"Call of Duty: Mobile\"],\n  [\"PLATFORM\", \"Mobile\"],\n  [\"CURRENT LEVEL\", \"450\"],\n  [\"GAME MODES\", \"Multiplayer / Battle Royale\"],\n  [\"PLAY STYLE\", \"Aggressive\"],\n];\n\nexport const records = [\n  { label: \"PLAYER LEVEL\", value: \"450\", icon: Trophy },\n  { label: \"MVP AWARDS\", value: \"93\", icon: Crosshair },\n  { label: \"PROFILE LIKES\", value: \"11,751\", icon: Target },\n];\n\nexport const navItems: Array<[string, string]> = [\n  [\"HOME\", \"home\"],\n  [\"PROFILE\", \"profile\"],\n  [\"CODM\", \"codm\"],\n  [\"GALLERY\", \"gallery\"],\n  [\"TIKTOK\", \"socials\"],\n];\n"}