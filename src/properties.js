import { colors } from './theme.js';

// Accessories
import RoundGlasses from './components/accessories/RoundGlasses.vue';
import TinyGlasses from './components/accessories/TinyGlasses.vue';
import Shades from './components/accessories/Shades.vue';
import HoopEarrings from './components/accessories/HoopEarrings.vue';

// Bodies
import Chest from './components/bodies/Chest.vue';
import BreastsFront from './components/bodies/BreastsFront.vue';
import BreastsBack from './components/bodies/BreastsBack.vue';

// Clothing
import Shirt from './components/clothing/Shirt.vue';
import DressShirt from './components/clothing/DressShirt.vue';
import VNeck from './components/clothing/VNeck.vue';
import TankTop from './components/clothing/TankTop.vue';
import DressFront from './components/clothing/DressFront.vue';
import DressBack from './components/clothing/DressBack.vue';

// Eyebrows
import NormalEyebrows from './components/eyebrows/Normal.vue';
import LeftLoweredEyebrows from './components/eyebrows/LeftLowered.vue';
import SeriousEyebrows from './components/eyebrows/Serious.vue';
import AngryEyebrows from './components/eyebrows/Angry.vue';
import ConcernedEyebrows from './components/eyebrows/Concerned.vue';

// Eyes
import NormalEyes from './components/eyes/Normal.vue';
import LeftTwitchEyes from './components/eyes/LeftTwitch.vue';
import HappyEyes from './components/eyes/Happy.vue';
import ContentEyes from './components/eyes/Content.vue';
import SquintEyes from './components/eyes/Squint.vue';
import SimpleEyes from './components/eyes/Simple.vue';
import DizzyEyes from './components/eyes/Dizzy.vue';
import WinkEyes from './components/eyes/Wink.vue';
import HeartEyes from './components/eyes/Heart.vue';
import CyborgEyes from './components/eyes/Cyborg.vue';

// Facial hair
import StubbleBeard from './components/facialHair/Stubble.vue';
import MediumBeard from './components/facialHair/MediumBeard.vue';

// Graphics
import RedwoodGraphic from './components/graphics/Redwood.vue';
import GatsbyGraphic from './components/graphics/Gatsby.vue';
import VueGraphic from './components/graphics/Vue.vue';
import ReactGraphic from './components/graphics/React.vue';
import GraphQLGraphic from './components/graphics/GraphQL.vue';
import RainbowGraphic from './components/graphics/Rainbow.vue';
import DonutGraphic from './components/graphics/Donut.vue';

// Hair
import LongHairFront from './components/hair/LongHairFront.vue';
import LongHairBack from './components/hair/LongHairBack.vue';
import BunHair from './components/hair/BunHair.vue';
import ShortHair from './components/hair/ShortHair.vue';
import PixieCut from './components/hair/PixieCut.vue';
import BaldingHair from './components/hair/BaldingHair.vue';
import BuzzCut from './components/hair/BuzzCut.vue';
import AfroFront from './components/hair/AfroFront.vue';
import AfroBack from './components/hair/AfroBack.vue';
import BobCutFront from './components/hair/BobCutFront.vue';
import BobCutBack from './components/hair/BobCutBack.vue';

// Hat
import BeanieFront from './components/hats/BeanieFront.vue';
import BeanieBack from './components/hats/BeanieBack.vue';
import PartyHat from './components/hats/PartyHat.vue';
import Turban from './components/hats/Turban.vue';

// Mouth
import Grin from './components/mouths/Grin.vue';
import SadMouth from './components/mouths/SadMouth.vue';
import SmileOpen from './components/mouths/SmileOpen.vue';
import Lips from './components/mouths/Lips.vue';
import OpenMouth from './components/mouths/OpenMouth.vue';
import SeriousMouth from './components/mouths/SeriousMouth.vue';
import Tongue from './components/mouths/Tongue.vue';
import PiercedTongue from './components/mouths/PiercedTongue.vue';

// Shape
import Circle from './components/shapes/Circle.vue';
import Square from './components/shapes/Square.vue';
import Squircle from './components/shapes/Squircle.vue';

