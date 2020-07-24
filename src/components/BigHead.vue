<template>
	<Base :values="values" />
</template>

<script>
import { colors } from '../theme.js';
import { properties } from '../properties.js';
import Base from './Base.vue';

import Circle from './shapes/Circle.vue';
import Square from './shapes/Square.vue';
import Squircle from './shapes/Squircle.vue';

import CircleMask from './shapes/CircleMask.vue';
import SquareMask from './shapes/SquareMask.vue';
import SquircleMask from './shapes/SquircleMask.vue';

export default {
	name: 'BigHead',
	props: ['accessory', 'body', 'clothing', 'clothingColor', 'eyebrows', 'eyes', 'facialHair', 'facialHairColor', 'graphic', 'hair', 'hairColor', 'hat', 'hatColor', 'lashes', 'lipColor', 'mouth', 'shape', 'shapeColor', 'skinTone'],
	components: {
		Base
	},
	data() {
		return {
			props: ['accessory', 'body', 'clothing', 'clothingColor', 'eyebrows', 'eyes', 'facialHair', 'facialHairColor', 'graphic', 'hair', 'hairColor', 'hat', 'hatColor', 'lashes', 'lipColor', 'mouth', 'shape', 'shapeColor', 'skinTone'],
		}
	},
	computed: {
		properties() {
			var extended = properties;
			var extras =this.$bigHeadsExtras();
			// var props = ['accessory', 'clothingColor', 'eyebrows', 'eyes', 'facialHair', 'facialHairColor', 'graphic', 'hair', 'hairColor', 'mouth', 'skinTone'];
			var props = this.props;
			
			for (var i = 0; i < props.length; i++) {
				var extras_map = extras[props[i]];
				
				for (var prop in extras_map) {
					if (extras_map.hasOwnProperty(prop)) {
						extended[props[i]].map[prop] = extras_map[prop];
					}
				}
			}
			
			return extended;
		},
		values() {
			var shape = this.validateProperty(this.shape, 'shape');
			var mask = null;
			if (shape === Circle) mask = CircleMask;
			if (shape === Square) mask = SquareMask;
			if (shape === Squircle) mask = SquircleMask;
			
			return {
				accessory: this.validateProperty(this.accessory, 'accessory'),
				body: this.validateProperty(this.body, 'body'),
				clothing: this.validateProperty(this.clothing, 'clothing'),
				clothingColor: this.validateProperty(this.clothingColor, 'clothingColor'),
				eyebrows: this.validateProperty(this.eyebrows, 'eyebrows'),
				eyes: this.validateProperty(this.eyes, 'eyes'),
				facialHair: this.validateProperty(this.facialHair, 'facialHair'),
				facialHairColor: this.validateProperty(this.facialHairColor, 'facialHairColor'),
				graphic: this.validateProperty(this.graphic, 'graphic'),
				hair: this.validateProperty(this.hair, 'hair'),
				hairColor: this.validateProperty(this.hairColor, 'hairColor'),
				hat: this.validateProperty(this.hat, 'hat'),
				hatColor: this.validateProperty(this.hatColor, 'hatColor'),
				lashes: this.validateProperty(this.lashes, 'lashes'),
				lipColor: this.validateProperty(this.lipColor, 'lipColor'),
				mouth: this.validateProperty(this.mouth, 'mouth'),
				shape: shape,
				mask: mask,
				shapeColor: this.validateProperty(this.shapeColor, 'shapeColor'),
				skinTone: this.validateProperty(this.skinTone, 'skinTone'),
			}
		}
	},
	methods: {
		throwError(message) {
			console.error(`Vue BigHeads: ${message}`);
		},
		chooseRandomValue(obj) {
			var keys = Object.keys(obj);
    		return obj[keys[ keys.length * Math.random() << 0]];
		},
		validateProperty(value, prop) {
			if (typeof value == 'undefined') {
				//if (!properties[prop].default) {
					return this.chooseRandomValue(this.properties[prop].map);
				//}
				
				//value = properties[prop].default;
			}
			
			if (this.properties[prop].is_color == true) return this.validateColor(value, prop);
			
			if (!Object.keys(this.properties[prop].map).includes(value)) {
				this.throwError(`Invalid value set for ${prop} - unknown value`);
				return this.chooseRandomValue(this.properties[prop].map);
			}
			
			return this.properties[prop].map[value];
		},
		validateColor(color, prop) {
			if (typeof color == 'string') {
				if (!Object.keys(this.properties[prop].map).includes(color)) {
					this.throwError(`Invalid value set for ${prop} - unknown color`);
					return this.chooseRandomValue(this.properties[prop].map);
				}
				
				return this.properties[prop].map[color];
			} else if (typeof color == 'object') {
				if (!color.base || !this.validateHex(color.base)) {
					this.throwError(`Invalid value set for ${prop} - base color must be a valid hex code`);
					return this.chooseRandomValue(this.properties[prop].map);
				}
				
				if (prop != 'shapeColor' && (!color.shadow || !this.validateHex(color.shadow))) {
					this.throwError(`Invalid value set for ${prop} - shadow color must be a valid hex code`);
					return this.chooseRandomValue(this.properties[prop].map);
				}
				
				return color;
			} else {
				this.throwError(`Invalid value set for ${prop} - must be string or object`);
				return this.chooseRandomValue(this.properties[prop].map);
			}
		},
		validateHex(hex) {
			return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
		}
	}
}
</script>