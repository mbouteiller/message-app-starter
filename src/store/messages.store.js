import axios from "axios";

export const messagesModule = {
    namespace: false,

    state() {
        return {
            messages: []
        }
    },

    mutations: {
        setMessages: (state, payload) => state.messages = payload.data,
    },

    getters: {
        numberOfUnreadMessages: (state) => {
            let messagesClone = state.messages;
            messagesClone = messagesClone.filter(function (message) {
                return message.read === false;
            });

            return messagesClone.length;
        },

        sortMessagesByDate: (state) => {
            let messagesClone = state.messages;
            return messagesClone.sort((a,b) => new Date(b.date) - new Date(a.date));
        },
    },

    actions: {
        async setMessages(context) {
            try {
                const response = await axios.get("https://io-labs.fr/messenger/messages.json");
                context.commit('setMessages', response);
                console.log('response: ', response);
            }
            catch (error) {
                console.log('error: ', error);
            }
        },
    }
};
