import React, { useState } from 'react';
import PlannerForm from './PlannerForm';
import Planner from './Planner';

function PlannerList() {
    const [plans, setPlans] = useState([]);

    const addPlan = plan => {
        if(!plan.text || /^\s*$/.test(plan.text)) {
            return
        }

        const newPlans = [plan, ...plans]

        setPlans(newPlans);
        
    };


    const updatePlan = (planId, newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }

      setPlans(prev => prev.map(item => (item.id === planId ? newValue: item)))
    }

    const removePlan = id => {
      const removeArr = [...plans].filter(plan => plan.id !== id)

      setPlans(removeArr);
    };


    const completePlan = id => {
      let updatedPlans = plans.map(plan => {
        if (plan.id === id) {
          plan.isComplete = !plan.isComplete;
        }
        return plan;
      });
    };

  return (
    <div>
        <h1>Plans for today!</h1>
        <PlannerForm onSubmit={addPlan} />
        <Planner plans={plans} completePlan={completePlan} removePlan={removePlan} updatePlan={updatePlan} />
    </div>
  )
}

export default PlannerList