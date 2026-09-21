import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as RANKS } from "./store-D7PqTiqZ.mjs";
import { t as ShopPage } from "./ShopPage-CXtNNagg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ranks-iRL1-A3Z.js
var import_jsx_runtime = require_jsx_runtime();
function RanksPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopPage, {
		eyebrow: "Rank Packages",
		title: "RANKS",
		subtitle: "Ten tiers of power. Every package unlocks exclusive /kit access, perks and server privileges.",
		products: RANKS
	});
}
//#endregion
export { RanksPage as component };
