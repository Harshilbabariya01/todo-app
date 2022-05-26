import React, { useRef } from 'react'

const NewTodo: React.FC<{onAddTask : (text: string) => void}> = (props) => {

    const inputTaskRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredtask = inputTaskRef.current!.value;
        if(enteredtask?.length == 0) {
            return;
        }
        props.onAddTask(enteredtask);
    };

    return (
        <form onSubmit={submitHandler} className="form text-center">
            <div className="container-fluid">
                <input
                    className="mx-3"
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="New Task..."
                    autoComplete="off"
                    ref={inputTaskRef}
                />
                <button className="btn btn-primary btn-sm">Add Task</button>
            </div>
        </form>
    )
}

export default NewTodo