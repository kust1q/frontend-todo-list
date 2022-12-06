import {Item} from "./pages/MainPage/types";
import axios from "axios";

axios.defaults.withCredentials = true
const baseURL = process.env.REACT_APP_BACKEND_IP;

export const Api = {
    async loadItems() {
        return await axios.get(`${baseURL}/api/v1/public/items`);
    },
    async addNewItem(body: Item) {
        return await axios.post(
            `${baseURL}/api/v1/public/items`,
            JSON.stringify(body),
            {
                headers: {"Content-Type": "application/json"}
            })
    },
    async removeItem(uid: string) {
        return await axios.delete(`${baseURL}/api/v1/public/items/${uid}`)
    }
}