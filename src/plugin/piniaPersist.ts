import { PersistedStateOptions } from 'pinia-plugin-persistedstate'

/**
 * @description pinia持久化参数配置
 * @param {String} key pinia持久化参数配置
 * @param mode 存储模式
 * @returns 返回PersistedStateOptions键值对象
 */
const piniaPersistConfig = (key: string, storageMode?: any) => {
    const persist: PersistedStateOptions = {
        key,
        storage: storageMode
    }
    return persist
}

/**
 * 导出函数
 */
export default piniaPersistConfig