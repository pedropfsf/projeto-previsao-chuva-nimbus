export interface daysProps {
    hour: number;
    date: string;
    rainType: string;
    idRainType: number;
}

export interface climateArrayProps {
    id: string;
    district: string;
    data: daysProps[];
}

export interface dataProps {
    climateArray: climateArrayProps[];
}