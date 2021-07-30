import React from 'react';
import './search.css'

const Search = ({setStatus, setSearch}) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    };
    const searchHandler = (e) => {
      setSearch(e.target.value)
    };

    return (
        <div className="search">
            <input type="text" placeholder='Поиск заданий' className='search__input' onChange={searchHandler}/>
            <div className='search__btns'>
                <button className='search__btn btn btn-info' value='all' type='button' onClick={statusHandler}>All</button>
                <button className='search__btn btn btn-success' value='active' type='button' onClick={statusHandler}>Active</button>
                <button className='search__btn btn btn-primary' value='done' type='button' onClick={statusHandler}>Done</button>
                <button className='search__btn btn btn-primary' value='recent' type='button' onClick={statusHandler}>Recent</button>
            </div>
        </div>
    );
};

export default Search;