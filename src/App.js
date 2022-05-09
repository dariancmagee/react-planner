import React, { useEffect, useState } from 'react';
import './App.css';

import PlannerList from './components/PlannerList';

function App() {

  const [backendData, setBackendDate] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackenData(data)
      }
    )
  })
  return (
    <div className="planner-app">
      <PlannerList />
    </div>
  );
}

export default App;
