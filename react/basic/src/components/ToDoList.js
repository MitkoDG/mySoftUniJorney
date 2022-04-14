import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

function ToDoList() {
    // let todoState = React.useState('Initial todo');
    // userState can be anything ['Clean your room','Go shopping','Learn React','Learn class components']
    // let [todos, setTodo] = todoState;
    let [counter, setCount] = useState(0);
    let [name, setName] = useState('Mitko')
 
    console.log(counter);

    const addButtonClickHandler = (e) => setName(e.target.value);

    return (
        <>
                { name && <h2>Counter {name}</h2>}
                {counter == '6' 
                    ? <h3>Excellent</h3> 
                    : <h3>Nah</h3>}
            <ul>
                {/* <TodoListItem color='pink'>Clean your room</TodoListItem> */}
                {/* <TodoListItem>Clean your room</TodoListItem>
                <TodoListItem>Go shopping</TodoListItem>
                <TodoListItem>Learn React</TodoListItem>
                <TodoListItem>Learn class components</TodoListItem> */}
                {/* <TodoListItem>{todos}</TodoListItem> */}
                <li>{counter}</li>

                <button onClick={() => setCount(counter + 1)}>+</button>
                <button onClick={setCount.bind(null, counter + 1)}>+</button>

                <input type='text' onBlur={addButtonClickHandler}/>
                {/* {todos.map(todo => <TodoListItem>{todo}</TodoListItem>)} */}
            </ul>
        </>
    );
}

export default ToDoList;

// class component
// import React from "react";

// class TodoList extends React.Component {
//     render() {
//         return (
//             <ul>
//                 <li>Clean your room</li>
//                 <li>Go shopping</li>
//                 <li>Learn React</li>
//             </ul>
//         );
//     }
// }

// export default TodoList;