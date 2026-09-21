import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as playClick } from "./click-sound-Dmy6jZEK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthForm-BCslJ7NK.js
var import_jsx_runtime = require_jsx_runtime();
function AuthCard({ eyebrow, title, subtitle, children, submitLabel, footer, onSubmit, loading, error, notice, extra }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex justify-center py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				playClick();
				onSubmit(e);
			},
			className: "glass rgb-card w-full max-w-md rounded-2xl p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.3em] text-primary",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-2xl font-black matte-rgb-text",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4",
					children
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-destructive",
					children: error
				}),
				notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-primary",
					children: notice
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: loading,
					className: "violet-gold-btn mt-6 w-full rounded-lg px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-white disabled:opacity-60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10",
						children: loading ? "Please wait…" : submitLabel
					})
				}),
				extra,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 text-center text-xs text-muted-foreground",
					children: footer
				})
			]
		})
	});
}
function Field({ id, label, type = "text", placeholder, required = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: id,
		className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id,
		name: id,
		type,
		required,
		placeholder,
		className: "w-full rounded-lg border border-primary/20 bg-black/50 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
	})] });
}
function GoogleButton({ onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "mt-3 w-full rounded-lg border border-primary/25 bg-black/40 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary",
		children: "Continue with Google"
	});
}
//#endregion
export { Field as n, GoogleButton as r, AuthCard as t };
