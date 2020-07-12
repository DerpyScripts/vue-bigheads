import BigHead from './components/BigHead.vue'

const install = Vue => {
	Vue.component('BigHead', BigHead)
}

export default {
	install
}

export { BigHead }