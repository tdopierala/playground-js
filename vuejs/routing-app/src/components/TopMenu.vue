<template>
    <nav class="navbar mt-3 mb-3">
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
                <!-- <a class="nav-link active" aria-current="page" href="#">Active</a> -->
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/users">Users</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/link2">Link</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
                <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
            </li>
        </ul>
    </nav>
</template>
