import React from 'react';
import styles from './NewStudy.module.scss';
import StudyForm from './StudyForm';

const NewStudy = ({onAddStudy}) => {
    const onSaveStudyDataHandler = (enteredExpensData) => {
        const StudyData = {
            ...enteredExpensData,
            id: Math.random().toString,
        };
        onAddStudy(StudyData);
    };

    return (<div className={styles['new-study']}>
        <StudyForm onSaveStudyData={onSaveStudyDataHandler}/>
    </div>);
};

export default NewStudy;