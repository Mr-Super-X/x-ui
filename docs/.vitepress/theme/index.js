import DefaultTheme from 'vitepress/theme'

import Icon from '@cjp-ui/components/icon'
import '@cjp-ui/theme/src/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Icon) // 在vitepress中注册全局组件
  },
}
