import React, { useState } from 'react'

const TodoItem: React.FC<{ text: string }> = (props) => {

    const [style, setStyle] = useState('none');

    const changeHandler = () => {
        
        setStyle('text-decoration-line-through');
    };

    return (
        <ul className="list-group list-group-light">
            <li className={`list-group-item m-1 ${style}`}>
                <input className="form-check-input me-3" type="checkbox" onClick={changeHandler} />
                {props.text}
            </li>
        </ul>
    )
}

export default TodoItem