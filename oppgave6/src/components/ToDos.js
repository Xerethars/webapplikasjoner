import ToDoCard from "./ToDoCard";

const ToDos = ({toDos, completeToDo}) => {
    return (
        <main>
            <h2>My Todos</h2>
            <div id="flexArticleWrapper">
                {toDos?.map((item) => {
                    return <ToDoCard title={item.title} text={item.content} completeToDo={completeToDo}/>
                })}
            </div>
        </main> 
)};

export default ToDos;