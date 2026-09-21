import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-Bhax8vrM.mjs";
import { n as Field, t as AuthCard } from "./AuthForm-BCslJ7NK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-CehasnLJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResetPasswordPage() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const onSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setNotice("");
		const form = new FormData(e.currentTarget);
		const password = String(form.get("password") ?? "");
		if (password !== String(form.get("confirm") ?? "")) {
			setError("Passwords do not match.");
			return;
		}
		setLoading(true);
		const { error: err } = await supabase.auth.updateUser({ password });
		setLoading(false);
		if (err) {
			setError(err.message);
			return;
		}
		setNotice("Password updated. Taking you to the store…");
		setTimeout(() => void navigate({ to: "/" }), 1200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthCard, {
		eyebrow: "Account",
		title: "NEW PASSWORD",
		subtitle: "Choose a new password for your account.",
		submitLabel: "Update password",
		onSubmit,
		loading,
		error,
		notice,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Use the link from your reset email to open this page." }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			id: "password",
			label: "New Password",
			type: "password",
			placeholder: "••••••••"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			id: "confirm",
			label: "Confirm Password",
			type: "password",
			placeholder: "••••••••"
		})]
	});
}
//#endregion
export { ResetPasswordPage as component };
