import { DataSelectProps, SelectProps } from "../../@types";

const Select = ({ 
    label, 
    data 
}:SelectProps) => {
    return (
        <div>
            <span>
                { label }
            </span>
            <select>
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