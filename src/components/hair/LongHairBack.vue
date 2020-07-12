<template>
	<g>
		<path
			d="M501.71,209.52c-166.14,0-300.83,134.68-300.83,300.83V816.78c0,166.14,134.69,300.83,300.83,300.83S802.54,982.92,802.54,816.78V510.35C802.54,344.2,667.85,209.52,501.71,209.52Z"
			:fill="color.base"
			:stroke="colors.outline"
			stroke-miterlimit="10"
			stroke-width="12px"
		/>
	</g>
</template>

<script>
import { colors } from '../../theme.js';

export default {
	name: 'LongHairBack',
	props: ['skin', 'color', 'hasHat'],
	$hatScale: 1.12,
	data() {
		return {
			colors,
		}
	}
}
</script>