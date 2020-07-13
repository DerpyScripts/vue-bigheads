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

> Please note that the `mask` and `circleColor` properties from the original library have been replaced with `shape` and `shapeColor` respectively, to allow for more mask shapes. A new property `facialHairColor` has been added to allow you to customise facial hair color seperately from the normal hair color.

Some possible values for the properties above have been changed, as outlined below:

### Parameters
Leaving a parameter empty will result in a random value being chosen.
| Property           | Possible values            |
| ------------------ | -------------------------- |
| accessory          | `'none'`, `'faceMask'`, `'hoopEarrings'`, `'roundGlasses'`, `'shades'`, `'tinyGlasses'` |
| body               | `'chest'`, `'breasts'` |
| clothing           | `'naked'`, `'shirt'`, `'dressShirt'`, `'vneck'`, `'tankTop'`, `'dress'` |
| clothingColor      | `'white'`, `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'turqoise'`, `'blue'`, `'pink'`, `'purple'` |
| eyebrows           | `'none'`, `'angry'`, `'concerned'`, `'leftLowered'`, `'raised'`, `'serious'` |
| eyes               | `'normal'`, `'content'`, `'cyborg'`, `'dizzy'`, `'happy'`, `'heart'`, `'leftTwitch'`, `'squint'`, `'simple'`, `'wink'` |
| facialHair         | `'none'`, `'goatee'`, `'mediumBeard'`, `'stubble'` |
| facialHairColor    | `'white'`, `'blonde'`, `'brown'`, `'black'`, `'red'`, `'orange'`, `'green'`, `'blue'`, `'pink'`, `'purple'` |
| graphic            | `'none'`, `'donut'`, `'gatsby'`, `'graphQL'`, `'rainbow'`, `'react'`, `'redwood'`, `'vue'` |
| hair               | `'none'`, `'afro'`, `'balding'`, `'bob'`, `'bun'`, `'buzz'`, `'long'`, `'mohawk'`, `'pixie'`, `'short'` |
| hairColor          | `'white'`, `'blonde'`, `'brown'`, `'black'`, `'red'`, `'orange'`, `'green'`, `'blue'`, `'pink'`, `'purple' |
| hat                | `'none`', `'beanie'`, `'partyHate'`, `'turban'` |
| hatColor           | `'white'`, `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'turqoise'`, `'blue'`, `'pink'`, `'purple'` |
| lashes             | `'true'`, `'false'` |
| lipColor           | `'red'`, `'green'`, `'turqoise'`, `'pink'`, `'purple'` |
| mouth              | `'grin'`, `'lips'`, `'open'`, `'openSmile'`, `'piercedTongue'`, `'sad'`, `'serious'`, `'tongue'` |
| shape              | `'none'`, `'circle'`, `'square'`, `'squircle'` |
| shapeColor         | `'red'`, `'orange'`, `'yellow'`, `'green'`, `'blue'`, `'purple'` |
| skinTone           | `'light'`, `'yellow'`, `'brown'`, `'dark'`, `'red'`, `'black'` |

### Custom colors
All color related parameters (i.e. clothingColor, facialHairColor, hairColor, hatColor, lipColor, shapeColor) support custom values. Instead of passing one of the color names above, pass an object with a `base` and `shadow` color.

Only HEX colors (3 or 6 characters) are supported - you cannot use RGB or HSL.

The `shapeColor` property only uses the base color, so the shadow color can be omitted.

#### Example:
```vue
<BigHead
  ...
  :clothingColor="{ base: '#5CCBF1', shadow: '#49B5CD' }"
  ...
/>
```


## Custom designs
Some parameters (accessory, eyebrows, eyes, facialHair, graphic, mouth, skinTone) can be extended with your own designs and colors.

#### Illustrations
All of the above parameters, except `skinTone`, are expandable by passing an object containing Vue single file components when loading the plugin.

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

The props passed to each component vary depending on what parameter you attach it to:
| Parameter             | Props                      |
| --------------------- | -------------------------- |
| accessory             | `skin`                     |
| eyebrows              | `skin`                     |
| eyes                  | `skin`, `withLashes`       |
| facialHair            | `skin`, `color`            |
| graphic               |                            |
| mouth                 | `skin`, `lipColor`         |

`skin`, `color` and `lipColor` are instances of the color object, which have a `base` and `shadow` property.

`withLashes` is a boolean that reflects the value of the `lashes` parameter.

#### Colors
The `skinTone` parameter is expandable by passing an object containing color classes (see 'Custom colors' section).

#### Example config
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