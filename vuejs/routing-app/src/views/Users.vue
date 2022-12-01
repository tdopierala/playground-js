<template>
    <div class="card">
        <div class="card-header">
            List of users
        </div>
        <div class="card-body">
            <div class="btn-group mb-3" role="group" aria-label="Basic example">
                <router-link v-for="group in groups" :key="group" :to="'/users/' + group" class="btn btn-sm btn-dark">{{ group }}</router-link>
            </div>
            <!-- <select class="form-select" aria-label="Default select example">
                <option selected>Select group</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select> -->
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Location</th>
                        <th>Member</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.gender }}</td>
                        <td>{{ user.location }}</td>
                        <td>{{ user.member.join(', ') }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import _users from '../storage/users.js';

export default {
    name: 'Users',
    data() {
        return {
            users: [],
            groups: _users.groups,
        };
    },
    computed: {},
    watch: {
        $route(route) {
            this.loadUsers(route);
        },
    },
    methods: {
        loadUsers(route) {
            this.users = _users.users;
            if (route.params.groupId) {
                const members = this.users.filter((user) => user.member.includes(route.params.groupId));
                this.users = members;
                console.log(this.users);
            }
        },
    },
    created() {
        this.users = _users.users;
        this.loadUsers(this.$route);
    },
    mounted() {},
};
</script>
