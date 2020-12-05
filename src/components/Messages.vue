<template>
    <div class="messages">
        <h1 class="title">Chats</h1>
        <Message v-for="currentMessage in messages" v-bind:key="currentMessage.id" v-bind:message="currentMessage" v-on:read="markAsRead"/>
    </div>
</template>

<script>
    import Message from "./Message";
    export default {
        name: "Messages",

        components: {
            Message,
        },

        created() {
            this.$store.dispatch('setMessages');
        },

        methods: {
            markAsRead(id) {
                this.messages.find(message => message.id === id).read = true;
            },
        },

        computed: {
            messages() {
                return this.$store.getters.sortMessagesByDate;
            },
        }


    }
</script>

<style scoped>
    .title {
        padding-left: 20px;
    }

    .messages {
        /*border: solid blue;*/
        text-align: left;
        display: inline-block;
    }
</style>
