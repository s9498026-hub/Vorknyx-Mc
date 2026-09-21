import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as CRATE_KEYS } from "./store-D7PqTiqZ.mjs";
import { t as ShopPage } from "./ShopPage-CXtNNagg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/crate-keys-ycOHj7qD.js
var import_jsx_runtime = require_jsx_runtime();
function CrateKeysPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopPage, {
		eyebrow: "Loot Crates",
		title: "CRATE KEYS",
		subtitle: "Seven crate tiers, from Common rolls to the server's ultimate VORK key.",
		products: CRATE_KEYS
	});
}
//#endregion
export { CrateKeysPage as component };
