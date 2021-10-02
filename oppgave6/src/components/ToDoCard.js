const ToDoCard = ({title, text, completeToDo}) => {
    return (
    <article>
        <h4>{title}</h4>
        <p>{text}</p>
        <button type="submit" onClick={() => completeToDo(title, text)}>Complete</button>
    </article>
)};

export default ToDoCard;