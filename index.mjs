globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-21T06:21:19.803Z",
		"size": 20373,
		"path": "../client/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-21T06:21:19.803Z",
		"size": 160,
		"path": "../client/robots.txt"
	},
	"/assets/AuthForm-fv6uqNsh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7dc-iacVc6iWqEbRTzwkQJZ5mRqTBlM\"",
		"mtime": "2026-09-21T06:21:18.997Z",
		"size": 2012,
		"path": "../client/assets/AuthForm-fv6uqNsh.js"
	},
	"/assets/ShopPage-Bk0nazJh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1814-5LUz89DMzXzbk4TMa3fxjgXgtNc\"",
		"mtime": "2026-09-21T06:21:18.997Z",
		"size": 6164,
		"path": "../client/assets/ShopPage-Bk0nazJh.js"
	},
	"/assets/click-sound-BOnFSD7j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2391-a5TQZDV9/OpEUSj3tXVR42OvuYU\"",
		"mtime": "2026-09-21T06:21:18.997Z",
		"size": 9105,
		"path": "../client/assets/click-sound-BOnFSD7j.js"
	},
	"/assets/coin-shop-Bkwi28RX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"171-8ePqg+a1jCgqjwxVWV/zDe+gtMI\"",
		"mtime": "2026-09-21T06:21:18.997Z",
		"size": 369,
		"path": "../client/assets/coin-shop-Bkwi28RX.js"
	},
	"/assets/crate-keys-CgYPwZAY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"146-0ex0s91Q6CgUtDFIYDRWJLuWrsw\"",
		"mtime": "2026-09-21T06:21:18.997Z",
		"size": 326,
		"path": "../client/assets/crate-keys-CgYPwZAY.js"
	},
	"/assets/link-4Uf5RArv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6865-f2XWs96B2Wpg94bJ1o+bx3tdVNI\"",
		"mtime": "2026-09-21T06:21:18.997Z",
		"size": 26725,
		"path": "../client/assets/link-4Uf5RArv.js"
	},
	"/assets/login-5O0sHP9Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"70d-N4NN52bCZGUG+uv7QiLz3IzqNe0\"",
		"mtime": "2026-09-21T06:21:18.997Z",
		"size": 1805,
		"path": "../client/assets/login-5O0sHP9Q.js"
	},
	"/assets/lovable-DBSZgHt_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d15-HNIvmBsgBOHhwZWbsAa9bZM+CZk\"",
		"mtime": "2026-09-21T06:21:18.997Z",
		"size": 3349,
		"path": "../client/assets/lovable-DBSZgHt_.js"
	},
	"/assets/message-circle-CQ2tGYoR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12d-v4EQVZV/wOYyoyAkZTHIOjhx+dM\"",
		"mtime": "2026-09-21T06:21:18.997Z",
		"size": 301,
		"path": "../client/assets/message-circle-CQ2tGYoR.js"
	},
	"/assets/ranks-B2mo3kj9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"159-6wGX0uYUcxr32qg42zwApiHZd6w\"",
		"mtime": "2026-09-21T06:21:18.998Z",
		"size": 345,
		"path": "../client/assets/ranks-B2mo3kj9.js"
	},
	"/assets/register-DAMayWuN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d3-hgXv279dmqzIeW7DYDDQYVr2kzU\"",
		"mtime": "2026-09-21T06:21:18.998Z",
		"size": 1747,
		"path": "../client/assets/register-DAMayWuN.js"
	},
	"/assets/reset-password-BQuYz-yQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a5-SJXgfET570ZpAVgZf4K4pe2J9yk\"",
		"mtime": "2026-09-21T06:21:18.998Z",
		"size": 1189,
		"path": "../client/assets/reset-password-BQuYz-yQ.js"
	},
	"/assets/routes-CdHcg2gJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"160d-6Wx7DabZUv1eh3KOn5XW/4fVGq8\"",
		"mtime": "2026-09-21T06:21:18.998Z",
		"size": 5645,
		"path": "../client/assets/routes-CdHcg2gJ.js"
	},
	"/assets/styles-CV7ppOxn.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"149ca-XuLXLADMTvwJ28XIycycJtTYM6s\"",
		"mtime": "2026-09-21T06:21:18.998Z",
		"size": 84426,
		"path": "../client/assets/styles-CV7ppOxn.css"
	},
	"/assets/useNavigate-WdRGuF7M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bf-6QoFy26NqJ++FY2ZzlOTHADruXE\"",
		"mtime": "2026-09-21T06:21:18.998Z",
		"size": 191,
		"path": "../client/assets/useNavigate-WdRGuF7M.js"
	},
	"/assets/index-TSh0LdzG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86968-SnYVYxPMJ+jF804ftCQcYgxhAks\"",
		"mtime": "2026-09-21T06:21:18.997Z",
		"size": 551272,
		"path": "../client/assets/index-TSh0LdzG.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_j21Qvj = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_j21Qvj
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
