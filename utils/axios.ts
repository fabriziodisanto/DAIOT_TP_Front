import axios, { AxiosError } from 'axios'

export const ApiInstnace = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST_URL
})

ApiInstnace.interceptors.request.use(function (config) {
    //  const token = Cookies.get("token");
    //  config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

export const apiInstanceFetcher = (url: any) =>
    ApiInstnace.get(url).then((res) => res.data);

const putRequest = (url: string) => {
    ApiInstnace.put(url).then((res) => console.log(res));
}

export const turnOnRequest = (deviceId: string) => {
    putRequest(`${process.env.NEXT_PUBLIC_API_HOST_URL}devices/active/${deviceId}`)
}

export const turnOffRequest = (deviceId: string) => {
    putRequest(`${process.env.NEXT_PUBLIC_API_HOST_URL}devices/inactive/${deviceId}`)
}

const postRequest = (url: string, data: any) => {
    ApiInstnace.post(url, data).then((res) => console.log(res));
}

export const addNewDeviceRequest = (data: any) => {
    postRequest(`${process.env.NEXT_PUBLIC_API_HOST_URL}devices`, data)
}