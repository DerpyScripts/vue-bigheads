Easily generate avatars for your projects with Big Heads.

This is the Vue version of the [original Big Heads library](https://github.com/RobertBroersma/bigheads) by [@RobertBroersma](https://github.com/RobertBroersma). [https://bigheads.io](https://bigheads.io)

## Installation

```shell
yarn add vue-bigheads
```

or

```shell
npm install vue-bigheads --save
```

then, in your app you can import globally:

### Import globally

```javascript
import Vue from "vue";
import VueBigHeads from "vue-bigheads";

Vue.use(VueBigHeads);
```

or import locally:

```javascript
import { BigHead } from "vue-bigheads";

export default {
	components: {
		BigHead,
	},
};
```

## Usage

```vue
<BigHead
  accessory="shades"
  body="chest"
  clothing="tankTop"
  clothingColor="black"
  eyebrows="angry"
  eyes="wink"
  facialHair="mediumBeard"
  facialHairColor="black"
  graphic="vue"
  hair="short"
  hairColor="black"
  hat="none"
  hatColor="green"
  lashes="false"
  lipColor="purple"
  mouth="open"
  shape="circle"
  shapeColor="blue"
  skinTone="brown"
/>
```

> Please note that the `'mask'` and `'circleColor'` properties from the original library have been replaced with `'shape'` and `'shapeColor'` respectively, to allow for more mask shapes. A new property `'facialHairColor'` has been added to allow you to customise facial hair color seperately from the normal hair color.

Some possible values for the properties above have been changed, as outlined below:

### Parameters
| Property           | Possible values            |
| ------------------ | -------------------------- |
| accessory          | `'none'`, `'roundGlasses'`, `'tinyGlasses'`, `'shades'` |
| body               | `'chest'`, `'breasts'` |
| clothing           | `'naked'`, `'shirt'`, `'dressShirt'`, `'vneck'`, `'tankTop'`, `'dress'` |
| clothingColor      | `'white'`, `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'turqoise'`, `'blue'`, `'pink'`, `'purple'` |
| eyebrows           | `'none'`, `'raised'`, `'leftLowered'`, `'serious'`, `'angry'`, `'concerned'` |
| eyes               | `'normal'`, `'leftTwitch'`, `'happy'`, `'content'`, `'squint'`, `'simple'`, `'dizzy'`, `'wink'`, `'heart'` |
| facialHair         | `'none'`, `'stubble'`, `'mediumBeard'` |
| facialHairColor    | `'white'`, `'blonde'`, `'brown'`, `'black'`, `'red'`, `'orange'`, `'green'`, `'blue'`, `'pink'`, `'purple'` |
| graphic            | `'none'`, `'redwood'`, `'gatsby'`, `'vue'`, `'react'`, `'graphQL'`, `'rainbow'` |
| hair               | `'none'`, `'long'`, `'bun'`, `'short'`, `'pixie'`, `'balding'`, `'buzz'`, `'afro'`, `'bob'` |
| hairColor          | `'white'`, `'blonde'`, `'brown'`, `'black'`, `'red'`, `'orange'`, `'green'`, `'blue'`, `'pink'`, `'purple' |
| hat                | `'none`', `'beanie'`, `'turban'` |
| hatColor           | `'white'`, `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'turqoise'`, `'blue'`, `'pink'`, `'purple'` |
| lashes             | `'true'`, `'false'` |
| lipColor           | `'red'`, `'green'`, `'turqoise'`, `'pink'`, `'purple'` |
| mouth              | `'grin'`, `'sad'`, `'openSmile'`, `'lips'`, `'open'`, `'serious'`, `'tongue'` |
| shape              | `'none'`, `'circle'`, `'square'`, `'squircle'` |
| shapeColor         | `'red'`, `'orange'`, `'yellow'`, `'green'`, `'blue'`, `'purple'` |
| skinTone           | `'light'`, `'yellow'`, `'brown'`, `'dark'`, `'red'`, `'black'` |

### Custom colors
All color related parameters (i.e. clothingColor, facialHairColor, hairColor, hatColor, lipColor, shapeColor) support custom values. Instead of passing one of the color names above, pass an object with a `'base'` and `'shadow'` color.

Only HEX colors (3 or 6 characters) are supported - you cannot use RGB or HSL.

The shapeColor property only uses the base color, so the shadow color can be omitted.

#### Example:
```vue
<BigHead
  ...
  :clothingColor="{ base: '#5CCBF1', shadow: '#49B5CD' }"
  ...
/>
```