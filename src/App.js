import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
      <h1 > NOTE LIST</h1>
      <TodoInput />
      <TodoList />
      
     
    </div>
  );
}

export default App;
