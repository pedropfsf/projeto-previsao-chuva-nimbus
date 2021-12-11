interface DataProps {
    value: string;
    text: string;
}

interface SelectProps {
    label: string;
    data: DataProps[]
}

export type {
    DataProps,
    SelectProps
}