// ─────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT
// Every editable piece of copy, link, and project entry for the site lives
// in this file. Update values here — you should not need to touch any
// component to change content.
// ─────────────────────────────────────────────────────────────────────────

export type VideoKind = "youtube" | "mp4" | "drive" | "external";

export interface VideoSource {
  url: string;
  kind: VideoKind;
}

export interface ProjectTag {
  label: string;
}

export interface Project {
  id: string;
  badge?: string; // e.g. "LIVE / PUBLIC GAME"
  category: string;
  title: string;
  description: string;
  tags: string[];
  video?: string; // raw URL, kind is auto-detected
  playUrl?: string; // "Play Game" — public link
  // Preview image priority: 1) thumbnail below, if set — put a real image in
  // /public/projects and point this at it, e.g. "/projects/roulette.webp".
  // 2) if omitted and `video` is a YouTube link, the card automatically uses
  // that video's YouTube thumbnail — no code change needed. 3) if neither is
  // available, the card falls back to a generated placeholder.
  thumbnail?: string;
}

export interface FeaturedTrailer {
  eyebrow: string;
  title: string;
  subtitle: string;
  url: string;
  thumbnail: string;
}

export interface BuildCard {
  title: string;
  description: string;
  tag: string; // short mono label, e.g. "COMBAT"
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface PricingNote {
  text: string;
}

// ── Links ───────────────────────────────────────────────────────────────
// Replace these with your real links before deploying.
export const links = {
  discordUrl: "https://discord.com/users/991387775544856606",
  robloxProfileUrl: "https://www.roblox.com/users/1521096248/profile",
  email: "gencerturk643@gmail.com",
  rouletteGameUrl: "https://www.roblox.com/games/99816904304707/The-Roulette",
  rouletteVideoUrl: "https://youtu.be/rMJOoTXyci8",
  combatVideoUrl: "https://youtu.be/gnBzd-Q1F38",
  eggHatchVideoUrl: "https://youtu.be/DMsBsC_BhZg",
  progressionVideoUrl: "https://youtu.be/6pV7530aAf4",
};

// ── Featured trailer ────────────────────────────────────────────────────
// Add the finished trailer URL and thumbnail here. The thumbnail's intended
// public path is /projects/roulette-trailer.webp.
export const featuredTrailer: FeaturedTrailer = {
  eyebrow: "Featured Trailer",
  title: "The Roulette — Official Trailer",
  subtitle: "A cinematic look at my fully playable Roblox game.",
  url: "https://youtu.be/8Hym5V8BK6g",
  thumbnail: "/projects/roulette-trailer.webp",
};

// ── Hero ────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "AVAILABLE FOR COMMISSIONS",
  heading: "ROBLOX GAMEPLAY SCRIPTER",
  subheading:
    "Building scalable gameplay systems, combat mechanics, progression, data systems, and polished Roblox experiences.",
  primaryCta: { label: "View My Work", href: "#projects" },
  secondaryCta: { label: "Contact Me", href: "#contact" },
};

// ── Stats strip ─────────────────────────────────────────────────────────
export const stats: string[] = [
  "Public Roblox Game",
  "Gameplay Systems",
  "Combat Systems",
  "Progression Systems",
  "Client / Server",
  "Data & Persistence",
];

// ── Projects ────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "the-roulette",
    badge: "LIVE / PUBLIC GAME",
    category: "Public Roblox Game",
    title: "The Roulette",
    description:
      "A fully working and publicly playable round-based Roblox game with a complete gameplay loop, player interactions, UI systems, match flow, and integrated game mechanics.",
    tags: [
      "Round Systems",
      "Gameplay Loop",
      "Player Interaction",
      "UI Integration",
      "Game States",
      "Public Release",
    ],
    video: links.rouletteVideoUrl,
    playUrl: links.rouletteGameUrl,
  },
  {
    id: "pvp-combat-systems",
    category: "System Showcase",
    title: "PvP Combat Systems",
    description:
      "A combat framework demonstrating M1 combos, hit detection, hitstun, knockback, blocking, directional dodging, abilities, cooldowns, combat states, an ultimate system, enemy interaction, damage feedback, and server-side validation, with animation, VFX, and SFX integration.",
    tags: [
      "PvP",
      "Combat",
      "Hit Detection",
      "Abilities",
      "Client/Server",
      "State Management",
    ],
    video: links.combatVideoUrl,
  },
  {
    id: "simulator-egg-hatch-systems",
    category: "System Showcase",
    title: "Simulator / Egg Hatch Systems",
    description:
      "A simulator-focused showcase featuring egg hatching, weighted rarity, a pity system, pet inventory, equip/unequip, pet following, currencies, upgrades, shop systems, notifications, persistent player data, server validation, and UI integration.",
    tags: ["Simulator", "Gacha", "Inventory", "Pets", "Economy", "Data"],
    video: links.eggHatchVideoUrl,
  },
  {
    id: "progression-systems",
    category: "System Showcase",
    title: "Progression Systems",
    description:
      "A progression and backend showcase featuring XP and levels, quests, daily rewards, playtime rewards, shops, upgrades, inventory, boosts, currencies, reward systems, persistent data, and server-side validation.",
    tags: ["Progression", "Quests", "Data", "Economy", "Rewards", "Backend"],
    video: links.progressionVideoUrl,
  },
];

