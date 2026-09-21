import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as DISCORD_INVITE, l as useServerMode, o as SERVER_IP, s as SERVER_PORT } from "./store-D7PqTiqZ.mjs";
import { t as playClick } from "./click-sound-Dmy6jZEK.mjs";
import { d as Check, i as Sparkles, o as MessageCircle, u as Copy } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B2FgkIu0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopLinks, {})
	] });
}
function Hero() {
	const { mode } = useServerMode();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col items-center py-20 text-center sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "glass flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }),
					" ",
					mode === "survival" ? "Survival Realm" : "Lifesteal Realm"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-6 font-display text-4xl font-black leading-tight sm:text-6xl md:text-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rgb-text",
					children: "VORKNYX"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary glow-soft",
					children: " MC"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-base text-foreground/80 sm:text-lg",
				children: "Gear up for the storm. Ranks, crate keys and coins delivered straight to your account after a quick UPI payment and a Discord ticket."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ranks",
					onClick: playClick,
					className: "rgb-btn rounded-lg bg-primary px-7 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground",
					children: "Browse Ranks"
				})
			})
		]
	});
}
var SHOP_LINKS = [
	{
		to: "/ranks",
		title: "RANKS",
		copy: "Ten tiers of kits, homes and privileges."
	},
	{
		to: "/crate-keys",
		title: "CRATE KEYS",
		copy: "Seven crate tiers up to the VORK key."
	},
	{
		to: "/coin-shop",
		title: "COIN SHOP",
		copy: "Coins for cosmetics, pets and chat colors."
	}
];
function ShopLinks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grid gap-5 py-8 sm:grid-cols-3",
		children: SHOP_LINKS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: s.to,
			onClick: playClick,
			className: "rgb-card glass rounded-2xl p-6 transition-transform hover:-translate-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-black matte-rgb-text",
				children: s.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: s.copy
			})]
		}, s.to))
	});
}
function ConnectSection() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const address = `${SERVER_IP}:${SERVER_PORT}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-6 pb-8 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rgb-card glass overflow-hidden rounded-2xl p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-black matte-rgb-text",
					children: "JOIN THE SERVER"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Java & Bedrock supported."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center justify-between gap-3 rounded-lg border border-primary/25 bg-black/45 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
								children: "Server IP"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-display text-sm font-bold text-primary sm:text-base",
								children: SERVER_IP
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								playClick();
								navigator.clipboard?.writeText(address);
								setCopied(true);
								setTimeout(() => setCopied(false), 1600);
							},
							className: "rgb-btn shrink-0 rounded-md border border-primary/50 p-2 text-primary",
							"aria-label": "Copy server IP",
							children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-primary/25 bg-black/45 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
							children: "Port"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-bold text-primary sm:text-base",
							children: SERVER_PORT
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rgb-card glass flex flex-col overflow-hidden rounded-2xl p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "break-words font-display text-xl font-black matte-rgb-text sm:text-2xl",
					children: "ENTER THE VOID"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Tickets, giveaways, updates and the whole VorknyxMC community."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { label: "Java 1.21+" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { label: "Bedrock Ready" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							label: "Server Online",
							dot: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: DISCORD_INVITE,
					target: "_blank",
					rel: "noreferrer",
					onClick: playClick,
					className: "violet-gold-btn mt-auto flex w-full max-w-full items-center justify-center gap-2 truncate rounded-lg px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-white",
					style: { marginTop: "1.75rem" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "relative z-10 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10",
						children: "Join Discord"
					})]
				})
			]
		})]
	});
}
function StatusBadge({ label, dot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex max-w-full items-center gap-1.5 truncate rounded-full border border-primary/35 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary",
		children: [dot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" }), label]
	});
}
//#endregion
export { Index as component };
