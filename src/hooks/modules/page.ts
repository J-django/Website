import { computed } from "vue"
import { useRoute, RouteRecordRaw } from "vue-router"
import { routes } from '@/router/route'

/**
 * 文档上一页、下一页
 * @returns prevPage, nextPage
 */
export const usePage = () => {
    const route = useRoute();

    const prevPage = computed((): RouteRecordRaw | null => {
        const [r] = routes;
        const fi = r.children?.findLastIndex(f => route.path.includes(f.path));
        if (fi) {
            const fr = r.children![fi];
            const ci = fr.children && fr.children.findLastIndex(f => route.path === f.path);
            if (ci != -1) {
                if (ci != 0) {
                    return fr.children![(ci as number) - 1];
                } else {
                    const pr = r.children![fi - 1];
                    if (pr.children) {
                        return pr.children[pr.children.length - 1];
                    }
                    return null;
                }
            }
        }
        return null;
    });

    const nextPage = computed((): RouteRecordRaw | null => {
        const [r] = routes;
        const fi = r.children?.findLastIndex(f => route.path.includes(f.path));
        if (fi) {
            const fr = r.children![fi];
            const ci = fr.children && fr.children.findLastIndex(f => route.path === f.path);
            if (ci != -1) {
                if (fr.children && ci != fr.children?.length - 1) {
                    return fr.children![(ci as number) + 1];
                } else {
                    const pr = r.children![fi + 1];
                    if (pr.children) {
                        return pr.children[0];
                    }
                    return null;
                }
            }
        }
        return null;
    });

    return {
        prevPage,
        nextPage
    }
}