// ── What I Build ────────────────────────────────────────────────────────
export const buildCards: BuildCard[] = [
  {
    tag: "COMBAT",
    title: "Combat Systems",
    description:
      "Hit registration, combo chains, hitstun/knockback, blocking, dodging, abilities, and cooldown-driven combat states.",
  },
  {
    tag: "SIMULATOR",
    title: "Simulator Systems",
    description:
      "Hatch/roll mechanics, weighted rarity, pity systems, and pet or item ownership with equip and inventory flows.",
  },
  {
    tag: "ECONOMY",
    title: "Progression & Economy",
    description:
      "XP curves, quests, dailies, shops, upgrades, and currency systems that stay balanced as content scales.",
  },
  {
    tag: "DATA",
    title: "Data Systems",
    description:
      "DataStore schemas, session data, autosave, and failure-safe persistence built to survive server shutdowns.",
  },
  {
    tag: "UI",
    title: "UI Integration",
    description:
      "Wiring gameplay state to interface: inventories, HUDs, notifications, and menus driven by live game data.",
  },
  {
    tag: "NETWORK",
    title: "Client / Server Systems",
    description:
      "RemoteEvent and RemoteFunction architecture with clear ownership boundaries between client and server.",
  },
  {
    tag: "CORE",
    title: "Gameplay Systems",
    description:
      "Modular game loops, state machines, and system interactions designed to extend without rewrites.",
  },
  {
    tag: "PERF",
    title: "Debugging & Optimization",
    description:
      "Tracing edge cases, profiling hot paths, and tightening scripts for stability under real player load.",
  },
];

// ── Technical Skills ────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    label: "Language & Environment",
    items: ["Luau", "Roblox Studio", "ModuleScripts"],
  },
  {
    label: "Networking",
    items: ["RemoteEvents / RemoteFunctions", "Client / Server Architecture", "Server Validation"],
  },
  {
    label: "Systems & Data",
    items: ["DataStore", "Gameplay State Systems", "UI Integration"],
  },
  {
    label: "Execution",
    items: ["TweenService", "Raycast / Spatial Hit Detection", "Debugging", "Optimization"],
  },
];

// ── Pricing ─────────────────────────────────────────────────────────────
export const pricing = {
  eyebrow: "Commissions",
  heading: "Per-Task Pricing",
  range: "R$2,000 – R$25,000+",
  rangeLabel: "Typical range per task",
  explanation:
    "Final pricing depends on the task scope, complexity, deadline, and the existing codebase.",
  note: "More complex or larger systems may be priced above this range.",
  detail: "Every task is scoped and priced individually — no fixed packages.",
};

// ── Development Approach ────────────────────────────────────────────────
export const approach = {
  heading: "Development Approach",
  body: "I focus on building gameplay systems that are modular, testable, and easy to extend. I pay particular attention to client/server separation, system interaction, edge cases, and reliable integration into the wider game.",
};

// ── System-focused note ─────────────────────────────────────────────────
export const systemNote =
  "Some showcase projects are system-focused development prototypes. Their purpose is to demonstrate scripting, gameplay logic, backend architecture, and system integration — rather than final production UI/UX, environment art, animation, or VFX design.";

// ── About ───────────────────────────────────────────────────────────────
export const about = {
  heading: "About",
  body: "Roblox gameplay scripter focused on combat, simulator systems, progression, persistent data, UI integration, and general gameplay systems.",
  availableFor: ["Commissions", "Per-task work", "Milestone work", "Long-term development"],
};

// ── Availability ────────────────────────────────────────────────────────
export const availability = {
  timezone: "GMT+3",
  status: "Available for commissions",
  preferredWork: "Per-task / Milestone / Long-term",
  preferredPayment: "Robux",
};

// ── Contact ─────────────────────────────────────────────────────────────
export const contact = {
  heading: "Let's Build Something",
  body: "Reach out on Discord, by email, or check out my Roblox profile — happy to talk through scope before we start.",
};

// ── Nav ─────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Systems", href: "#systems" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ── Site meta ───────────────────────────────────────────────────────────
export const siteMeta = {
  title: "Roblox Gameplay Scripter | Portfolio",
  description:
    "Portfolio showcasing Roblox gameplay systems including combat, progression, simulator mechanics, persistent data, and client/server scripting.",
};
