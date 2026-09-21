import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-D7PqTiqZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ServerModeContext = (0, import_react.createContext)({
	mode: "survival",
	switching: false,
	setMode: () => {}
});
function ServerModeProvider({ children }) {
	const [mode, setModeState] = (0, import_react.useState)("survival");
	const [switching, setSwitching] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const router = useRouter();
	const setMode = (0, import_react.useCallback)((m) => {
		if (m === mode) return;
		setSwitching(true);
		window.setTimeout(() => {
			setModeState(m);
			navigate({
				to: "/",
				replace: true
			});
			router.invalidate();
			window.scrollTo({ top: 0 });
		}, 420);
		window.setTimeout(() => setSwitching(false), 900);
	}, [
		mode,
		navigate,
		router
	]);
	const value = (0, import_react.useMemo)(() => ({
		mode,
		switching,
		setMode
	}), [
		mode,
		switching,
		setMode
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ServerModeContext.Provider, {
		value,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: `pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-background transition-opacity duration-500 ${switching ? "opacity-100" : "opacity-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 animate-spin rounded-full border-2 border-primary/25 border-t-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs font-bold uppercase tracking-[0.35em] text-primary",
					children: "Loading realm"
				})]
			})
		})]
	});
}
function useServerMode() {
	return (0, import_react.useContext)(ServerModeContext);
}
var DISCORD_INVITE = "https://discord.gg/xuXMcn8Px";
var SERVER_IP = "play.vorknyxmc.fun";
var SERVER_PORT = "20255";
var RANKS = [
	{
		id: "rank-og",
		name: "OG Rank",
		price: 19,
		tagline: "VorknyxMC Rank Package",
		features: [
			"/kit og — every 24h",
			"Gold [OG] chat tag",
			"2 home slots",
			"Coloured chat basics"
		]
	},
	{
		id: "rank-vip",
		name: "VIP Rank",
		price: 39,
		tagline: "VorknyxMC Rank Package",
		features: [
			"/kit vip — every 20h",
			"/hat cosmetic access",
			"4 home slots",
			"Join-full-server slot"
		]
	},
	{
		id: "rank-special",
		name: "Special Rank",
		price: 79,
		tagline: "VorknyxMC Rank Package",
		features: [
			"/kit special — every 18h",
			"/nick custom nickname",
			"6 home slots",
			"Priority queue access"
		]
	},
	{
		id: "rank-mvp",
		name: "MVP Rank",
		price: 119,
		tagline: "VorknyxMC Rank Package",
		features: [
			"/kit mvp — every 16h",
			"/feed & /heal cooldown perks",
			"8 home slots",
			"Exclusive MVP crate roll"
		]
	},
	{
		id: "rank-elite",
		name: "Elite Rank",
		price: 149,
		tagline: "VorknyxMC Rank Package",
		features: [
			"/kit elite — every 14h",
			"/craft & /ec anywhere",
			"10 home slots",
			"Elite particle trail"
		]
	},
	{
		id: "rank-customize",
		name: "Customize Rank",
		price: 199,
		tagline: "VorknyxMC Rank Package",
		features: [
			"Design your own rank name & colour",
			"/kit custom built for you",
			"12 home slots",
			"Custom join message"
		],
		badge: "Build your own"
	},
	{
		id: "rank-mythical",
		name: "Mythical Rank",
		price: 299,
		tagline: "VorknyxMC Rank Package",
		features: [
			"/kit mythical — every 12h",
			"Mythical pet companion",
			"15 home slots",
			"2x coin earn rate"
		]
	},
	{
		id: "rank-crystal",
		name: "Crystal Rank",
		price: 499,
		tagline: "VorknyxMC Rank Package",
		features: [
			"/kit crystal — every 10h",
			"Crystal PvP loadout kit",
			"20 home slots",
			"Anchor cooldown reduction"
		]
	},
	{
		id: "rank-legendary",
		name: "Legendary Rank",
		price: 799,
		tagline: "VorknyxMC Rank Package",
		features: [
			"/kit legendary — every 8h",
			"Animated RGB chat tag",
			"30 home slots",
			"3x coin earn rate"
		]
	},
	{
		id: "rank-immortal",
		name: "Immortal Rank",
		price: 999,
		tagline: "VorknyxMC Rank Package",
		features: [
			"/kit immortal — every 6h",
			"All lower-rank kits unlocked",
			"Unlimited homes",
			"Immortal aura + private vault"
		],
		badge: "Ultimate"
	}
];
var COIN_PACKS = [
	{
		id: "coins-20",
		name: "20 Coins",
		price: 9,
		tagline: "Starter pouch",
		features: []
	},
	{
		id: "coins-50",
		name: "50 Coins",
		price: 24,
		tagline: "Small stash",
		features: []
	},
	{
		id: "coins-120",
		name: "120 Coins",
		price: 49,
		tagline: "Popular pick",
		features: [],
		badge: "Popular"
	},
	{
		id: "coins-150",
		name: "150 Coins",
		price: 74,
		tagline: "Collector pouch",
		features: []
	},
	{
		id: "coins-222",
		name: "222 Coins",
		price: 99,
		tagline: "Lucky stack",
		features: []
	},
	{
		id: "coins-458",
		name: "458 Coins",
		price: 199,
		tagline: "Big vault",
		features: []
	},
	{
		id: "coins-600",
		name: "600 Coins",
		price: 249,
		tagline: "Heavy vault",
		features: []
	},
	{
		id: "coins-900",
		name: "900 Coins",
		price: 349,
		tagline: "Elite vault",
		features: [],
		badge: "Best value"
	},
	{
		id: "coins-1600",
		name: "1600 Coins",
		price: 749,
		tagline: "Mythic hoard",
		features: []
	},
	{
		id: "coins-2000",
		name: "2000 Coins",
		price: 999,
		tagline: "Immortal hoard",
		features: [],
		badge: "Max"
	}
];
var COIN_USES = [
	"Custom Chat Colors",
	"Exclusive Pets",
	"Particle Effects",
	"Cosmetic Unlocks"
];
var CRATE_KEYS = [
	{
		id: "key-common",
		name: "Common Crate Key",
		price: 29,
		tagline: "Entry-tier loot roll",
		features: [
			"Basic gear & food drops",
			"Small coin bonus",
			"1 guaranteed reward"
		]
	},
	{
		id: "key-rare",
		name: "Rare Crate Key",
		price: 59,
		tagline: "Enchanted tier loot",
		features: [
			"Enchanted tools & armour",
			"Chance at cosmetics",
			"2 guaranteed rewards"
		]
	},
	{
		id: "key-thunder",
		name: "Thunder Crate Key",
		price: 99,
		tagline: "Storm-charged loot",
		features: [
			"Thunder-enchanted weapons",
			"Coin bundle drops",
			"Rare pet chance"
		]
	},
	{
		id: "key-storm",
		name: "Storm Crate Key",
		price: 149,
		tagline: "High-roll PvP loot",
		features: [
			"Crystal PvP supply drops",
			"Totems & anchors",
			"Guaranteed rare or better"
		]
	},
	{
		id: "key-crystal",
		name: "Crystal Crate Key",
		price: 249,
		tagline: "Crystal-tier arsenal",
		features: [
			"Full crystal loadout chance",
			"Particle cosmetic unlock",
			"Guaranteed epic or better"
		]
	},
	{
		id: "key-mythic",
		name: "Mythic Crate Key",
		price: 399,
		tagline: "Mythic-tier arsenal",
		features: [
			"Mythic weapon skins",
			"Exclusive mythic pet",
			"Guaranteed legendary chance"
		]
	},
	{
		id: "key-vork",
		name: "VORK Crate Key",
		price: 799,
		tagline: "The ultimate crate on VorknyxMC",
		features: [
			"Server-best exclusive drops",
			"Guaranteed legendary reward",
			"VORK-only cosmetic aura",
			"Massive coin payout"
		],
		badge: "Ultimate"
	}
];
//#endregion
export { RANKS as a, ServerModeProvider as c, DISCORD_INVITE as i, useServerMode as l, COIN_USES as n, SERVER_IP as o, CRATE_KEYS as r, SERVER_PORT as s, COIN_PACKS as t };
