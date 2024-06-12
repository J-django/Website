import DJBadge from './dj-badge'
import DJCode from './dj-code'
import DJLink from './dj-link'
import DJAnchor from './dj-anchor'
import DJExample from './dj-example'
import DJMark from './dj-mark'

export default {
    install(Vue: any) {
        Vue.component('dj-badge', DJBadge);
        Vue.component('dj-code', DJCode);
        Vue.component('dj-link', DJLink);
        Vue.component('dj-anchor', DJAnchor);
        Vue.component('dj-example', DJExample);
        Vue.component('dj-mark', DJMark);
    }
}