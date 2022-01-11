const state = {
    theme: 'dark',
}

const mutations = {
    toggle(state) {
        switch (state.theme) {
            case 'dark':
                state.theme = 'light'
                document.querySelector('html').setAttribute('forced-color-scheme', 'light')
                break
            case 'light':
                state.theme = 'dark'
                document.querySelector('html').setAttribute('forced-color-scheme', 'dark')
                break
        }

        localStorage.setItem('theme', JSON.stringify(state.theme))
    },

    set(state) {
        state.theme = JSON.parse(localStorage.getItem('theme'))
        document.querySelector('html').setAttribute('forced-color-scheme', JSON.parse(localStorage.getItem('theme')))
    },
}

const actions = {
    fetch(context) {
        if (localStorage.getItem('theme')) {
            context.commit('set')
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
