import { DataProps, SelectProps } from "../../@types";

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
                        (item:DataProps) => {
                            const { 
                                text, 
                                value 
                            } = item;

                            return ( 
                                <option value={ value }>
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