import {createApp} from 'vue'
import './style/style.css'
import App from './App.vue'
import Routes from './routes'
// highcharts

// smart html element
import 'smart-webcomponents/source/styles/smart.default.css';
import "smart-webcomponents/source/modules/smart.element.js"
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.buttongroup.js";
import "smart-webcomponents/source/modules/smart.progressbar.js";


//awesome
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

window.Smart.License = 'AC9CFCBB-DF1B-4023-A22B-4E9E8ACFA1D0'
const app = createApp(App)
app.use(Routes)
app
    .component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

