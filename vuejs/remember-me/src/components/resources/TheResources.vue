<template>
    <div>
        <nav class="nav nav-tabs">
            <a :class="{ 'nav-link': true, active: selectedTab === 'stored-resources' }" href="" @click.prevent="setSelectedTab('stored-resources')"
                >Stored resources</a
            >
            <a :class="{ 'nav-link': true, active: selectedTab === 'add-resource' }" href="" @click.prevent="setSelectedTab('add-resource')"
                >Add resource</a
            >
        </nav>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    name: 'TheResources',
    components: {
        StoredResources,
        AddResource,
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            resourcesData: [
                {
                    id: 'official-guide',
                    title: 'Official guide',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org/',
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.com/',
                },
            ],
        };
    },
    provide() {
        return {
            resources: this.resourcesData,
            addResource: this.addResource,
            removeResource: this.removeResource,
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url,
            };

            this.resourcesData.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId) {
            //this.resourcesData = this.resourcesData.filter((res) => res.id !== resId);
            const resIndex = this.resourcesData.findIndex((res) => res.id === resId);
            this.resourcesData.splice(resIndex, 1);
        },
    },
};
</script>
