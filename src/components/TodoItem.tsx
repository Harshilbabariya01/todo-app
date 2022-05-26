import React from 'react'

const TodoItem: React.FC<{ text: string }> = (props) => {
    return (
        <ul className="list-group list-group-light">
            <li className="list-group-item m-1">
                <input className="form-check-input me-3" type="checkbox" />
                {props.text}
            </li>
        </ul>
    )
}

export default TodoItem