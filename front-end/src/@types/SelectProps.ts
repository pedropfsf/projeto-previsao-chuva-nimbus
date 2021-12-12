interface DataSelectProps {
    value: string;
    text: string;
}

interface SelectProps {
    label: string;
    data: DataSelectProps[];
    setSelect: (object:any) => void;
}

export type {
    DataSelectProps,
    SelectProps
}