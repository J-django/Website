import JYCode from './controls/jy-code.vue'
import JYCard from './controls/jy-card.vue'
import JYButton from './controls/jy-button.vue'
import JYButtonGroup from './controls/jy-button-group.vue'
import JYRow from './controls/jy-row.vue'
import JYInput from './controls/jy-input.vue'
import JYA from './controls/jy-a.vue'
import JYSelect from './controls/jy-select.vue'
import JYOption from './controls/jy-option.vue'
import JYDivider from './controls/jy-divider.vue'
import JYAccordion from './controls/jy-accordion.vue'
import JYDraggable from './controls/jy-draggable.vue'

export default {
    install(Vue: any) {
        Vue.component('jy-code', JYCode);
        Vue.component('jy-card', JYCard);
        Vue.component('jy-button', JYButton);
        Vue.component('jy-button-group', JYButtonGroup);
        Vue.component('jy-row', JYRow);
        Vue.component('jy-input', JYInput);
        Vue.component('jy-a', JYA);
        Vue.component('jy-select', JYSelect);
        Vue.component('jy-option', JYOption);
        Vue.component('jy-divider', JYDivider);
        Vue.component('jy-accordion', JYAccordion);
        Vue.component('jy-draggable', JYDraggable);
    }
}