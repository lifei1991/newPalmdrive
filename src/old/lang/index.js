// 引入vue-i18n
import { createI18n } from 'vue-i18n'
// 注册i8n实例并引入语言文件
const i18n = createI18n({
  // locale: 'ch',        //默认显示的语言
  locale: localStorage.getItem('lang') || 'zh',
  messages: {
    // 引入两个语言文件
    ch: require('./zh.js'),
    en: require('./en.js')
  }
})
// export
export default i18n
