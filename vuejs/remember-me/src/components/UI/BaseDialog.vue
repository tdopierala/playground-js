<template>
    <teleport to="body">
        <div class="dialog-shadow" @click="$emit('close')"></div>
        <dialog open>
            <div class="card bg-light">
                <div class="card-header">
                    <slot name="header">
                        <h2>{{ title }}</h2>
                    </slot>
                </div>
                <div class="card-body">
                    <slot></slot>
                </div>
                <div class="card-footer">
                    <slot name="actions">
                        <base-button @click="$emit('close')">Close</base-button>
                    </slot>
                </div>
            </div>
        </dialog>
    </teleport>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            reqired: false,
        },
    },
    emits: ['close'],
};
</script>

<style scoped>
div.dialog-shadow {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
}
dialog {
    position: fixed;
    z-index: 100;
    overflow: hidden;
    top: 20vh;
    left: 10%;
    width: 80%;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
}
</style>
