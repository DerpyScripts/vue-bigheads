<template>
	<g :style="{ 'transform-origin': 'center', 'transform': 'scale(' + scale + ')' }">
		<path
			d="M225.35,498c183.42,77.95,371.14,79.06,555.94,0,17.53-7.5,17.43-139.87,0-133.81-180.47,62.83-371.33,63.5-555.94,0C203.39,356.6,205.53,489.53,225.35,498Z"
			:fill="colors.outline"
			:stroke="colors.outline"
			stroke-miterlimit="10"
			stroke-width="12px"
		/>
    </g>
</template>

<script>
import { colors } from '../../theme.js';

export default {
	name: 'BeanieBack',
	props: ['color', 'scale'],
	data() {
		return {
			colors,
		}
	}
}
</script>