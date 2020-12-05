import { createStore } from "vuex";
import { contactsModule } from "./contacts.store.js";
import { messagesModule } from "./messages.store.js";

export default createStore ({
    namespace: false,
    modules: {
        contactsModule: contactsModule,
        messagesModule: messagesModule,
    },

    mutations: {
        setContacts: (state, payload) => state.contacts = payload.data
    },
})
