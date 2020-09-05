import React, { useState } from "react";

 const Calculator = (props) => { 

  const [operation, setOperation] = useState({
    firstNumber: props.initialValue,
    secondNumber: "",
    window: "",
    operator: "+",
    result: props.initialValue
  });

  const handleNumber = (number) => {
   
    let firstNumber = parseToNumberValid(operation.firstNumber);
    let operator = operation.operator;
    let result = parseToNumberValid(operation.result);
    let secondNumber = operation.secondNumber + number;

    if (operator === "+") {
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operator === "-") {
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operator === "/") {
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
    } else if (operator === "*") {
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
    }

    setOperation({
      ...operation,
      window: operation.window + number,
      result: result,
      secondNumber: secondNumber,
    });
  };

  const handleOperators = (operator) => {

    setOperation({
      ...operation,
      window: operation.window + operator,
      operator: operator,
      firstNumber: operation.result,
      secondNumber: "",
    });
  };

  const handleResult = () => {
    setOperation({
      ...operation,
      firstNumber: "",
      secondNumber: "",
      window: "",
    });
  };

  const handleClear = () => {
    setOperation({
      ...operation,
      firstNumber: "0",
      secondNumber: "",
      window: "",
      operator: "+",
      result: 0,
    });
  };

  const parseToNumberValid = (string) => {
    let number = parseFloat(string);

    if (isNaN(number)) {
      return 0;
    }else{
      return number;
    }
  }

  return (
    <div>
      <div className="container">
        <h1>Calculadora</h1>
        <div className="row">
          <button
            type="button"
            className="white-button"
            onClick={() => handleNumber("1")}
          >
            1
          </button>
          <button
            type="button"
            className="white-button"
            onClick={() => handleNumber("2")}
          >
            2
          </button>
          <button
            type="button"
            className="white-button"
            onClick={() => handleNumber("3")}
          >
            3
          </button>
          <button
            type="button"
            className="white-button"
            onClick={() => handleOperators("+")}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="white-button"
            onClick={() => handleNumber("4")}
          >
            4
          </button>
          <button
            type="button"
            className="white-button"
            onClick={() => handleNumber("5")}
          >
            5
          </button>
          <button
            type="button"
            className="white-button"
            onClick={() => handleNumber("6")}
          >
            6
          </button>
          <button
            type="button"
            className="white-button"
            onClick={() => handleOperators("-")}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="white-button"
            onClick={() => handleNumber("7")}
          >
            7
          </button>
          <button
            type="button"
            className="white-button"
            onClick={() => handleNumber("8")}
          >
            8
          </button>
          <button
            type="button"
            className="white-button"
            onClick={() => handleNumber("9")}
          >
            9
          </button>
          <button
            type="button"
            className="white-button"
            onClick={() => handleOperators("*")}
          >
            -
          </button>
          <div className="row">
            <button
              type="button"
              className="white-button"
              onClick={() => handleOperators("/")}
            >
              -
            </button>
            <button
              type="button"
              className="white-button"
              onClick={() => handleNumber("0")}
            >
              0
            </button>
            <button
              type="button"
              className="white-button"
              onClick={() => handleNumber(".")}
            >
              .
            </button>
            <button
              type="button"
              className="white-button"
              onClick={() => handleResult()}
            >
              =
            </button>
            <button
              type="button"
              className="white-button"
              onClick={() => handleClear()}
            >
              AC
            </button>
          </div>
        </div>
        <h2>Numero: {operation.number}</h2>
        <br></br>
        <h2>Ventana: {operation.window}</h2>
        <br></br>
        <h2>Resultado:{parseToNumberValid(operation.result)}</h2>
      </div>
    </div>
  );
}

export default Calculator;
