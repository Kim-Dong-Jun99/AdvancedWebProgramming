import React, {useState, useEffect} from "react";

const Calculator = () => {
    const [num1, setNum1] = useState(6);
    const [num2, setNum2] = useState(2);

    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(0);
    const [mul, setMul] = useState(0);
    const [div, setDiv] = useState(0);
    const handleNum1Change = (e) => {
        setNum1(e.target.value);
    };

    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    };

    function addHandler() {
        setAdd(Number(num1) + Number(num2));
    }

    function subHandler() {
        setSub(num1 - num2);
    }

    function mulHandler() {
        setMul(num1 * num2);
    }

    function divHandler() {
        setDiv(num1 / num2);
    }

    useEffect(() => {
        addHandler();
        subHandler();
        mulHandler();
        divHandler();
    }, [handleNum1Change, handleNum2Change]);
    return (
        <div align="center">
            <h2> GCU Calculator </h2>
            <input type="number" value={num1} onChange={handleNum1Change}/>
            <input type="number" value={num2} onChange={handleNum2Change}/>
            <p>
                <button onClick={addHandler}> Add</button>
                {add}
                <button onClick={subHandler}> Sub</button>
                {sub}
                <button onClick={mulHandler}> Mul</button>
                {mul}
                <button onClick={divHandler}> Div</button>
                {div}
            </p>
        </div>
    );
};
export default Calculator;