import ToDoCard from "./ToDoCard";

const ToDos = ({toDos}) => {
    return (
        <main>
            <h2>My Todos</h2>
            <div id="flexArticleWrapper">
                {toDos?.map((item) => {
                    return <ToDoCard title={item.title} text={item.content}/>
                })}
            </div>
        </main> 
)};

export default ToDos;