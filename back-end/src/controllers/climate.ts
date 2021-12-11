import { 
    climateProps,
    responseSendHTMLProps
} from "../@types";
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

    function responseSendHTML({
        message,
        status
    }:responseSendHTMLProps) {
        let colorTitleMessage = "";

        if(status >= 100 && status <= 199) {
            colorTitleMessage = "#00eeee";
        } else if(status >= 200 && status <= 299) {
            colorTitleMessage = "#00ee00";
        } else if(status >= 300 && status <= 399) {
            colorTitleMessage = "#800080";
        } else if(status >= 400 && status <= 499) {
            colorTitleMessage = "#bbbb00";
        } else {
            colorTitleMessage = "#bb0000";
        }

        response.status(status).send(`
            <div style="font-family: Arial">
                <h1
                    style="
                        color: ${colorTitleMessage};
                        font-weight: bold;
                        text-align: center;
                        font-size: 60px
                    "
                >
                    Error ${status}
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

    function sendData() {
        const ID = createID();
    
        const newData = {
            id: ID,
            district,
            days
        };
    
        data.climateArray.push(newData);

        responseSendHTML({
            message: "Salvo com sucesso",
            status: 200
        })
    }

    if(isDistrictIsNumber) {
        responseSendHTML({
            message: "O bairro que você está tentando enviar é do tipo invalido, somente é permitido valor do bairro do tipo string(Texto) e não number(Número)",
            status: 406
        });
    } else if(!isDaysIsArray) {
        responseSendHTML({
            message: "Os dados de dia de chuva que você está tentando enviar não é do tipo array",
            status: 406
        });
    } else {
        sendData();
    }
}