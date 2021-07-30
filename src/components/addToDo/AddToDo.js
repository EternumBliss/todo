import React from 'react';
import './addToDo.css'

const AddToDo = ({todos,setTodos,inputText,setInputText, status}) => {
    const AddToDo = (e)=>{
        e.preventDefault();
        setTodos([...todos, {
            todoName: inputText,
            isActive: true,
            isImportant: false,
            isChange: false,
            isDeleted: false,
            id: Math.floor(Math.random() *1000)
        }]);
        setInputText('')
    };
    const inputHandler = (e)=> {
        setInputText(e.target.value)
    };
    return (
        <form className='add__toDo' action="" onSubmit={AddToDo}>
            {status === 'done' || status === 'recent'
                ? <input type='text' className='add__toDo__input' placeholder='Заблокировано' value={inputText} disabled={true}/>
                : <input required className='add__toDo__input' type="text" placeholder='Создать задачу' onChange={inputHandler} value={inputText}/>
            }
            <button className='add__toDo__button' type='submit'>Add</button>
        </form>
    );
};

export default AddToDo;