import { ItemDayRainProps } from '../../@types';

import { selectColorRainType } from '../../utils';

import styles from './styles.module.scss';

const ItemDayRain = ({ 
    hour, 
    date, 
    rainType 
}: ItemDayRainProps) => {
    
    return (
        <div className={styles.area}>
            <span 
                className={styles.textOfHourAndDate}
            >{date} - {hour}h</span>
            <span 
                className={styles.textRainType}
                style={selectColorRainType(rainType)}
            >
                { rainType }
            </span>
        </div>
    )
}

export default ItemDayRain;