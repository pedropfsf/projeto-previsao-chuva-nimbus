export interface daysProps {
    hour: number;
    date: string;
    rainType: string;
    idRainType: number;
}

export interface climateProps {
    id?: string;
    district: string;
    days: daysProps[];
}

export interface dataProps {
    climateArray: climateProps[];
}