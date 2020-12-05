<template>
    <div class="menu">
        <router-link to="/messages">
            <i class="far fa-comment-dots fa-4x"></i><span class="unreadMessages">{{ count }}</span>
        </router-link>
        <router-link to="/contacts">
            <i class="far fa-address-book fa-4x"></i><span class="contacts"></span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Menu",

        computed: {
            count() {
                return this.$store.getters.numberOfUnreadMessages;
            }
        }
    }

</script>

<style scoped>
    .menu {
        margin-top: 20px;
    }

    .unreadMessages {
        margin-left: 10px;
        margin-right: 50px;
        font-size: 70px;
    }

</style>
