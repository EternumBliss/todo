import React from 'react';
import './toDoList.css';
import ToDo from '../toDo'

const ToDoList = ({todos,setTodos,status,search}) => {
    return (
        <ul className='toDo__list'>
            {todos.filter((item)=>{
                switch (status) {
                    case 'active': {
                        return item.isActive && !item.isDeleted
                    }
                    case 'done' : {
                        return !item.isActive && !item.isDeleted
                    }
                    case 'recent': {
                        return item.isDeleted
                    }
                    default:
                        return item && !item.isDeleted
                }
            }).filter((item)=>{
                return item.todoName.includes(search)
            }).map((item)=>{
                return <ToDo status={status} todoObj={item} todos={todos} setTodos={setTodos}  key={item.id} />
            })}
        </ul>
    );
};

export default ToDoList;