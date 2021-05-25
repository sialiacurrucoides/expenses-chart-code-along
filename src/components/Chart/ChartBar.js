import styles from './ChartBar.module.scss';

const ChartBar = ({value, label, maxValue}) => {
    let barFillWidth = '0%';

    if (maxValue > 0){
        barFillWidth = `${Math.round((value/maxValue) * 100)}%`;
    }

    return (
        <div className={styles["chart-bar"]}>
            <div className={styles["chart-bar__label"]}>{label}</div>
            <div className={styles["chart-bar__inner"]}>
                <div className={styles["chart-bar__fill"]} style={{width: barFillWidth}}></div>
            </div>
        </div>)
};

export default ChartBar;