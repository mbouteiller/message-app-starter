<template>
    <div class="contact">
        <img :src=contact.profileImage alt="profile picture">
        <span>
            <p class="name">{{contact.name}}</p>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Contact.vue",

        props: {
            contact: Object,
        },
    }
</script>

<style scoped>
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: solid black 5px;
        margin: 10px;
    }

    .contact {
        display: flex;
        border-bottom: lightgray solid 1px;
    }

    .name {
        padding-top: 5px;
        text-align: left;
        font-weight: bold;
    }
</style>
