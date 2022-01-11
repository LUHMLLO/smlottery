import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({ theme: 'dark' }),
    actions: {
        check() {
            if (localStorage.getItem('theme')) {
                this.theme = JSON.parse(localStorage.getItem('theme') || 'undefined')
                this.set()
            }
        },

        set() {
            document.querySelector('html')?.setAttribute('forced-color-scheme', this.theme)
            localStorage.setItem('theme', JSON.stringify(this.theme))
        },

        toggle() {
            switch (this.theme) {
                case 'dark':
                    this.theme = 'light'
                    document.querySelector('html')?.setAttribute('forced-color-scheme', 'light')
                    break
                case 'light':
                    this.theme = 'dark'
                    document.querySelector('html')?.setAttribute('forced-color-scheme', 'dark')
                    break
            }

            localStorage.setItem('theme', JSON.stringify(this.theme))
        },

        auto() {
            document.querySelector('html')?.removeAttribute('forced-color-scheme')
            localStorage.removeItem('theme')
        },
    },
})
