import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { l as useServerMode } from "./store-D7PqTiqZ.mjs";
import { t as playClick } from "./click-sound-Dmy6jZEK.mjs";
import { c as LoaderCircle, d as Check, f as BadgeCheck, o as MessageCircle, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ShopPage-CXtNNagg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, onBuy, accent = "default", footnote }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		onClick: playClick,
		className: "rgb-card glass flex flex-col rounded-2xl p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-black matte-rgb-text",
					children: product.name
				}), product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary",
					children: product.badge
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: product.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "liquid-crystal-price mt-4 px-4 py-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "liquid-crystal-text font-display text-2xl font-black tracking-normal",
					children: ["₹", product.price]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute right-1 top-1/2 h-3 w-0.5 -translate-y-1/2 rounded-full bg-amber-300/50 blur-[2px] shadow-[0_0_6px_rgba(255,200,90,0.4)]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 flex-1 space-y-2 text-sm text-foreground/85",
				children: (product.features.length ? product.features : footnote ?? []).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					playClick();
					onBuy(product);
				},
				className: "violet-gold-btn mt-6 w-full rounded-lg px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative z-10",
					children: "Buy Now"
				})
			})
		]
	});
}
var upi_qr_jpg_asset_default = {
	version: 1,
	asset_id: "43dad148-dfe0-4889-b8ba-9fee8898b5f8",
	project_id: "f436f5c1-e6ab-4e33-a561-e2482a746331",
	url: "/__l5e/assets-v1/43dad148-dfe0-4889-b8ba-9fee8898b5f8/upi-qr.jpg",
	r2_key: "a/v1/f436f5c1-e6ab-4e33-a561-e2482a746331/43dad148-dfe0-4889-b8ba-9fee8898b5f8/upi-qr.jpg",
	original_filename: "upi-qr.jpg",
	size: 83360,
	content_type: "image/jpeg",
	created_at: "2026-09-20T17:59:04Z"
};
function PaymentModal({ product, onClose }) {
	const [stage, setStage] = (0, import_react.useState)("loading");
	(0, import_react.useEffect)(() => {
		if (!product) return;
		setStage("loading");
		const t = window.setTimeout(() => setStage("qr"), 1600);
		return () => window.clearTimeout(t);
	}, [product]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	if (!product) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rgb-card relative w-full max-w-md rounded-2xl p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						playClick();
						onClose();
					},
					"aria-label": "Close",
					className: "absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground transition-colors hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				}),
				stage === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-4 py-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-9 w-9 animate-spin text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-bold uppercase tracking-[0.25em] text-primary",
							children: "Generating QR Code..."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								product.name,
								" — ₹",
								product.price
							]
						})
					]
				}),
				stage === "qr" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary",
							children: "UPI Payment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-xl font-black matte-rgb-text",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: ["Scan & pay ₹", product.price]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 rounded-2xl border border-primary/25 bg-white p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: upi_qr_jpg_asset_default.url,
								alt: `Dummy UPI QR code for ${product.name}`,
								className: "h-52 w-52 object-contain"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								playClick();
								setStage("confirm");
							},
							className: "violet-gold-btn mt-6 w-full rounded-lg px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative z-10",
								children: "Paid"
							})
						})
					]
				}),
				stage === "confirm" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-10 w-10 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-xl font-black matte-rgb-text",
							children: "Confirm your payment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Just click the button and open a ticket on Discord to send an SS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://discord.com/channels/@me/1546479213773856798",
							target: "_blank",
							rel: "noreferrer",
							onClick: playClick,
							className: "violet-gold-btn mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "relative z-10 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative z-10",
								children: "For confirming, click this button"
							})]
						})
					]
				})
			]
		})
	});
}
function ShopPage({ eyebrow, title, subtitle, products, footnote }) {
	const [active, setActive] = (0, import_react.useState)(null);
	const { mode } = useServerMode();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-12 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[11px] font-bold uppercase tracking-[0.3em] text-primary",
				children: [
					eyebrow,
					" · ",
					mode === "survival" ? "Survival" : "Lifesteal"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-black sm:text-4xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rgb-text",
					children: title
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-foreground/75 sm:text-base",
				children: subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					onBuy: setActive,
					footnote: footnote ?? []
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentModal, {
				product: active,
				onClose: () => setActive(null)
			})
		]
	});
}
//#endregion
export { ShopPage as t };
