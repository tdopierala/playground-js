<template>
    <div class="mt-3 mb-3">
        <h1 class="alert alert-secondary text-center">Contact List</h1>
        <contact-form @add-contact="addContact"></contact-form>
        <contact-card
            v-for="contact in contacts"
            v-bind:key="contact.id"
            v-bind:id="contact.id"
            v-bind:name="contact.name"
            v-bind:phone="contact.phone"
            v-bind:email="contact.email"
            v-bind:adress="contact.adress"
            v-bind:image="contact.image"
            v-bind:favorite="contact.isFavorite"
            v-on:toggle-favorite="toggleFavoriteStatus"
            v-on:delete-contact="deleteContact"
        ></contact-card>
    </div>
</template>

<script>
import ContactCard from './components/ContactCard.vue';
import ContactForm from './components/ContactForm.vue';

export default {
    name: 'App',
    components: {
        ContactCard,
        ContactForm,
    },
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'Adam Smith',
                    phone: '963 852 741',
                    email: 'adam.smith@gmail.com',
                    adress: 'Boston',
                    image: 'https://randomuser.me/api/portraits/men/10.jpg',
                    isFavorite: true,
                },
                {
                    id: 2,
                    name: 'Vanessa Ward',
                    phone: '789 123 852',
                    email: 'vanessa.ward@gmail.com',
                    adress: 'New York',
                    image: 'https://randomuser.me/api/portraits/women/11.jpg',
                    isFavorite: false,
                },
                {
                    id: 3,
                    name: 'Ronald Blair',
                    phone: '741 456 987',
                    email: 'ronald.blair@gmail.com',
                    adress: 'Miami',
                    image: 'https://randomuser.me/api/portraits/men/12.jpg',
                    isFavorite: false,
                },
                {
                    id: 4,
                    name: 'Miranda Jones',
                    phone: '753 951 258',
                    email: 'miranda.jones@gmail.com',
                    adress: 'Huston',
                    image: 'https://randomuser.me/api/portraits/women/13.jpg',
                    isFavorite: false,
                },
                {
                    id: 5,
                    name: 'Ken Spider',
                    phone: '951 369 158',
                    email: 'ken.spider@gmail.com',
                    adress: 'Los Angeles',
                    image: 'https://randomuser.me/api/portraits/men/14.jpg',
                    isFavorite: false,
                },
            ],
        };
    },
    methods: {
        toggleFavoriteStatus(contactId) {
            const foundContact = this.contacts.find((contact) => contact.id === contactId);

            if (foundContact !== undefined) foundContact.isFavorite = !foundContact.isFavorite;
        },
        addContact(newContact) {
            this.contacts.push({
                id: new Date().toISOString(),
                name: newContact.name,
                phone: newContact.phone,
                email: newContact.email,
                adress: newContact.adress,
                image: '',
                isFavorite: false,
            });
        },
        deleteContact(contactId) {
            this.contacts = this.contacts.filter((contact) => contact.id !== contactId);
        },
    },
};
</script>
