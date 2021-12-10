import { data } from "../data"

export const getAll = (request, response, next) => {
    try {
        response.json(JSON.stringify(data));
    } catch (error) {
        throw new Error(error);
    }
}