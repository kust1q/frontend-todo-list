import {Item} from "./pages/MainPage/types";
import Cookies from "js-cookie";
import Axios, {AxiosInstance} from "axios";

const baseURL = process.env.REACT_APP_BACKEND_IP;
const instance: AxiosInstance = Axios.create();

instance.defaults.withCredentials = true
instance.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get('access_token');
        if (accessToken) {
            config.headers!.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    }
);

export const Api = {
    async loadItems() {
        return await instance.get(`${baseURL}/api/v1/public/items`);
    },
    async addNewItem(body: Item) {
        return await instance.post(
            `${baseURL}/api/v1/public/items`,
            JSON.stringify(body),
            {
                headers: {"Content-Type": "application/json"}
            })
    },
    async removeItem(uid: string) {
        return await instance.delete(`${baseURL}/api/v1/public/items/${uid}`)
    }
}