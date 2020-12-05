import axios from "axios";

export const contactsModule = {
    namespace: false,

    state() {
        return {
            contacts: []
        }
    },

    mutations: {
        setContacts: (state, payload) => state.contacts = payload.data,
    },

    actions: {
        async setContacts(context) {
            try {
                const response = await axios.get("https://io-labs.fr/messenger/contacts.json");
                context.commit('setContacts', response);
                console.log('response: ', response);
            }
            catch (error) {
                console.log('error: ', error);
            }
        }
    }
};
