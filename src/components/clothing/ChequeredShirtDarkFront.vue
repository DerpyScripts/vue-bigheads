<template>
	<g v-if="hasBreasts">
		<path
			d="M407 943.809L380.434 831.734C367.11 854.533 367.208 872.681 367.944 882.999C368.727 889.486 370.834 920.267 407 943.809Z"
			:fill="colors.clothing.black.base"
		/>
		<path
			d="M593.051 943.809L619.585 831.699C629.709 848.064 634.378 869.819 631.285 889.008C629.333 901.121 621.865 925.38 593.051 943.809Z"
			:fill="colors.clothing.black.base"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M380.5 831.982H380.297C380.127 832.282 379.968 832.563 379.816 832.831C378.117 835.831 377.43 837.044 375.17 841.98H382.025V851.991H371.35C370.193 855.237 369.983 857.11 368.867 861.982H382V881.979H367.827C367.827 881.979 368.434 887.676 369.329 892.002H381.984V901.992H372.164C372.164 901.992 374.079 907.314 376.729 911.999H381.984V920.453C382.462 921.131 387.83 928.219 391.999 931.969V911.999H399.47L397.09 901.992H391.999V891.998L394.745 891.999L392.344 881.979H391.999V880.511L380.5 831.982ZM401.999 922.696V932.028H392.057C392.643 932.83 400.4 939.611 406.995 943.804L401.999 922.696Z"
			:fill="color.base"
			fill-opacity="0.37"
		/>
		<path
			d="M619.516 831.984H619.766C621.245 834.372 624.022 839.561 624.981 841.941L617.152 841.977L619.516 831.984Z"
			:fill="color.base"
			fill-opacity="0.37"
		/>
		<path
			d="M614.781 851.992H628.734C629.806 855.029 631.108 861.065 631.191 861.979H612.418L614.781 851.992Z"
			:fill="color.base"
			fill-opacity="0.37"
		/>
		<path
			d="M600.578 912.004H602.028V932.032H595.848L593.498 941.947H595.793C600.734 938.443 605.701 934.735 612.043 927.927V911.991H623.354C625.681 907.765 627.341 903.552 627.88 901.973H612.043V891.981H630.719C631.235 890.029 631.898 885.655 632.267 881.963H612.043V863.531L600.578 912.004Z"
			:fill="color.base"
			fill-opacity="0.37"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M392 912.003H381.985V901.996H392V912.003ZM392 892.002V881.983H382.001L381.985 892.006L392 892.002ZM382.001 861.986H387.675L385.268 851.997L382.026 851.995L382.001 861.986Z"
			:fill="color.base"
			fill-opacity="0.37"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M402 940.363V932.032H404.219L406.633 941.958H404.255L402 940.363Z"
			:fill="color.base"
			fill-opacity="0.37"
		/>
		<path
			d="M607.696 882.023H612.036V892.013H605.301L607.696 882.023Z"
			:fill="color.base"
			fill-opacity="0.37"
		/>
		<path
			d="M602.005 937.374V932.012H608.078C606.578 933.43 603.263 936.487 602.005 937.374Z"
			:fill="color.base"
			fill-opacity="0.37"
		/>
		<path
			d="M602.942 902.005H612.033V912.008H602.012V905.765L602.942 902.005Z"
			:fill="color.base"
			fill-opacity="0.37"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M370.844 898H396.148L395.648 896H370.262C370.392 896.467 370.691 897.52 370.844 898Z"
			:fill="color.base"
			fill-opacity="0.17"
		/>
		<path
			d="M604.363 896.002L603.9 898.003H629.21C629.398 897.344 629.777 896 629.777 896L604.363 896.002Z"
			:fill="color.base"
			fill-opacity="0.17"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M396 935.598V897.402L398 905.812V937.271L396 935.598Z"
			:fill="color.base"
			fill-opacity="0.17"
		/>
		<path
			d="M596.021 931.351V941.845L598.016 940.422V922.88L596.021 931.351Z"
			:fill="color.base"
			fill-opacity="0.17"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M383.8 846H373.453L372.688 848H384.286L383.8 846Z"
			:fill="color.base"
			fill-opacity="0.17"
		/>
		<path
			d="M626.608 846L627.375 848H615.719L616.206 846H626.608Z"
			:fill="color.base"
			fill-opacity="0.17"
		/>
	</g>
</template>

<script>
import { colors } from "../../theme.js";

export default {
	name: "ChequeredShirtDarkFront",
	props: ["skin", "color", "hasBreasts"],
	data() {
		return {
			colors,
		};
	},
};
</script>
