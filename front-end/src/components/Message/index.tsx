import { MessageProps } from "../../@types";

import styles from "./styles.module.scss";

const Message = ({ children }:MessageProps) => {
    return (
        <h1 className={styles.message}>
            { children }
        </h1>
    )
}

export default Message;