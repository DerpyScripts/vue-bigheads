import { colors } from './theme.js';
import { properties } from './properties.js';
import BigHead from './components/BigHead.vue';

const install = (Vue, options) => {
	Vue.component('BigHead', BigHead);
	
	if (typeof options == "undefined") var options = {};
	Vue.prototype.$bigHeadsExtras = () => {
		return options;
	}
}

export default {
	install
}

export { colors, properties, BigHead }