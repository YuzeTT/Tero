import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import axios from 'axios'
import teroConfig from './tero.config'

import 'eva-icons/style/eva-icons.css'

const app = createApp(App)
axios.defaults.baseURL = teroConfig.api.baseURL
app.config.globalProperties.$teroConfig = teroConfig
app.config.globalProperties.$axios = axios
installElementPlus(app)

app.use(router).mount('#app')