import StudyItem from '../StudyItem/StudyItem';
import styles from './StudiesList.module.scss';

const StudysList = ({filteredStudies}) => {
    let StudiesContent = <p className={styles["studys-list__fallback"]}>No studies found.</p>;

    if (!filteredStudies || filteredStudies.length === 0){
        return <h2 className={styles["studys-list__fallback"]}>No studies found.</h2>
    }
    StudiesContent = filteredStudies.map(study => <StudyItem key={study.id} study={study} />)

    return (<ul className={styles["studys-list"]}>
                {StudiesContent}
            </ul>);
};

export default StudysList;