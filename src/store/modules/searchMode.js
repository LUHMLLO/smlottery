const state = {
    is: false,
}

const mutations = {
    toggle(state) {
        state.is = !state.is
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}
