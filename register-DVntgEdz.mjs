import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-Bhax8vrM.mjs";
import { n as Field, r as GoogleButton, t as AuthCard } from "./AuthForm-BCslJ7NK.mjs";
import { t as lovable } from "./lovable-CAnHJzq4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-DVntgEdz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RegisterPage() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const onSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setNotice("");
		const form = new FormData(e.currentTarget);
		const username = String(form.get("username") ?? "").trim();
		const email = String(form.get("email") ?? "").trim();
		const password = String(form.get("password") ?? "");
		if (password !== String(form.get("confirm") ?? "")) {
			setError("Passwords do not match.");
			return;
		}
		setLoading(true);
		const { data, error: err } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: window.location.origin,
				data: { username }
			}
		});
		setLoading(false);
		if (err) {
			setError(err.message);
			return;
		}
		if (!data.session) setNotice("Account created — check your email to confirm, then log in.");
	};
	const onGoogle = async () => {
		setError("");
		if ((await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin })).error) setError("Google sign-up failed. Please try again.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthCard, {
		eyebrow: "Account",
		title: "REGISTER",
		subtitle: "Join the VorknyxMC store.",
		submitLabel: "Create account",
		onSubmit,
		loading,
		error,
		notice,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleButton, { onClick: onGoogle }),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Already have an account?",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "font-semibold text-primary",
				children: "Login"
			})
		] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "username",
				label: "Minecraft Username",
				placeholder: "Notch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "email",
				label: "Email",
				type: "email",
				placeholder: "you@example.com"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "password",
				label: "Password",
				type: "password",
				placeholder: "••••••••"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "confirm",
				label: "Confirm Password",
				type: "password",
				placeholder: "••••••••"
			})
		]
	});
}
//#endregion
export { RegisterPage as component };
