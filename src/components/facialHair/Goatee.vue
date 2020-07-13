<template>
	<g>
		<path
			d="M463 737L499.5 808L536 737H463Z"
			:fill="color.base"
			:stroke="colors.outline"
			stroke-width="12"
			stroke-linejoin="round"
		/>
	</g>
</template>

<script>
import { colors } from '../../theme.js';

export default {
	name: 'Goatee',
	props: ['color'],
	data() {
		return {
			colors
		}
	}
}
</script>