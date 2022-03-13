import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {} from './plugins/firebase'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
