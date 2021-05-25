import React, { useState } from 'react';
import styles from './StudyForm.module.scss';
import Select from 'react-select';
import topics from '../../constants/topics.json';

const StudyForm = ({onSaveStudyData}) => {

    const [userInput, setUserInput] = useState({
        enteredTopic: '',
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const [open, setOpen] = useState(false);

    const topicChangeHandler = (event) => {
        setUserInput(prev => ({
            ...prev,
            enteredTopic: event.value}));
    };

    const titleChangeHandler = (event) => {
        setUserInput(prev => ({
            ...prev,
            enteredTitle: event.target.value}));
    };
    const amountChangeHandler = (event) => {
        setUserInput(prev => ({
            ...prev,
            enteredAmount: event.target.value}));
    };
    const dateChangeHandler = (event) => {
        setUserInput(prev => ({
            ...prev,
            enteredDate: event.target.value}));
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const StudyData = {
            topic: userInput.enteredTopic,
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(),
        };
        onSaveStudyData(StudyData);
        setUserInput({
            enteredTopic: '',
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        })
    };

    const options = topics.map(topic => ({value: topic, label: topic}));

    return (
        open ? 
        (<form onSubmit={submitHandler}>
        <div className={styles['new-study__controls']}>
            <div className={styles['new-study__control']}>
                <label>Topic</label>
                <Select options={options} onChange={topicChangeHandler} value={userInput.enteredTopic}/>
            </div>
            <div className={styles['new-study__control']}>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle}/>
            </div>
            <div className={styles['new-study__control']}>
                <label>Amount in minutes</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.enteredAmount}/>
            </div>
            <div className={styles['new-study__control']}>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate}/>
            </div>

            <div className={styles['new-study__actions']}>
                <button type="submit" onClick={() => setOpen(prev => !prev)}>Cancel</button>
                <button type="submit">Add study</button>
            </div>
        </div>
    </form>) : (
        <div className={styles['new-study__actions']}>
            <button type="submit" onClick={() => setOpen(prev => !prev)}>Add Study</button>
        </div>
    ));
};

export default StudyForm;