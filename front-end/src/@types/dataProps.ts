interface DaysProps {
    hour: number;
    date: string;
    rainType: string;
    idRainType: number;
}

interface ClimateArrayProps {
    id: string;
    district: string;
    days: DaysProps[];
}

interface DataProps {
    climateArray: ClimateArrayProps[];
}

export type {
    DaysProps,
    ClimateArrayProps,
    DataProps
}