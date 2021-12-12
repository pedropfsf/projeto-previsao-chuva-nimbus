import { DataSelectProps, SelectProps } from "../../@types";

const Select = ({ 
    label, 
    data,
    setSelect
}:SelectProps) => {
    return (
        <div>
            <span>
                { label }
            </span>
            <select
                onChange={setSelect}
                defaultValue={"Selecione uma opção"}
            >
                <option 
                    value="Selecione uma opção"
                >
                    Selecione uma opção
                </option>
                { 
                    data.map(
                        (item:DataSelectProps, index: number) => {
                            const { 
                                text, 
                                value 
                            } = item;

                            return ( 
                                <option 
                                    value={ value }
                                    key={ index }
                                >
                                    { text }
                                </option>
                            )
                        }
                    )
                }
            </select>
        </div>
    )
}

export default Select;