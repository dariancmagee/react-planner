import React, { useEffect, useState } from 'react';
import './App.css';

import PlannerList from './components/PlannerList';

function App() {

  const [backendData, setBackendDate] = useState([{}])

  
  return (
    <div className="planner-app">
      <PlannerList />
    </div>
  );
}

export default App;
