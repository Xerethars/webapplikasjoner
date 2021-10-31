import { useState } from "react"

const SendData = () => {
    const [inputState, setInputState] = useState({})

    return (
        <div>
            <h3>Register new data</h3>
             <form onSubmit={handleSubmit}>
                <input type="text" name="name" value=""></input>
            </form>
        </div>
    )
}