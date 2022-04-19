import { App } from 'vue'
import { FirstPlugin } from './components'


export default {
    install(app: App, options: { msg: string } = { msg: '' })  {
        app.component('FirstPlugin', FirstPlugin)
        app.provide('msg', options.msg)
    }
}

export { FirstPlugin }