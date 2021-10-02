const ToDoCard = ({title, text}) => {
    return (
    <article>
        <h4>{title}</h4>
        <p>{text}</p>
        <button type="submit">Complete</button>
    </article>
)};

export default ToDoCard;