import { DataSelectProps, SelectProps } from "../../@types";

import styles from './styles.module.scss';

const Select = ({ 
    label, 
    data,
    setSelect
}:SelectProps) => {
    return (
        <div className={styles.container}>
            <span className={styles.label}>
                { label }:
            </span>
            <select
                className={styles.selectDistrict}
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