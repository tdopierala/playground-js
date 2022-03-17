<template>
    <div>
        <div class="backdrop" @click="$emit('close')" v-if="open"></div>
        <transition name="modal">
            <div class="card base-modal" v-if="open">
                <div class="card-body">
                    <dialog open v-if="open">
                        <slot></slot>
                    </dialog>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ['open'],
    emits: ['close'],
};
</script>

<style scoped>
.base-modal {
    position: fixed;
    top: 10vh;
    width: 70%;
    left: 15%;
    margin: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    z-index: 100;
    color: white;
}

.base-modal * {
    color: white;
}

dialog {
    margin: 0;
    padding: 0;
    background-color: none;
    border: none;
    position: relative;
}

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.75);
}

/* .modal-enter-from {} */

.modal-enter-active {
    animation: modal 0.3s ease-out;
}

/* .modal-enter-to {} */

.modal-leave-active {
    animation: modal 0.3s ease-in reverse;
}

@keyframes modal {
    from {
        opacity: 0;
        transform: translateY(-50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
</style>
