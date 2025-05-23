import { createI18n } from "vue-i18n";
import messages from '@intlify/vite-plugin-vue-i18n/messages'


const i18n = createI18n({
  locale: navigator?.language || 'en',
  messages,
});

export { i18n };
