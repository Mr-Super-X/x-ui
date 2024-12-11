import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 引入icon组件
import Icon from "@cjp-ui/components/icon"
import "@cjp-ui/theme/src/index.scss"

const plugins = [
  Icon,
]

plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
