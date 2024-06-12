import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

interface IResponseData<T> {
    code: number;
    data: T;
    message: string;
}

const env = import.meta.env;

export const Request = (config?: AxiosRequestConfig) => {
    const baseConfig: AxiosRequestConfig = { baseURL: env.VITE_BASE_URL, timeout: 25000 };
    const instance: AxiosInstance = axios.create(Object.assign(baseConfig, config));

    instance.interceptors.request.use(
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

    instance.interceptors.response.use(
        (res: AxiosResponse) => {
            // 直接返回res，当然你也可以只返回res.data
            return res;
        },
        (err: any) => {
            // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
            return Promise.reject(err.response);
        }
    );

    const get = <T = any>(url: string, config?: AxiosRequestConfig) => {
        return new Promise<IResponseData<T>>((resolve, reject) => {
            instance.get(url, config).then((response: AxiosResponse<IResponseData<T>>) => {
                resolve(response.data)
            }).catch((error: any) => {
                reject(error)
            })
        })
    }
    const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
        return new Promise<IResponseData<T>>((resolve, reject) => {
            instance.post(url, data, config).then((response: AxiosResponse<IResponseData<T>>) => {
                resolve(response.data)
            }).catch((error: any) => {
                reject(error)
            })
        })
    }

    return {
        instance,
        baseConfig,
        get,
        post
    }
}