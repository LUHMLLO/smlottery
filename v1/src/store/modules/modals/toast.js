const state = {
    is: false,
    label: '',
    content: '',
}

const mutations = {
    toggle(state, payload) {
        state.is = !state.is
        state.label = payload.label
        state.content = payload.content

        setTimeout(function () {
            state.is = !state.is
            state.label = ''
            state.content = ''
        }, 2000)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}
