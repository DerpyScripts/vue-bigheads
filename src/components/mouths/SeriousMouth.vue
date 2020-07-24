<template>
	<line
		x1="446.66"
		y1="606.02"
		x2="542.53"
		y2="606.02"
		fill="none"
		:stroke="colors.outline"
		stroke-linecap="round"
		stroke-miterlimit="10"
		stroke-width="12px"
	/>
</template>

<script>
import { colors } from '../../theme.js';

export default {
	name: 'SeriousMouth',
	props: ['lipColor'],
	$hasLips: false,
	data() {
		return {
			colors
		}
	}
}
</script>