import React, {useState} from 'react';
import styles from './Studies.module.scss';
import Card from '../UI/Card/Card';
import StudiesFilter from './StudiesFilter/StudiesFilter';
import StudiesList from './StudiesList/StudiesList';
import StudiesChart from './StudiesChart/StudiesChart';

const Studies = ({studies}) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const handleYearSelected = (year) => {
        setSelectedYear(year);
    };

    const filteredStudies = studies.filter(item => item.date.getFullYear().toString() === selectedYear);

    return (
        <Card className={styles.studies}>
            <StudiesFilter onYearSelect={handleYearSelected} selected={selectedYear}/>
            <StudiesChart filteredStudies={filteredStudies}/>
            <StudiesList filteredStudies={filteredStudies}/>
        </Card>
    );
}

export default Studies;