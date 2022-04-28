import { getVendor} from './vendor.js';
import { getProductSlider } from './modules/product-slider.js';
import { getScrollTop } from './modules/scroll-top.js';
import { getMore} from './modules/more.js';
import { getMoreText} from './modules/more-text.js';
import { getHeader } from './modules/header.js';
import { getPopup } from './modules/popup.js';
import { getRegistration } from './modules/registration.js';
import { getStars } from './modules/stars.js';
import { getReviewsResult } from './modules/reviews-result.js';
import { getCategoriesList } from './modules/categories-list.js';
import { getBuyOptions }from './modules/buy-options.js';
import { getTabs }from './modules/tabs.js';
import { getSelect }from './modules/select.js';
import { getRangeFilter }from './modules/range-filter.js';
import { getCatalogControl } from './modules/catalog-control.js';


document.addEventListener('DOMContentLoaded', () => {
	getVendor();
	getPopup();
	getProductSlider();
	getScrollTop();
	getMore();
	getMoreText();
	getHeader();
	getRegistration();
	getStars();
	getReviewsResult();
	getCategoriesList();
	getBuyOptions();
	getTabs();
	getSelect();
	getRangeFilter();
	getCatalogControl();
});