import { registerSW } from 'virtual:pwa-register'

export const updateSW = registerSW({
    onRegistered(r) {
        r &&
            setInterval(() => {
                r.update()
            }, 60 * 60 * 1000)
    },
    onRegisterError(error) {
        console.log('theres been an error: ' + error)
    },
    updated() {
        console.log('New content is available')
        window.location.reload(true)
    },
    onNeedRefresh() {
        console.log('Need refresh.')
    },
    onOfflineReady() {
        console.log('PWA is offline ready')
    },
})
