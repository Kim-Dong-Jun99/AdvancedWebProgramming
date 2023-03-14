import React, {useState, useEffect} from "react";

let l = 0;
const UseEffectTest = () => {
    const [count, setCount] = useState(0);
    const countUp = () => setCount(count + 1);
    useEffect(() => {
        l = l + 1;
        console.log("useEffect!", count);
    });
    return (
        <>
            <p>{count}번 클릭!</p>
            <button onClick={countUp}>Click Me</button>
        </>
    );
}

export default UseEffectTest;