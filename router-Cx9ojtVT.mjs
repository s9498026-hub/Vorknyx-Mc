import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ServerModeProvider, l as useServerMode, o as SERVER_IP, s as SERVER_PORT } from "./store-D7PqTiqZ.mjs";
import { t as playClick } from "./click-sound-Dmy6jZEK.mjs";
import { a as Repeat, l as KeyRound, n as User, r as Upload, s as LogOut, t as X } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-Bhax8vrM.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cx9ojtVT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CV7ppOxn.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var AuthContext = (0, import_react.createContext)({
	session: null,
	user: null,
	loading: true,
	signOut: async () => {}
});
var PUBLIC_ROUTES = [
	"/login",
	"/register",
	"/reset-password"
];
function AuthProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
			setSession(next);
			setLoading(false);
		});
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setLoading(false);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	const signOut = async () => {
		await supabase.auth.signOut();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			session,
			user: session?.user ?? null,
			loading,
			signOut
		},
		children
	});
}
function useAuth() {
	return (0, import_react.useContext)(AuthContext);
}
function AuthGate({ children }) {
	const { session, loading } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const isPublic = PUBLIC_ROUTES.includes(location.pathname);
	const isAuthEntry = location.pathname === "/login" || location.pathname === "/register";
	(0, import_react.useEffect)(() => {
		if (loading) return;
		if (!session && !isPublic) navigate({
			to: "/login",
			replace: true
		});
		if (session && isAuthEntry) navigate({
			to: "/",
			replace: true
		});
	}, [
		loading,
		session,
		isPublic,
		isAuthEntry,
		navigate
	]);
	if (loading || !session && !isPublic || session && isAuthEntry) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 animate-spin rounded-full border-2 border-primary/30 border-t-primary" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function ProfileMenu() {
	const { user, signOut } = useAuth();
	const navigate = useNavigate();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [panel, setPanel] = (0, import_react.useState)("none");
	const [avatar, setAvatar] = (0, import_react.useState)(null);
	const [username, setUsername] = (0, import_react.useState)("");
	const wrapRef = (0, import_react.useRef)(null);
	const fileRef = (0, import_react.useRef)(null);
	const email = user?.email ?? "";
	(0, import_react.useEffect)(() => {
		const onDocClick = (e) => {
			if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onDocClick);
		return () => document.removeEventListener("mousedown", onDocClick);
	}, []);
	const loadProfile = async () => {
		if (!user) return;
		const { data } = await supabase.from("profiles").select("username, avatar_path").eq("id", user.id).maybeSingle();
		setUsername(data?.username ?? user.user_metadata?.["username"] ?? "");
		const path = data?.avatar_path;
		if (path) {
			const { data: signed } = await supabase.storage.from("avatars").createSignedUrl(path, 3600);
			if (signed?.signedUrl) {
				setAvatar(signed.signedUrl);
				return;
			}
		}
		const meta = user.user_metadata?.["avatar_url"] ?? user.user_metadata?.["picture"];
		setAvatar(meta ?? null);
	};
	(0, import_react.useEffect)(() => {
		loadProfile();
	}, [user?.id]);
	const initial = (username || email || "V").charAt(0).toUpperCase();
	const handleSignOut = async () => {
		playClick();
		setOpen(false);
		await signOut();
		navigate({
			to: "/login",
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					playClick();
					setOpen((v) => !v);
				},
				"aria-label": "Profile menu",
				className: "flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary/40 bg-black/50 text-sm font-bold text-primary transition-colors hover:border-primary",
				children: avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: avatar,
					alt: "Profile",
					className: "h-full w-full object-cover"
				}) : initial
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-0 z-50 mt-2 w-64 rounded-xl border border-primary/25 bg-[#0a0a0f]/95 p-3 backdrop-blur-xl text-left shadow-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 border-b border-primary/15 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/40 bg-black/50 text-sm font-bold text-primary",
							children: avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: avatar,
								alt: "Profile",
								className: "h-full w-full object-cover"
							}) : initial
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-bold text-foreground",
								children: username || "Player"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: email
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: "image/*",
						className: "hidden",
						onChange: async (e) => {
							const file = e.target.files?.[0];
							if (!file || !user) return;
							const ext = file.name.split(".").pop() ?? "png";
							const path = `${user.id}/avatar.${ext}`;
							const { error } = await supabase.storage.from("avatars").upload(path, file, { upsert: true });
							if (!error) {
								await supabase.from("profiles").update({ avatar_path: path }).eq("id", user.id);
								await loadProfile();
							}
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }),
						label: "Upload photo",
						onClick: () => {
							playClick();
							fileRef.current?.click();
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }),
						label: "Username & Email",
						onClick: () => {
							playClick();
							setPanel("account");
							setOpen(false);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-4 w-4" }),
						label: "Change password",
						onClick: () => {
							playClick();
							setPanel("password");
							setOpen(false);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "h-4 w-4" }),
						label: "Switch account",
						onClick: handleSignOut
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }),
						label: "Log out",
						onClick: handleSignOut
					})
				]
			}),
			panel === "account" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPanel, {
				username,
				email,
				onClose: () => setPanel("none"),
				onSaved: loadProfile
			}),
			panel === "password" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordPanel, {
				email,
				onClose: () => setPanel("none")
			})
		]
	});
}
function MenuItem({ icon, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: "mt-1 flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary",
		children: [icon, label]
	});
}
function Modal({ title, children, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rgb-card w-full max-w-sm rounded-2xl p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-black matte-rgb-text",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					"aria-label": "Close",
					className: "text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), children]
		})
	});
}
function Input({ name, label, type = "text", defaultValue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		defaultValue,
		className: "w-full rounded-lg border border-primary/20 bg-black/50 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
	})] });
}
function AccountPanel({ username, email, onClose, onSaved }) {
	const { user } = useAuth();
	const [msg, setMsg] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		if (!user) return;
		setErr("");
		setMsg("");
		setBusy(true);
		const form = new FormData(e.currentTarget);
		const nextName = String(form.get("username") ?? "").trim();
		const nextEmail = String(form.get("email") ?? "").trim();
		const { error: pErr } = await supabase.from("profiles").update({ username: nextName }).eq("id", user.id);
		if (pErr) {
			setErr(pErr.message);
			setBusy(false);
			return;
		}
		await supabase.auth.updateUser({ data: { username: nextName } });
		if (nextEmail && nextEmail !== email) {
			const { error: eErr } = await supabase.auth.updateUser({ email: nextEmail });
			if (eErr) {
				setErr(eErr.message);
				setBusy(false);
				return;
			}
			setMsg("Saved. Check your new email inbox to confirm the change.");
		} else setMsg("Saved.");
		await onSaved();
		setBusy(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		title: "ACCOUNT DETAILS",
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "mt-5 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "username",
					label: "Minecraft Username",
					defaultValue: username
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "email",
					label: "Email",
					type: "email",
					defaultValue: email
				}),
				err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-destructive",
					children: err
				}),
				msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-primary",
					children: msg
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: busy,
					className: "violet-gold-btn w-full rounded-lg px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-white disabled:opacity-60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10",
						children: busy ? "Saving…" : "Save changes"
					})
				})
			]
		})
	});
}
function PasswordPanel({ email, onClose }) {
	const [msg, setMsg] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		setErr("");
		setMsg("");
		const form = new FormData(e.currentTarget);
		const oldPass = String(form.get("old") ?? "");
		const next = String(form.get("next") ?? "");
		if (next !== String(form.get("confirm") ?? "")) {
			setErr("New passwords do not match.");
			return;
		}
		setBusy(true);
		const { error: signErr } = await supabase.auth.signInWithPassword({
			email,
			password: oldPass
		});
		if (signErr) {
			setErr("Your current password is incorrect.");
			setBusy(false);
			return;
		}
		const { error: upErr } = await supabase.auth.updateUser({ password: next });
		setBusy(false);
		if (upErr) setErr(upErr.message);
		else setMsg("Password updated.");
	};
	const forgot = async () => {
		setErr("");
		const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
		if (error) setErr(error.message);
		else setMsg("Password reset link sent — check your inbox.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		title: "CHANGE PASSWORD",
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "mt-5 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "old",
					label: "Current password",
					type: "password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "next",
					label: "New password",
					type: "password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "confirm",
					label: "Confirm new password",
					type: "password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: forgot,
					className: "block w-full text-right text-xs font-semibold text-primary",
					children: "Forgot Password?"
				}),
				err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-destructive",
					children: err
				}),
				msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-primary",
					children: msg
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: busy,
					className: "violet-gold-btn w-full rounded-lg px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-white disabled:opacity-60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10",
						children: busy ? "Updating…" : "Update password"
					})
				})
			]
		})
	});
}
var LINKS = [
	{
		to: "/ranks",
		label: "Ranks"
	},
	{
		to: "/crate-keys",
		label: "Crate Keys"
	},
	{
		to: "/coin-shop",
		label: "Coin Shop"
	}
];
var MODES = [{
	id: "survival",
	label: "Survival"
}, {
	id: "lifesteal",
	label: "Lifesteal"
}];
function NavBar() {
	const { mode, setMode } = useServerMode();
	const { session } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass border-x-0 border-t-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						onClick: playClick,
						className: "font-display text-base font-black tracking-widest sm:text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rgb-text",
							children: "VORKNYX"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: " MC"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 rounded-full border border-primary/25 bg-black/45 p-1",
						children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								playClick();
								setMode(m.id);
							},
							className: `rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-colors sm:px-4 ${mode === m.id ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-primary"}`,
							children: m.label
						}, m.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-wrap items-center gap-1 sm:gap-2",
						children: [LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							onClick: playClick,
							activeProps: { className: "!text-primary bg-primary/15 border-primary/50 shadow-[0_0_14px_rgba(255,200,90,0.18)]" },
							className: "relative rounded-full border border-transparent px-2.5 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary sm:px-3.5 sm:text-sm",
							children: l.label
						}) }, l.to)), session && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "ml-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileMenu, {})
						})]
					})
				]
			})
		})
	});
}
var pvp_bg_mp4_asset_default = {
	version: 1,
	asset_id: "a33bd7fa-cb49-4cee-b9b3-99f1a8274c86",
	project_id: "f436f5c1-e6ab-4e33-a561-e2482a746331",
	url: "/__l5e/assets-v1/a33bd7fa-cb49-4cee-b9b3-99f1a8274c86/pvp-bg.mp4",
	original_filename: "pvp-bg.mp4",
	size: 11462880,
	created_at: "2026-09-07T15:35:15Z"
};
function VideoBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 -z-10 overflow-hidden bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			className: "h-full w-full object-cover object-center",
			src: pvp_bg_mp4_asset_default.url,
			autoPlay: true,
			loop: true,
			muted: true,
			playsInline: true,
			preload: "auto"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			style: { background: "radial-gradient(circle at 50% 15%, rgba(255,215,0,0.10), transparent 55%), linear-gradient(180deg, rgba(5,6,10,0.62), rgba(5,6,10,0.5) 45%, rgba(5,6,10,0.7))" }
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Vorknyx MC Store" },
			{
				name: "description",
				content: "Official VorknyxMC store — ranks, crate keys and coins."
			},
			{
				name: "author",
				content: "VorknyxMC"
			},
			{
				property: "og:title",
				content: "Vorknyx MC Store"
			},
			{
				property: "og:description",
				content: "Official VorknyxMC store — ranks, crate keys and coins."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800;900&family=Rajdhani:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerModeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "top",
			className: "relative min-h-screen",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoBackground, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "mx-auto max-w-6xl px-4 pb-24 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "border-t border-border/60 py-8 text-center text-xs text-muted-foreground",
					children: [
						"VorknyxMC · ",
						SERVER_IP,
						":",
						SERVER_PORT,
						" · Not affiliated with Mojang or Microsoft."
					]
				})
			]
		}) }) })
	});
}
var $$splitComponentImporter$6 = () => import("./routes-B2FgkIu0.mjs");
var TITLE$6 = "Vorknyx MC Store — Ranks, Crate Keys & Coins";
var DESC$6 = "Official VorknyxMC store. Buy ranks, crate keys and in-game coins for play.vorknyxmc.fun. UPI checkout with Discord ticket confirmation.";
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: TITLE$6 },
		{
			name: "description",
			content: DESC$6
		},
		{
			property: "og:title",
			content: TITLE$6
		},
		{
			property: "og:description",
			content: DESC$6
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./coin-shop-dAuTUVvW.mjs");
var TITLE$5 = "Coin Shop — Vorknyx MC Store";
var DESC$5 = "Buy in-game coins for VorknyxMC and spend them on chat colors, pets, particle effects and cosmetics.";
var Route$5 = createFileRoute("/coin-shop")({
	head: () => ({ meta: [
		{ title: TITLE$5 },
		{
			name: "description",
			content: DESC$5
		},
		{
			property: "og:title",
			content: TITLE$5
		},
		{
			property: "og:description",
			content: DESC$5
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./crate-keys-ycOHj7qD.mjs");
var TITLE$4 = "Crate Keys — Vorknyx MC Store";
var DESC$4 = "Buy VorknyxMC crate keys: Common, Rare, Thunder, Storm, Crystal, Mythic and the ultimate VORK key.";
var Route$4 = createFileRoute("/crate-keys")({
	head: () => ({ meta: [
		{ title: TITLE$4 },
		{
			name: "description",
			content: DESC$4
		},
		{
			property: "og:title",
			content: TITLE$4
		},
		{
			property: "og:description",
			content: DESC$4
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./login-RKEj5hCo.mjs");
var TITLE$3 = "Login — Vorknyx MC Store";
var DESC$3 = "Log in to your VorknyxMC store account to buy ranks, crate keys and coins.";
var Route$3 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: TITLE$3 },
		{
			name: "description",
			content: DESC$3
		},
		{
			property: "og:title",
			content: TITLE$3
		},
		{
			property: "og:description",
			content: DESC$3
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./ranks-iRL1-A3Z.mjs");
var TITLE$2 = "Ranks — Vorknyx MC Store";
var DESC$2 = "Buy VorknyxMC ranks: Mythical, Crystal, Legendary and Immortal tiers with kits, homes and exclusive perks.";
var Route$2 = createFileRoute("/ranks")({
	head: () => ({ meta: [
		{ title: TITLE$2 },
		{
			name: "description",
			content: DESC$2
		},
		{
			property: "og:title",
			content: TITLE$2
		},
		{
			property: "og:description",
			content: DESC$2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./register-DVntgEdz.mjs");
var TITLE$1 = "Register — Vorknyx MC Store";
var DESC$1 = "Create a VorknyxMC store account to buy ranks, crate keys and coins.";
var Route$1 = createFileRoute("/register")({
	head: () => ({ meta: [
		{ title: TITLE$1 },
		{
			name: "description",
			content: DESC$1
		},
		{
			property: "og:title",
			content: TITLE$1
		},
		{
			property: "og:description",
			content: DESC$1
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./reset-password-CehasnLJ.mjs");
var TITLE = "Reset Password — Vorknyx MC Store";
var DESC = "Set a new password for your VorknyxMC store account.";
var Route = createFileRoute("/reset-password")({
	head: () => ({ meta: [
		{ title: TITLE },
		{
			name: "description",
			content: DESC
		},
		{
			property: "og:title",
			content: TITLE
		},
		{
			property: "og:description",
			content: DESC
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	CoinShopRoute: Route$5.update({
		id: "/coin-shop",
		path: "/coin-shop",
		getParentRoute: () => Route$7
	}),
	CrateKeysRoute: Route$4.update({
		id: "/crate-keys",
		path: "/crate-keys",
		getParentRoute: () => Route$7
	}),
	LoginRoute: Route$3.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$7
	}),
	RanksRoute: Route$2.update({
		id: "/ranks",
		path: "/ranks",
		getParentRoute: () => Route$7
	}),
	RegisterRoute: Route$1.update({
		id: "/register",
		path: "/register",
		getParentRoute: () => Route$7
	}),
	ResetPasswordRoute: Route.update({
		id: "/reset-password",
		path: "/reset-password",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
