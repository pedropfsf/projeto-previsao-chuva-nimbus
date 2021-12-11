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

    const isDistrictIsNumber = typeof district === "number";
    const isDaysIsArray = Array.isArray(days);

    function responseSendError(message:string) {
        response.status(406).send(`
            <div style="font-family: Arial">
                <h1
                    style="
                        color: #aa0022;
                        font-weight: bold;
                        text-align: center;
                        font-size: 60px
                    "
                >
                    Error 406
                </h1>
                <p 
                    style="
                        font-size: 30px;
                        text-align: center;
                    "
                >
                    ${ message }
                </p>
            </div>
        `);
    }

    if(isDistrictIsNumber) {
        responseSendError("O bairro que você está tentando enviar é do tipo invalido, somente é permitido valor do bairro do tipo string(Texto) e não number(Número)");
    } else if(!isDaysIsArray) {
        responseSendError("Os dados de dia de chuva que você está tentando enviar não é do tipo array");
    } else {
        const ID = createID();
    
        const newData = {
            id: ID,
            district,
            days
        };
    
        data.climateArray.push(newData);

        response.send("Salvo com sucesso");
    }
}