import { getVendor} from './vendor.js';
import { getProductSlider } from './modules/product-slider.js';
import { getScrollTop } from './modules/scroll-top.js';
import { getMoreText} from './modules/more-text.js';
import { getHeader } from './modules/header.js';



document.addEventListener('DOMContentLoaded', () => {
	getVendor();
	getProductSlider();
	getScrollTop();
	getMoreText();
	getHeader();
});