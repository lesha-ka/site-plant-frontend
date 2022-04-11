import { getVendor} from './vendor.js';
import { getProductSlider } from './modules/product-slider.js';
import { getScrollTop } from './modules/scroll-top.js';
import { getMoreOffer} from './modules/more-offer.js';
import { getHeader } from './modules/header.js';



document.addEventListener('DOMContentLoaded', () => {
	getVendor();
	getProductSlider();
	getScrollTop();
	getMoreOffer();
	getHeader();
});