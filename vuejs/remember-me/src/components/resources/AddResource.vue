<template>
    <div>
        <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
            <template #default>
                <p>Unfortunately, at least one input value is invalid.</p>
                <p>Please check all inputs and make sure you enter at leat a few characters into each input field.</p>
            </template>
            <template v-slot:actions>
                <base-button color="secondary" @click="confirmError">Okay</base-button>
            </template>
        </base-dialog>
        <base-card>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" name="title" id="title" class="form-control" ref="titleInput" />
                </div>

                <div class="mb-3">
                    <label for="link" class="form-label">Link</label>
                    <input type="url" name="link" id="link" class="form-control" ref="linkInput" />
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea name="description" id="description" class="form-control" ref="descInput"></textarea>
                </div>

                <div class="mb-3">
                    <base-button type="submit" color="secondary">Add resource</base-button>
                </div>
            </form>
        </base-card>
    </div>
</template>

<script>
export default {
    name: 'AddResource',
    inject: ['addResource'],
    data() {
        return {
            inputIsInvalid: false,
        };
    },
    methods: {
        submitForm() {
            const inputTitle = this.$refs.titleInput.value;
            const inputUrl = this.$refs.linkInput.value;
            const inputDescription = this.$refs.descInput.value;

            if (inputTitle.trim() === '' || inputUrl.trim() === '' || inputDescription.trim() === '') {
                this.inputIsInvalid = true;
                return;
            }

            this.addResource(inputTitle, inputDescription, inputUrl);
        },
        confirmError() {
            this.inputIsInvalid = false;
        },
    },
};
</script>
