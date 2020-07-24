<template>
	<g>
		<line
			x1="375.88"
			y1="603.9"
			x2="306.24"
			y2="534.26"
			fill="none"
			:stroke="colors.outline"
			stroke-linecap="round"
			stroke-miterlimit="10"
			stroke-width="16px"
		/>
		<line
			x1="306.24"
			y1="603.9"
			x2="375.88"
			y2="534.26"
			fill="none"
			:stroke="colors.outline"
			stroke-linecap="round"
			stroke-miterlimit="10"
			stroke-width="16px"
		/>
		<line
			x1="695.99"
			y1="603.9"
			x2="626.34"
			y2="534.26"
			fill="none"
			:stroke="colors.outline"
			stroke-linecap="round"
			stroke-miterlimit="10"
			stroke-width="16px"
		/>
		<line
			x1="626.34"
			y1="603.9"
			x2="695.99"
			y2="534.26"
			fill="none"
			:stroke="colors.outline"
			stroke-linecap="round"
			stroke-miterlimit="10"
			stroke-width="16px"
		/>
	</g>
</template>

<script>
import { colors } from '../../theme.js';

export default {
	name: 'DizzyEyes',
	props: ['withLashes'],
	$hasLashes: false,
	data() {
		return {
			colors,
		}
	}
}
</script>