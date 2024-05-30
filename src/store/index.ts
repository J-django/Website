import { createPinia } from 'pinia'
// 持久化处理
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

/**
 * 创建pina
 */
const store = createPinia()

/**
 * 注册持久化
 */
store.use(piniaPluginPersistedstate)

export default store;