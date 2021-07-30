import React from 'react';

const Header = ({todos}) => {
    const more = todos.filter((item) => {
        return item.isActive
    }).length;
    const done = todos.filter((item) => {
        return !item.isActive
    }).length;
    return (
        <header className='header'>
            <h1 className='header__list'>ToDo list</h1>
            {todos.length === 0
            ? <p className='header__count'>Количество Ваших Заданий</p>
            : <p className='header__count'>{more} more todo, {done} done</p>}

        </header>
    );
};

export default Header;