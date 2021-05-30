import { axiosWithAuth } from "./axiosWithAuth";
export const fetchItems = () => {
    return axiosWithAuth()
    .get("/items")
    .then((res) => res)
    .catch((err) =>err);
};