import { dataProps } from "../@types/dataProps"

export const validateDataJson = (data: dataProps) => {
    const isArray = Array.isArray(data.climateArray);

    if(!isArray) {
        return false;
    } else {
        return true;
    }

    // data.climateArray.forEach(item => {

    // });
}