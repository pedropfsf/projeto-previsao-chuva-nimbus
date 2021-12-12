import { ContainerForDaysRainProps } from "../../@types";

import styles from './styles.module.scss';

const ContainerForDaysRain = ({ children }:ContainerForDaysRainProps) => {
    return (
        <div className={styles.container}>
            { children }
        </div>
    )
}

export default ContainerForDaysRain;