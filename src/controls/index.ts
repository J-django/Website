import DJBadge from './dj-badge'
import DJCode from './dj-code'
import DJLink from './dj-link'

export default {
    install(Vue: any) {
        Vue.component('dj-badge', DJBadge);
        Vue.component('dj-code', DJCode);
        Vue.component('dj-link', DJLink);
    }
}