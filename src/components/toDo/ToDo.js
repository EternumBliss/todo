import React from 'react';

const ToDo = () => {
    return (
        <li className='toDo__list__task'>
            <p className='toDO__list__name'>ToDo list</p>
            <div className='toDo__list__btns'>
                <button className='toDo__list__btn' type='button'>Done</button>
                <button className='toDo__list__btn' type='button'>Important</button>
                <button className='toDo__list__btn' type='button'>Delete</button>
            </div>
        </li>
    );
};

export default ToDo;