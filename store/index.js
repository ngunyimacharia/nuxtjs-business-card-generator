export const state = () => ({
    logo: 'business-card-generator/logo-uploads/image_ftlr6k',
    details: {
        full_name: 'Jack Dorsey',
        position: 'Founder',
        address: '1355 Market St. Ste. 900 San Francisco, CA 94103',
        phone_number: '1-415-222-9670',
        email: 'jack@twitter.com',
        website: 'twitter.com'
    },
    customization: {
        accent: '1DA1F2',
        font: 'roboto'
    }
});

export const getters = {
    logo: state => state.logo,
    details: state => state.details,
    customization: state => state.customization,
    address: state => state.details.address.replace(
        /[^ A-Za-z0-9_@.#&+-]/gi,
        ''
    ),
    qrCodeLink: state => `https://qrtag.net/api/qr_4.png?url=https://${state.details.website}`,
};

export const mutations = {
    changeLogo(state, public_id) {
        state.logo = public_id;
    },
    updateDetails(state, details) {
        state.details = details;
        return state.details;
    },
    updateCustomization(state, customization) {
        state.customization.accent = customization.accent ? customization.accent.replace('#', '') : state.customization.accent;
        return state.customization;
    }
}

export const actions = {
    async changeLogo({ commit }, instance) {
        commit('changeLogo', instance.public_id);
        return instance.public_id;
    },
    updateDetails({ commit }, details) {
        return commit('updateDetails', details);
    },
    updateCustomization({ commit }, customization) {
        return commit('updateCustomization', customization);
    }
}