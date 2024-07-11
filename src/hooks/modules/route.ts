import { computed } from 'vue'
import { useRoute } from 'vue-router'

export const useRoutePlugin = () => {
    const route = useRoute();

    const routeTitle = computed(() => route.meta.title);

    return {
        routeTitle
    }
}