export const properties = {
	accessory: {
		default: 'none',
		is_color: false,
		map: {
			none: null,
			roundGlasses: RoundGlasses,
			tinyGlasses: TinyGlasses,
			shades: Shades,
			hoopEarrings: HoopEarrings,
		},
	},
	body: {
		default: 'chest',
		is_color: false,
		map: {
			chest: { Front: null, Back: Chest },
			breasts: { Front: BreastsFront, Back: BreastsBack },
		},
	},
	clothing: {
		default: 'naked',
		is_color: false,
		map: {
			naked: { Front: null, Back: null },
			shirt: { Front: null, Back: Shirt },
			dressShirt: { Front: null, Back: DressShirt },
			vneck: { Front: null, Back: VNeck },
			tankTop: { Front: null, Back: TankTop },
			dress: { Front: DressFront, Back: DressBack },
		},
	},
	clothingColor: {
		is_color: true,
		map: colors.clothing,
	},
	eyebrows: {
		default: 'none',
		is_color: false,
		map: {
			none: null,
			raised: NormalEyebrows,
			leftLowered: LeftLoweredEyebrows,
			serious: SeriousEyebrows,
			angry: AngryEyebrows,
			concerned: ConcernedEyebrows,
		},
	},
	eyes: {
		default: 'normal',
		is_color: false,
		map: {
			normal: NormalEyes,
			leftTwitch: LeftTwitchEyes,
			happy: HappyEyes,
			content: ContentEyes,
			squint: SquintEyes,
			simple: SimpleEyes,
			dizzy: DizzyEyes,
			wink: WinkEyes,
			heart: HeartEyes,
			cyborg: CyborgEyes,
		},
	},
	facialHair: {
		default: 'none',
		is_color: false,
		map: {
			none: null,
			stubble: StubbleBeard,
			mediumBeard: MediumBeard,
		},
	},
	facialHairColor: {
		is_color: true,
		map: colors.hair,
	},
	graphic: {
		default: 'none',
		is_color: false,
		map: {
			none: null,
			redwood: RedwoodGraphic,
			gatsby: GatsbyGraphic,
			vue: VueGraphic,
			react: ReactGraphic,
			graphQL: GraphQLGraphic,
			rainbow: RainbowGraphic,
			donut: DonutGraphic,
		},
	},
	hair: {
		default: 'none',
		is_color: false,
		map: {
			none: { Front: null, Back: null },
			long: { Front: LongHairFront, Back: LongHairBack },
			bun: { Front: BunHair, Back: null },
			short: { Front: ShortHair, Back: null },
			pixie: { Front: PixieCut, Back: null },
			balding: { Front: BaldingHair, Back: null },
			buzz: { Front: BuzzCut, Back: null },
			afro: { Front: AfroFront, Back: AfroBack },
			bob: { Front: BobCutFront, Back: BobCutBack },
		},
	},
	hairColor: {
		is_color: true,
		map: colors.hair,
	},
	hat: {
		default: 'none',
		is_color: false,
		map: {
			none: { Front: null, Back: null },
			beanie: { Front: BeanieFront, Back: BeanieBack },
			partyHat: { Front: PartyHat, Back: null },
			turban: { Front: Turban, Back: null },
		},
	},
	hatColor: {
		is_color: true,
		map: colors.clothing,
	},
	lashes: {
		default: 'false',
		is_color: false,
		map: {
			true: true,
			false: false
		},
	},
	lipColor: {
		is_color: true,
		map: colors.lips,
	},
	mouth: {
		default: 'grin',
		is_color: false,
		map: {
			grin: Grin,
			sad: SadMouth,
			openSmile: SmileOpen,
			lips: Lips,
			open: OpenMouth,
			serious: SeriousMouth,
			tongue: Tongue,
			piercedTongue: PiercedTongue,
		},
	},
	shape: {
		default: 'none',
		is_color: false,
		map: {
			none: null,
			circle: Circle,
			square: Square,
			squircle: Squircle,
		},
	},
	shapeColor: {
		is_color: true,
		map: colors.shape,
	},
	skinTone: {
		is_color: true,
		map: colors.skin,
	},
}