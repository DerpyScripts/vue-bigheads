<template>
	<g v-if="scale == 1">
		<path
			d="M331 453C414.833 434 604.1 408.5 690.5 458.5C660.5 410.5 574.3 363.5 491.5 363.5C428.5 363.5 342.2 408.6 331 453Z"
			fill="black"
			fill-opacity="0.15"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M477.5 215.5C236 253 190 432.5 226 597C242.632 673 298.98 696.047 320.5 755.5C350 837 413.5 843.5 480.5 843.5C555 843.5 681.4 776 687 814C697.8 811.2 699 765.5 665 755.5C715 767.311 740.395 707.5 769 639.5C826 504 791.5 215.5 477.5 215.5ZM254.5 565C254.5 441.4 430 415.5 540.5 395.5C635.5 416.5 748.5 469.4 748.5 565C748.5 631.5 633.4 722 489 744C301.4 704 254.5 611.5 254.5 565Z"
			:fill="color.base"
			:stroke="colors.outline"
			stroke-width="12"
		/>
		<path
			d="M258 535.5C246.5 454 259.3 381 318.5 315C278 387 265 433.5 258 535.5Z"
			fill="black"
			fill-opacity="0.2"
		/>
		<path
			d="M666 760L668 752C644.667 745 590.6 736.4 561 758C581.333 752 630.8 744 666 760Z"
			fill="black"
			fill-opacity="0.2"
		/>
		<path
			d="M345 748.5C380.5 839.5 479.5 831 611.5 790.5C380.5 828.5 372.333 771.5 345 748.5Z"
			fill="black"
			fill-opacity="0.2"
		/>
		<path
			d="M332 705.5C376.5 758.5 370 801.5 528.5 791.5C431 786.5 403.5 778.5 332 705.5Z"
			fill="white"
			fill-opacity="0.2"
		/>
		<path
			d="M302.5 418C338.5 286.5 440.5 259 563.5 290C446.7 283.6 363 315.881 302.5 418Z"
			fill="white"
			fill-opacity="0.2"
		/>
	</g>
</template>

<script>
import { colors } from "../../theme.js";

export default {
	name: "Hijab",
	props: ["color", "scale"],
	data() {
		return {
			colors,
		};
	},
};
</script>