<template>
    <div class="mt-3">
        <div class="card mb-3">
            <div class="card-body">
                <div class="block" :class="{ animate: animatedBlock }"></div>
                <button @click="animateBlock" class="btn btn-info">Animate</button>
            </div>
        </div>

        <base-modal @close="hideDialog" :open="dialogIsVisible">
            <p>This is a test dialog!</p>
            <button class="btn btn-sm btn-primary" @click="hideDialog">Close it!</button>
        </base-modal>

        <div class="card mb-3">
            <div class="card-body">
                <button @click="showDialog" class="btn btn-info">Show Dialog</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {
            dialogIsVisible: false,
            animatedBlock: false,
        };
    },
    methods: {
        animateBlock() {
            this.animatedBlock = true;
        },
        showDialog() {
            this.dialogIsVisible = true;
        },
        hideDialog() {
            this.dialogIsVisible = false;
        },
    },
};
</script>

<style>
.block {
    width: 8rem;
    height: 8rem;
    background-color: turquoise;
    margin-bottom: 2rem;
}
.animate {
    transform: translateX(+50px);
}
</style>
