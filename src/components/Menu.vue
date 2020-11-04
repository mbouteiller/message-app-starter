<template>
    <div class="menu">
        <i class="far fa-comment-dots fa-4x"></i><span class="unreadMessages">3</span>

    </div>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            unreadMessages: Number,
        }
    }
</script>

<style scoped>
    .menu {
        margin-top: 20px;
    }

    .unreadMessages {
        margin-left: 10px;
        font-size: 70px;
    }

</style>
