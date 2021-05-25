import React, { useState } from 'react';
import Studies from './components/Studies/Studies';
import NewStudy from './components/NewStudy/NewStudy';

const dummy_Studies = [
  { id: 'e1', topic: 'React', title: 'React tutorial by Max', amount: 120, date: new Date(2021, 3,12)},
  { id: 'e2', topic: 'CSS/SASS', title: 'Alter React tutorial project', amount: 40, date: new Date(2021, 3,12)},
];

function App() {
  const [studies, setStudies] = useState(dummy_Studies);

  const addStudyHandler = Study => {
    setStudies(prev => ([
      Study,
      ...prev,
    ]))
  };

  return (
    <div>
      <NewStudy onAddStudy={addStudyHandler} />
      <Studies studies={studies} />
    </div>
  );
}

export default App;
