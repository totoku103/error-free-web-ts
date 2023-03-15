import {createApp} from 'vue'
import './style/style.css'
import App from './App.vue'
import Routes from './routes'

const app = createApp(App)
app.use(Routes)

app.mount('#app')

