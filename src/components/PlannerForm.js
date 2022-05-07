import React, { useState } from 'react'

function PlannerForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() *10000),
            text: input
        });

        setInput('');
    };


  return (
    <form className="planner-form" onSubmit={handleSubmit}>
        <input
        type="text" 
        placeholder="Add a note" 
        value={input}
        name="text" 
        className="planner-output"
        onChange={handleChange}
        />
        <button className="planner-button">Add item</button>

    </form>
  )
}

export default PlannerForm;