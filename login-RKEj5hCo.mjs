import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-Bhax8vrM.mjs";
import { n as Field, r as GoogleButton, t as AuthCard } from "./AuthForm-BCslJ7NK.mjs";
import { t as lovable } from "./lovable-CAnHJzq4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-RKEj5hCo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const onSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setNotice("");
		const form = new FormData(e.currentTarget);
		const email = String(form.get("identifier") ?? "").trim();
		const password = String(form.get("password") ?? "");
		if (!email.includes("@")) {
			setError("Please sign in with the email address you registered with.");
			return;
		}
		setLoading(true);
		const { error: err } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		setLoading(false);
		if (err) setError(err.message);
	};
	const onGoogle = async () => {
		setError("");
		if ((await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin })).error) setError("Google sign-in failed. Please try again.");
	};
	const onForgot = async () => {
		const email = window.prompt("Enter your account email to reset your password:");
		if (!email) return;
		const { error: err } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
		if (err) setError(err.message);
		else setNotice("Password reset link sent — check your inbox.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthCard, {
		eyebrow: "Account",
		title: "LOGIN",
		subtitle: "Welcome back to VorknyxMC.",
		submitLabel: "Login",
		onSubmit,
		loading,
		error,
		notice,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleButton, { onClick: onGoogle }),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"New here?",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/register",
				className: "font-semibold text-primary",
				children: "Create an account"
			})
		] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "identifier",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onForgot,
				className: "block w-full text-right text-xs font-semibold text-primary",
				children: "Forgot Password?"
			})
		]
	});
}
//#endregion
export { LoginPage as component };
