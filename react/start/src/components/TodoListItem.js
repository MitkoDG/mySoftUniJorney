
const TodoListItem = (props) => {
    return <li style={{color: props.color}}>{props.children}</li>
}

export default TodoListItem;