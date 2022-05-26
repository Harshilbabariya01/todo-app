import React from 'react'
import todo from '../models/todo'
import TodoItem from './TodoItem'

const ToDos: React.FC<{ items: todo[] }> = (props) => {
    return (
        <div>
            <div className="my-5">
                {
                    props.items.map(value =>
                        <TodoItem key={value.text} text={value.text} />
                    )
                }
            </div>
        </div>
    )
}

export default ToDos