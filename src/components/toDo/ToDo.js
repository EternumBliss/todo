import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import './ToDo.css'

const ToDo = ({todoObj, setTodos, todos, status}) => {
    const deleteToDo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObj.id ? {...item, isDeleted: !item.isDeleted} : item
        }))
    };
    const delete2Todo = () => {
        setTodos(todos.filter((item) => {
            return item.id !== todoObj.id
        }))
    };
    const doneTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObj.id ? {...item, isActive: !item.isActive} : item
        }))
    };
    const importantTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObj.id ? {...item, isImportant: !item.isImportant} : item
        }))
    };
    const changeTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObj.id ? {...item, isChange: !item.isChange} : item
        }))
    };
    const restoreTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObj.id ? {...item, isDeleted: !item.isDeleted} : item
        }))
    };
    const textareaHandler = (e) => {
        return todoObj.name = e.target.value
    };

    const addZero = (item) => {
        if (item < 10) {
            return `0${item}`
        } else {
            return item
        }
    }

    return (
        <li className='toDo__list__task'>
            {todoObj.isChange
                ? <textarea defaultValue={todoObj.todoName} className='toDo__list__input' onChange={textareaHandler}/>
                : <p className={`toDo__list__name
             ${todoObj.isActive ? 'active' : 'done'}
                ${todoObj.isImportant ? 'important' : ''}
                `}>{todoObj.todoName}</p>
            }
            {status === 'recent'
                ? <div className='toDo__list__btns'>
                    <button className='btn btn-outline-danger' type='button' onClick={delete2Todo}>
                        <i className="fas fa-eraser"></i>
                    </button>
                    <button className='btn btn-outline-secondary' type='button' onClick={restoreTodo}>
                        <i className="fas fa-undo"></i>
                    </button>
                </div>
                : <div className='toDo__list__btns'>
                    <button className={`btn btn-outline-secondary ${todoObj.isChange ? 'active' : ''}`} type='button'
                            onClick={changeTodo}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className={`btn btn-outline-success ${todoObj.isActive ? '' : 'active'}`} type='button'
                            onClick={doneTodo}><i
                        className="fas fa-check-double"></i></button>
                    <button className={`btn btn-outline-warning ${todoObj.isImportant ? 'active' : ''}`} type='button'
                            onClick={importantTodo}><i
                        className="fas fa-exclamation-triangle"></i></button>
                    <button className='btn btn-outline-danger' type='button' onClick={deleteToDo}><i
                        className="fas fa-eraser"></i>
                    </button>
                </div>
            }


        </li>
    );
};

export default ToDo;