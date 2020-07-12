<template>
	<path
		d="M243.89,489.13c5.64,15.83,20.9,24.06,33.4,26.94,13.06-20.24,56.65-28.92,89.37-17.44,27.8,5-10.81-25.57-72.47-9-2.31.85-14.56,2.95-30.28-9.19-2.19-1.69,4.68,13.71,12.5,20C265.06,500.21,263.2,500.22,243.89,489.13Z"
		:fill="colors.outline"
		fillRule="evenodd"
	/>
</template>

<script>
import { colors } from '../../theme.js';

export default {
	name: 'LeftLash',
	data() {
		return {
			colors,
		}
	}
}
</script>