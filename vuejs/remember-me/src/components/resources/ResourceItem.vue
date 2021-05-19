<template>
    <li class="list-group-item">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-2">{{ resource.title }}</h5>
            <base-button size="sm" mode="outline" color="dark" @click="removeResource(resource.id)">
                <i class="bi bi-trash-fill"></i>
            </base-button>
        </div>
        <p>{{ resource.description }}</p>
        <p><a :href="resource.link">{{ resource.link }}</a></p>
        <!-- <base-button color="primary" size="sm">OK</base-button> -->
    </li>
</template>

<script>
export default {
    name: 'ResourceItem',
    props: {
        resource: {
            title: {
                type: String,
                require: true,
            },
            description: {
                type: Number,
                require: true,
            },
        },
    },
    inject: ['removeResource'],
};
</script>
