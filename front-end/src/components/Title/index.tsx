import styles from "./styles.module.scss";
import { TitleProps } from "../../@types";

const Title = ({ children }: TitleProps) => {
    const { title } = styles;

    return (
        <h1 className={title}>{ children }</h1>
    )
}

export default Title;