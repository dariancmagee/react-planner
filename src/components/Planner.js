import React, { useState } from 'react';
import PlannerForm from './PlannerForm';
import PlannerList from './PlannerList';

function Planner() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

  return PlannerList.arguments((plan, index) => (
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index}
      >


      </div>
  ))
}

export default Planner;