import PropTypes from "prop-types"
import { useState, useEffect } from "react";
// import { useState } from "react";
const Counter2 = (props) => {
    let equalCount1;
    equalCount1 = props.count1;
    const [tempvalue, setTempvalue] = useState(0);

    useEffect(() => {
        console.warn("Value OF EQUALCOUNT1 WHICH IS EQUAL TO COUNT sended via PROPS CHANGES TOO IN Counter2.jsx")
    }, [equalCount1]);

    useEffect(() => {
        console.warn("Value OF TEMPVALUE CHANGES TOO IN Counter2.jsx")
    }, [tempvalue]);

    return (
        <>
            <div>
                <h3>Hi I am Counter 2</h3>
                <h3>Value from Count 1 is {props.count1}</h3>
                <h3>Value of {"  ''  "}equalCount1{"  ''  "} which is equal to count1 is : {equalCount1}</h3>
            </div>

            <div>
                <h3>Another useState which is temp value {tempvalue}</h3>
                <button onClick={() => { setTempvalue(equalCount1) }}>Make temp value = Props/count1</button>
            </div>
        </>
    )
}
Counter2.propTypes = {
    count1: PropTypes.number.isRequired
};

export default Counter2;
