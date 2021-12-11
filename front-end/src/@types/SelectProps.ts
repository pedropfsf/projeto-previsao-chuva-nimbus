interface DataSelectProps {
    value: string;
    text: string;
}

interface SelectProps {
    label: string;
    data: DataSelectProps[]
}

export type {
    DataSelectProps,
    SelectProps
}