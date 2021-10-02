import './App.css';
import NavBar from './components/NavBar';
import ToDoWrapper from './components/ToDoWrapper';
import Form from './components/Form';
import ToDos from './components/ToDos';
import { useState } from 'react';

const App = () => {
  const [toDoCards, setToDoCards] = useState([{title: "Todotitle", content:"I'm baby siracha hot chicken mixtape pabst organic air..."},
  {title: "Todotitle", content:"I'm baby siracha hot chicken mixtape pabst organic air..."},
  {title: "Todotitle", content:"I'm baby siracha hot chicken mixtape pabst organic air..."}]);

  const createToDo = (event, title, content) => {
    event.preventDefault();
    console.log(title, content);
    console.log(...toDoCards);
    setToDoCards([...toDoCards, {title : [title], content : [content]}]);
  }

  const completeToDo = (title, text) => {
    const removeIndex = toDoCards.findIndex(item => item.title === title && item.content === text);
    
    if(removeIndex === -1) return;
    
    const copyArray = [...toDoCards];
    copyArray.splice(removeIndex, 1);
    setToDoCards(copyArray)
  }

  return (
    <body>
      <NavBar userName='User user'/>
      <ToDoWrapper>
        <Form action="" method="" submit={createToDo}/>
      <ToDos toDos={toDoCards} completeToDo={completeToDo}/>
      </ToDoWrapper>
    </body>
  );
}

export default App;
