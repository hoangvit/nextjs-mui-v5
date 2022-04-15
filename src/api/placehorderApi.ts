import { getClient } from "./client";

const placehoderClient = getClient("https://jsonplaceholder.typicode.com/");

export const placeholderApi = {
    getPhoto(page: number, limit: number){
        return placehoderClient.get(`photos?_page=${page}&_limit=${limit}`)
    },
};
