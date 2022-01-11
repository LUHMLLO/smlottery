const state = {
    is: false,
    url: '',
}

const mutations = {
    set(state, payload) {
        state.is = !state.is
        state.url = payload.url
    },
    drop(state) {
        state.is = !state.is
        state.url = ''
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}
