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

> Please note that the `mask` and `circleColor` props from the original library have been replaced with `shape` and `shapeColor` respectively, to allow for more mask shapes. A new prop `facialHairColor` has been added to allow you to customise facial hair color seperately from the normal hair color.

Some possible values for the props above have been changed, as outlined below:

### Props
Leaving a prop empty will result in a random value being chosen.
| Property           | Possible values            |
| ------------------ | -------------------------- |
| accessory          | `'none'`, `'faceMask'`, `'hoopEarrings'`, `'roundGlasses'`, `'shades'`, `'tinyGlasses'` |
| body               | `'chest'`, `'breasts'` |
| clothing           | `'naked'`, `'chequeredShirt'`, `'chequeredShirtDark'`, `'shirt'`, `'denimJacket'`, `'dressShirt'`, `'hoodie'`, `'vneck'`, `'tankTop'`, `'dress'` |
| clothingColor      | `'white'`, `'gray'`, `'black'`, `'red'`, `'lightRed'`, `'orange'`, `'lightOrange'`, `'yellow'`, `'lightYellow'`, `'green'`, `'lightGreen'`, `'turqoise'`, `'lightTurqoise'`, `'blue'`, `'lightBlue'`, `'pink'`, `'lightPink'`, `'purple'`, `'lighPurple'` |
| eyebrows           | `'none'`, `'angry'`, `'concerned'`, `'leftLowered'`, `'raised'`, `'serious'` |
| eyes               | `'normal'`, `'content'`, `'crazy'`, `'cute'`, `'cyborg'`, `'dizzy'`, `'dollars'`, `'eyePatch'`, `'eyePatch2'`, `'happy'`, `'hearts'`, `'leftTwitch'`, `'squint'`, `'simple'`, `'stars'`, `'wink'` |
| facialHair         | `'none'`, `'goatee'`, `'mediumBeard'`, `'stubble'` |
| facialHairColor    | `'white'`, `'silver'`, `'blonde'`, `'brown'`, `'black'`, `'red'`, `'lightRed'`, `'orange'`, `'lightOrange'`, `'green'`, `'lightGreen'`, `'turqoise'`, `'lightTurqoise'`, `'blue'`, `'lightBlue'`, `'pink'`, `'lightPink'`, `'purple'`, `'lighPurple'` |
| graphic            | `'none'`, `'donut'`, `'gatsby'`, `'graphQL'`, `'rainbow'`, `'react'`, `'redwood'`, `'vue'` |
| hair               | `'none'`, `'afro'`, `'balding'`, `'bob'`, `'bun'`, `'buzz'`, `'long'`, `'mohawk'`, `'pixie'`, `'short'` |
| hairColor          | `'white'`, `'silver'`, `'blonde'`, `'brown'`, `'black'`, `'red'`, `'lightRed'`, `'orange'`, `'lightOrange'`, `'green'`, `'lightGreen'`, `'turqoise'`, `'lightTurqoise'`, `'blue'`, `'lightBlue'`, `'pink'`, `'lightPink'`, `'purple'`, `'lighPurple'` |
| hat                | `'none`', `'beanie'`, `'hijab'`, `'partyHat'`, `'turban'` |
| hatColor           | `'white'`, `'gray'`, `'black'`, `'red'`, `'lightRed'`, `'orange'`, `'lightOrange'`, `'yellow'`, `'lightYellow'`, `'green'`, `'lightGreen'`, `'turqoise'`, `'lightTurqoise'`, `'blue'`, `'lightBlue'`, `'pink'`, `'lightPink'`, `'purple'`, `'lighPurple'` |
| lashes             | `'true'`, `'false'` |
| lipColor           | `'red'`, `'lightRed'`, `'green'`, `'lightGreen'`, `'turqoise'`, `'lightTurqoise'`, `'blue'`,`'lightBlue'`, `'pink'`, `'lightPink'`, `'purple'`, `'lightPurple'` |
| mouth              | `'grin'`, `'lips'`, `'open'`, `'openSmile'`, `'piercedTongue'`, `'sad'`, `'serious'`, `'tongue'`, `'vomitingRainbow'` |
| shape              | `'none'`, `'circle'`, `'square'`, `'squircle'` |
| shapeColor         | `'red'`, `'orange'`, `'yellow'`, `'green'`, `'turqoise'`, `'blue'`, `'pink'`, `'purple'` |
| skinTone           | `'light'`, `'yellow'`, `'brown'`, `'dark'`, `'red'`, `'black'` |

### Custom colors
All color related props (i.e. clothingColor, facialHairColor, hairColor, hatColor, lipColor, shapeColor) support custom values. Instead of passing one of the color names above, pass an object with a `base` and `shadow` color.

Only HEX colors (3 or 6 characters, with the hash symbol before it) are supported - you cannot use RGB or HSL.

The `shapeColor` props only uses the base color, so the shadow color can be omitted.

#### Example:
```vue
<BigHead
  ...
  :clothingColor="{ base: '#5CCBF1', shadow: '#49B5CD' }"
  ...
/>
```


## Custom designs
Some props (accessory, eyebrows, eyes, facialHair, graphic, mouth, skinTone) can be extended with your own designs and colors.

### Illustrations
All of the above props, except `skinTone`, are expandable by passing an object containing Vue single file components when loading the plugin.

Here's an example of a custom illustration component:

```vue
<template>
  <g>
    <path
      d="[...]"
      :fill="color.base"
      :stroke="colors.outline"
      stroke-width="12"
    />
    <path
      d="[...]"
      :fill="color.shadow"
    />
  </g>
</template>

<script>
import { colors } from 'vue-bigheads';

export default {
  name: 'MyGraphic',
  props: ['color', 'skin'],
  data() {
    return {
      colors,
    }
  },
}
</script>
```

The props passed to each component vary depending on what prop you attach it to:
| Parameter             | Props                      |
| --------------------- | -------------------------- |
| accessory             | `skin`                     |
| eyebrows              | `skin`                     |
| eyes                  | `skin`, `withLashes`       |
| facialHair            | `skin`, `color`            |
| graphic               |                            |
| mouth                 | `skin`, `lipColor`         |

`skin`, `color` and `lipColor` are instances of the color object, which have a `base` and `shadow` property.

`withLashes` is a boolean that reflects the value of the `lashes` prop.

### Colors
The `skinTone` prop is expandable by passing an object containing color classes (see 'Custom colors' section).

### Example config
```javascript
import Vue from "vue";
import VueBigHeads from "vue-bigheads";
import MyCustomEyes from "./components/MyCustomEyes.vue";

Vue.use(VueBigHeads, {
  eyes: {
    mycustomdesign: MyCustomEyes
  },
  skinTone: {
    purple: {
      base: "#B256A1",
      shadow: "#9C4490",
    }
  }
});
```
### Use in your app
```vue
<BigHead
  ...
  eyes="mycustomdesign"
  skinTone="purple"
/>
```