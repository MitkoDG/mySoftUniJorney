import React from "react";
import TodoListItem from "./TodoListItem";

function ToDoList() {
    let todoState = React.useState(['Clean your room','Go shopping','Learn React','Learn class components']);

    return (
        <>
            <ul>
                {/* <TodoListItem color='pink'>Clean your room</TodoListItem> */}
                <TodoListItem>Clean your room</TodoListItem>
                <TodoListItem>Go shopping</TodoListItem>
                <TodoListItem>Learn React</TodoListItem>
                <TodoListItem>Learn class components</TodoListItem>
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