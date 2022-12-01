<template>
    <div>
        <the-header :title="title"></the-header>
        <the-resources></the-resources>
    </div>
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';
import TheResources from './components/resources/TheResources.vue';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheResources,
    },
    data() {
        return {
            title: 'Remember Me',
        };
    },
};
</script>
