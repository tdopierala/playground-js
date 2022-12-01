<template>
    <div class="card mb-3">
        <!-- <div class="card-header text-center">Contact name</div> -->
        <h2 class="card-header text-light d-flex justify-content-between align-items-center">
            {{ name }}
            <div class="card-actions">
                <!-- <button @click="toogleFavorite" class="btn btn-outline-light"> -->
                <!-- <span @click="toogleFavorite" :class="{ 'favorite-contact': true, active: favorite }"> -->
                <a href="" @click.prevent="toogleFavorite" :class="{ 'favorite-contact': true, active: favorite }">
                    <i class="bi bi-heart-fill"></i>
                </a>

                <!-- </span> -->
                <!-- </button> -->
                <!-- <button class="btn btn-outline-light"> -->
                <a href="" @click.prevent="$emit('delete-contact', id)"><i class="bi bi-trash-fill"></i></a>
                <!-- </button> -->
            </div>
        </h2>
        <div class="card-body text-center">
            <div class="d-grid gap-2">
                <button @click="toogleDetails" class="btn btn-sm btn-dark">{{ detailsShow ? 'Hide' : 'Show' }} details</button>
            </div>

            <ul v-if="detailsShow" class="list-group mt-3">
                <li class="list-group-item list-group-item-dark">{{ phone }}</li>
                <li class="list-group-item list-group-item-dark">{{ email }}</li>
                <li class="list-group-item list-group-item-dark">{{ adress }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactCard',
    props: {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        adress: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
        favorite: {
            type: String,
            required: false,
        },
    },
    emits: {
        'toggle-favorite': function(id) {
            if (id) {
                return true;
            } else {
                console.warn('Id is missing!');
                return false;
            }
        },
    },
    data() {
        return {
            detailsShow: false,
        };
    },
    methods: {
        toogleDetails() {
            this.detailsShow = !this.detailsShow;
        },
        toogleFavorite() {
            //this.isFavorite = !this.isFavorite;
            this.$emit('toggle-favorite', this.id);
        },
    },
};
</script>

<style scoped>
.favorite-contact {
    cursor: pointer;
    color: white;
}
.favorite-contact.active {
    color: red;
}

.card-actions a {
    padding: 0 5px;
    color: #fdf6e3;
}
.card-actions a.active {
    color: red;
}
</style>
