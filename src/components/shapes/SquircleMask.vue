<template>
	<mask :id="maskId" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="963">
		<path d="M0 0H1000V630.154H832.44C832.44 922.701 792.547 962.594 500 962.594C207.453 962.594 167.56 922.701 167.56 630.154H0V0Z" fill="white" />
    </mask>
</template>

<script>
export default {
	name: 'SquircleMask',
	props: ['maskId']
}
</script>