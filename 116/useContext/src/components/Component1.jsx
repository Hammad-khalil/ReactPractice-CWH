import { useContext } from "react";
import { counterContext } from "../Context/Context";

const Component1 = () => {
    const { count, name } = useContext(counterContext);

    return (
        <>
            <div>
                Component 1 mein agaya count aur name finally 🥳
            </div>
            <h6>Counter: {count}</h6>
            <h6>Name: {name}</h6>
        </>
    );
}

export default Component1;
