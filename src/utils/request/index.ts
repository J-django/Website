import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { IResponseData } from '@/utils/interface/index'

const env = import.meta.env;

class Request {
    // axios 实例
    instance: AxiosInstance;
    // 基础配置，url和超时时间
    baseConfig: AxiosRequestConfig = { baseURL: env.VITE_BASE_URL, timeout: 25000 };

    constructor(config: AxiosRequestConfig) {
        // 使用axios.create创建axios实例
        this.instance = axios.create(Object.assign(this.baseConfig, config));

        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // 一般会请求拦截里面加token
                const token = localStorage.getItem("token");
                config.headers["Authorization"] = token;

                return config;
            },
            (err: any) => {
                return Promise.reject(err);
            }
        );

        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                // 直接返回res，当然你也可以只返回res.data
                return res;
            },
            (err: any) => {
                // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
                return Promise.reject(err.response);
            }
        );
    }

    /**
     * @description GET请求模式
     * @param {String} url 访问地址
     * @param {AxiosRequestConfig} config 配置AxiosRequestConfig对象
     * @returns 返回类型IResponseData包裹的对象，data为泛型T
     */
    public get<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<IResponseData<T>> {
        return new Promise<IResponseData<T>>((resolve, reject) => {
            this.instance.get(url, config).then((response: AxiosResponse<IResponseData<T>>) => {
                resolve(response.data)
            }).catch((error: any) => {
                reject(error)
            })
        })
    }

    /**
     * @description POST请求模式
     * @param {String} url 访问地址
     * @param {any} data 请求参数 
     * @param {AxiosRequestConfig} config 配置AxiosRequestConfig对象
     * @returns 返回类型IResponseData包裹的对象，data为泛型T
     */
    public post<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<IResponseData<T>> {
        return new Promise<IResponseData<T>>((resolve, reject) => {
            this.instance.post(url, data, config).then((response: AxiosResponse<IResponseData<T>>) => {
                resolve(response.data)
            }).catch((error: any) => {
                reject(error)
            })
        })
    }
}
export default new Request({});