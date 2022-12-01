<template>
    <div>
        <top-menu></top-menu>
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <router-view />
    </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue';

export default {
    name: 'App',
    components: {
        TopMenu,
    }
}
</script>
