import {createApp} from 'vue'
import './style/style.css'
import App from './App.vue'
import Routes from './routes'
// highcharts
import * as Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'

Exporting(Highcharts)

const app = createApp(App)
app.use(Routes)

app.component('chart', Highcharts)

app.mount('#app')

