import { useState } from 'react';

const Form = ({action, method, submit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <section>
            <form action={action} method={method}>
                <label for="titleInput">Title</label>
                <input type="text" id="titleInput" onChange={(event) => setTitle(event.target.value)}/>

                <label for="contentInput">Content</label>
                <textarea id="contentInput" rows="8" onChange={(event) => setContent(event.target.value)}></textarea>

                <button type="submit" onClick={(event) => submit(event, title, content)}>Add</button>
            </form>
        </section>
)};

export default Form;