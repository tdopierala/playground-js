<template>
    <div class="alert alert-dark text-center mt-3">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'TheHeader',
    props: ['title'],
}
</script>