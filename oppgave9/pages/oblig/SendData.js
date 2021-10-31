import { useState } from "react"
import axios from 'axios'

const SendData = () => {
    const [inputState, setInputState] = useState({
        "name" : "",
        "lastName" : "",
        "food" : "",
        "color" : "",
        "age" : ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(inputState)
        const response = await axios.post("/api/favourites", inputState)
        console.log(response)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputState({
            ...inputState,
            [name] : value
        })
        console.log(inputState)
    }

    return (
        <div>
            <h3>Register new data</h3>
             <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={inputState.name} placeholder="YOUR NAME" onChange={(e) => handleChange(e)} /> <br/>
                <input type="text" name="lastName" value={inputState.lastName} placeholder="YOUR LASTNAME" onChange={(e) => handleChange(e)} /> <br/>
                <input type="text" name="food" value={inputState.food} placeholder="YOUR FAV FOOD" onChange={(e) => handleChange(e)} /> <br/>
                <input type="text" name="color" value={inputState.color} placeholder="YOUR FAV COLOR" onChange={(e) => handleChange(e)} /> <br/>
                <input type="number" name="age" value={inputState.age} placeholder="YOUR AGE" onChange={(e) => handleChange(e)} /> <br/>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default SendData;