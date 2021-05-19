<template>
    <button :class="['btn', size ? 'btn-' + size : '', modeClass]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: ['mode', 'size', 'color'],
    computed: {
        modeClass() {
            if (this.color) {
                let out = 'btn-';
                if (this.mode) out += this.mode + '-';
                return out + this.color;
            } else {
                return '';
            }
        },
    },
};
</script>
