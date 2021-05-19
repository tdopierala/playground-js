<template>
    <base-card>
        <ul class="list-group">
            <resource-item v-for="resource in resources" :key="resource.id" :resource="resource"></resource-item>
        </ul>
    </base-card>
</template>

<script>
import ResourceItem from './ResourceItem.vue'

export default {
    name: 'StoredResources',
    components: {
        ResourceItem,
    },
    inject: ['resources'],
}
</script>