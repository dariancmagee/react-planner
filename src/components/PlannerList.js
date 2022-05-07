import React, { useState } from 'react';
import PlannerForm from './PlannerForm';

function PlannerList() {
    const [plans, setPlans] = useState([]);

    const addPlan = plan => {
        if(!plan.text || /^\s*$/.test(plan.text)) {
            return
        }

        const newPlans = [plan, ...plans]

        setPlans(newPlans)
        
    };

  return (
    <div>
        <h1>Plans for today!</h1>
        <PlannerForm onSubmit={addPlan} />
    </div>
  )
}

export default PlannerList