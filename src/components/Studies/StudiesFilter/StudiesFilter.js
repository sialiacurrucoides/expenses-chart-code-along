import styles from './StudiesFilter.module.scss';

const StudiesFilter = ({onYearSelect, selected}) => {

  const handleChange = (event) => {
    onYearSelect(event.target.value);
  };

  return (
    <div className={styles['studies-filter']}>
      <div className={styles['studies-filter__control']}>
        <label>Filter by year</label>
        <select onChange={handleChange} value={selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default StudiesFilter;
