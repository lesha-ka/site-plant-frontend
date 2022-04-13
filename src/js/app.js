import { getVendor} from './vendor.js';
import { getProductSlider } from './modules/product-slider.js';
import { getScrollTop } from './modules/scroll-top.js';
import { getMoreOffer} from './modules/more-offer.js';
import { getHeader } from './modules/header.js';
import { getPopup } from './modules/popup.js';
import { getRegistration } from './modules/registration.js';

document.addEventListener('DOMContentLoaded', () => {
	getVendor();
	getPopup();
	getProductSlider();
	getScrollTop();
	getMoreOffer();
	getHeader();
	getRegistration();
});