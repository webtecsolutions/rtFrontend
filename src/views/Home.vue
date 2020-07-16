<template>
    <div>
        <landing-banner/>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script>
    // @ is an alias to /src
    import LandingBanner from '@/components/LandingBanner.vue';

    export default {
        metaInfo: {
            title: 'Record Time',
            titleTemplate: 'Record Time → %s',
            meta: [
                { name: 'name', content: '' },
                { name: 'description', content: '' }
            ]
        },
        components: {
            LandingBanner
        },
        data() {
            return {
            }
        }
    }
</script>
