import { climateProps } from "../@types/dataProps";
import { createID } from "../utils";

import { data } from "../data"

export const getAll = (request, response) => {
    try {
        response.json(JSON.stringify(data));
    } catch (error) {
        throw new Error(error);
    }
}

export const createDataClimate = (request, response) => {
    const { 
        district, 
        days 
    }:climateProps = request.body;

    const ID = createID();

    const newData = {
        id: ID,
        district,
        days
    };

    data.climateArray.push(newData);

    response.send("Salvado com sucesso");
}