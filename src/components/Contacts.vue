<template>
    <div class="contacts">
        <h1 class="title">Contacts</h1>
        <Contact v-for="currentContact in contacts" v-bind:key="currentContact.id" v-bind:contact="currentContact"/>
    </div>
</template>

<script>
    import Contact from "./Contact";
    export default {
        name: "Contacts",

        components: {
            Contact,
        },

        created() {
            this.$store.dispatch('setContacts');
        },

        computed: {
            contacts() {
                return this.$store.state.contacts;
            },
        }
    }

</script>

<style scoped>

</style>
