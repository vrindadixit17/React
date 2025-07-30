import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function ToDoList() {
    let [todos, setTodos] = useState([{ id: uuidv4(), task: "sample task" }]);
    let [newTodos, setNewTodos] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), task: newTodos }];
        })

        setNewTodos("");
    }

    let updateTask = (event) => {
        setNewTodos(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id))

    }

    return (
        <div>
            <input
                placeholder="add a task"
                value={newTodos}
                onChange={updateTask} />
            <br />
            <button onClick={addNewTask}>Add Task</button>

            <br /><br /><br />
            <hr />
            <h3>To Do List</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
