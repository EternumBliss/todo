import React, {useState, useEffect} from 'react';

import Header from '../header'
import Search from '../search'
import ToDoList from '../toDoList'
import AddToDo from "../addToDo";
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('all');
    const [search, setSearch] = useState('');

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todos')))
    }, []);
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    return (
        <div className='toDo'>
            <div className='app__container'>
                <Header todos={todos}/>
                <Search status={status} setStatus={setStatus} setSearch={setSearch}/>
                {todos.length === 0 && status === 'all'
                    ? <p>Здесь будут Ваши задания</p>
                    : todos.filter((item) => {
                        return item.isActive && !item.isDeleted
                    }).length === 0 && status === 'active'
                        ? <p>Здесь будут Ваши активные задания</p>
                        : todos.filter((item) => {
                            return !item.isActive && !item.isDeleted
                        }).length === 0 && status === 'done'
                         ? <p>Здесь будут Ваши выполненные задания</p>
                         : todos.filter((item) => {
                            return item.isDeleted
                        }).length === 0 && status === 'recent'
                            ? <p>Здесь будут Ваши недавно удаленные задания</p>
                            : <ToDoList search={search} status={status} setTodos={setTodos} todos={todos}/>}
                <AddToDo status={status} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    );
};

export default App;