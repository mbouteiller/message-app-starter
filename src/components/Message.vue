<template>
    <div class="message">
        <img :src=message.sender.profileImage alt="profile picture">
        <span>
            <p class="name">{{message.sender.name}}</p>
            <p class="content">{{message.content}}</p>
        </span>
        <span>
            <p>{{formatDate(message.date)}}</p>
            <p class="readIcon" v-if="message.read === true"><i class="fas fa-check-double"></i></p>
            <p class="notReadIcon" v-else>
                <i class="fas fa-dot-circle"></i>
                <button class="buttonRead" v-on:click="changeRead(message.id)"><i class="far fa-envelope-open"></i></button>
            </p>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            message: Object,
        },

        methods: {
            formatDate(messageDate) {
                let date = new Date(messageDate);
                let display = date.getHours() + ":";
                if (date.getMinutes().toString().length <= 1) {
                    display += "0";
                }
                display += date.getMinutes();

                return display;
            },

            changeRead(id) {
                this.$emit("read",id);
            },
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

    .message {
        display: flex;
        border-bottom: lightgray solid 1px;
    }

    .name {
        padding-top: 5px;
        text-align: left;
        font-weight: bold;
    }

    .readIcon {
        margin-left: 10px;
        color: forestgreen;
    }

    .notReadIcon {
        margin-left: 10px;
        color: darkred;
    }

    .buttonRead {
        margin: 10px;
    }
</style>
