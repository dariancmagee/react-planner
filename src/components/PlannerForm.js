import React, { useState, useEffect, useRef } from 'react'

function PlannerForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

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
        {props.edit ? ( 
        <>
        <input
        type="text" 
        placeholder="Add a note" 
        value={input}
        name="text" 
        className="planner-input edit"
        onChange={handleChange}
        ref={inputRef}
        />
        <button className="planner-button edit">Add item</button>
        </>
        ) :
        ( 
        <>
        <input
            type="text" 
            placeholder="Add a note" 
            value={input}
            name="text" 
            className="planner-input"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="planner-button">Add item</button>
        </>
        )}
        

    </form>
  )
}

export default PlannerForm;