<template>
    <div class="mt-3">
        <div class="card mb-3">
            <div class="card-body">
                <div class="form-group mb-3">
                    <input type="text" class="form-control" v-model.trim="name" placeholder="Name" />
                </div>

                <div class="form-group mb-3">
                    <div v-for="index in 5" :key="index" class="form-check form-check-inline">
                        <input type="radio" name="rating" :id="'rating' + index" :value="index" v-model="rating" class="form-check-input" />
                        <label :for="'rating' + index" class="form-check-label">{{ index }}</label>
                    </div>
                </div>

                <div class="form-group">
                    <button class="btn btn-secondary m-1 mb-0 mt-0" @click="sendData">Send data</button>
                    <button class="btn btn-secondary m-1 mb-0 mt-0" @click="getData">Get data</button>
                </div>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <div v-if="isLoading" class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div v-else-if="!isLoading && error" class="alert alert-danger">
                    {{ error }}
                </div>
                <div v-else-if="!isLoading && (!results || results.length === 0)" class="alert alert-secondary">
                    No stored experiences found. Start adding some survey results first.
                </div>
                <ul v-else class="list-group">
                    <li v-for="result in results" :key="result.id" class="list-group-item">
                        <div class="row">
                            <div class="col-6">
                                Name: <strong>{{ result.name }}</strong>
                            </div>
                            <div class="col-6 text-primary">
                                <!--Rate:({{ result.rating }}) -->
                                <span v-for="index in parseInt(result.rating)" :key="index"><i class="bi bi-star-fill"></i></span>
                                <span v-for="index in parseInt(5 - result.rating)" :key="index"><i class="bi bi-star"></i></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
const apiurl = 'https://omi-demo-85ce8-default-rtdb.europe-west1.firebasedatabase.app/';
const store = 'serveys';

export default {
    name: 'App',
    components: {},
    data() {
        return {
            name: '',
            rating: null,
            results: [],
            isLoading: false,
            error: null,
        };
    },
    methods: {
        sendData() {
            if (this.name !== '' && this.rating !== 0) {
                console.log({ name: this.name, rating: this.rating });

                fetch(apiurl + store + '.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.name,
                        rating: this.rating,
                    }),
                }).then((res) => {
                    console.log(res);
                    if (res.ok) {
                        this.getData();
                        this.name = '';
                        this.rating = null;
                    }
                });
            }
        },
        getData() {
            this.isLoading = true;
            fetch(apiurl + store + '.json')
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error(res.statusText);
                    }
                })
                .then((data) => {
                    this.isLoading = false;
                    this.error = null;
                    const results = [];
                    for (const id in data) {
                        results.push({
                            id: id,
                            name: data[id].name,
                            rating: data[id].rating,
                        });
                    }
                    this.results = results;
                })
                .catch((error) => {
                    console.log(error);
                    this.isLoading = false;
                    this.error = 'Failed to fetch data - please try again later.';
                });
        },
    },
    mounted() {
        this.getData();
    },
};
</script>
