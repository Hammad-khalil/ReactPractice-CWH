import { useContext } from "react"
import { counterContext } from "../Context/Context"
const Component1 = () => {
    const counter = useContext(counterContext)
    return (
        <>
            <div>
                component 1 mein agaya count finally 🥳
            </div>
            <h6>{counter}</h6>
        </>
    )
}

export default Component1
