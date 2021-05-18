<template>
    <div class="card mb-3">
        <div class="card-body">
            <div v-if="!formVisible" class="d-grid gap-2">
                <button @click.prevent="showForm" class="btn btn-sm btn-secondary">Add new contact</button>
            </div>
            <form v-show="formVisible" @submit.prevent="submitForm">
                <div class="form-group mb-1">
                    <input v-model="newContact.name" type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="form-group mb-1">
                    <input v-model="newContact.phone" type="tel" class="form-control" placeholder="Phone" />
                </div>
                <div class="form-group mb-1">
                    <input v-model="newContact.email" type="email" class="form-control" placeholder="Email" />
                </div>
                <div class="form-group mb-1">
                    <input v-model="newContact.adress" type="text" class="form-control" placeholder="Adress" />
                </div>
                <div class="form-group mb-1 d-grid gap-2">
                    <button class="btn btn-sm btn-secondary">Add contact</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    emit: ['add-contact'],
    data() {
        return {
            formVisible: false,
            newContact: { name: '', phone: '', email: '', adress: '' },
        };
    },
    methods: {
        submitForm() {
            if(this.newContact.name !== '' && this.newContact.email !== '') {
                this.$emit('add-contact', this.newContact);
                this.newContact.name = '';
                this.newContact.phone = '';
                this.newContact.email = '';
                this.newContact.adress = '';
                this.showForm();
            }
        },
        showForm() {
            this.formVisible = !this.formVisible;
        },
    },
};
</script>
