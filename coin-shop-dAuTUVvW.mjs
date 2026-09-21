import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as COIN_USES, t as COIN_PACKS } from "./store-D7PqTiqZ.mjs";
import { t as ShopPage } from "./ShopPage-CXtNNagg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coin-shop-dAuTUVvW.js
var import_jsx_runtime = require_jsx_runtime();
function CoinShopPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopPage, {
		eyebrow: "In-Game Currency",
		title: "COIN SHOP",
		subtitle: "Spend coins in-game on Custom Chat Colors, Exclusive Pets, Particle Effects and Cosmetic Unlocks.",
		products: COIN_PACKS,
		footnote: COIN_USES
	});
}
//#endregion
export { CoinShopPage as component };
