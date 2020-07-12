<template>
	<mask :id="maskId" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="963">
		<path d="M1000 0H0V718.31H167.551V962.594H832.441V718.31H1000V0Z" fill="white" />
    </mask>
</template>

<script>
export default {
	name: 'SquareMask',
	props: ['maskId']
}
</script>