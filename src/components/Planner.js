import React, { useState } from 'react';
import PlannerForm from './PlannerForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti'

function Planner({plans, completePlan, removePlan, updatePlan }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updatePlan(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <PlannerForm edit={edit} onSubmit={submitUpdate} />;
    }

  return plans.map((plan, index) => (
      <div className={plan.isComplete ? 'plan-row complete' : 'plan-row'} 
      key={index}
      >

        <div key={plan.id} onClick={() => completePlan(plan.id)}>
            {plan.text}
        </div>
        <div className="icons">
            <RiCloseCircleLine 
            onClick={() => removePlan(plan.id)}
            className='delete-plan'
            />
            <TiEdit onClick={() => setEdit({ id: plan.id, value: plan.text})}
            className='edit-icon'/>
        </div>

      </div>
  ))
}

export default Planner;