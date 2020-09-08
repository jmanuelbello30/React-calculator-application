import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Calculator = (props) => {
  // we declare a state variable to handle the calculator data.
  // previousCalculation will be the first calculation value after entryNumber is executed.
  // entryNumber is the number that you enter by clicking on the calculator buttons,
  // and you can start with a different number by inputting initial Value.
  // window is the string that simulates the calculator screen, it shows the operation that the user is performing.
  // operator is the operator symbol that will do the math function.
  // result is the total of the operation and will be related to the button =.

  const [operation, setOperation] = useState({
    previousCalculation: "0",
    entryNumber: props.initialValue,
    window: "",
    operator: "+",
    result: props.initialValue,
  });

  // 2 variables are created to handle Fontawesome icons according to their documentation.

  const gitHubIcon = <FontAwesomeIcon icon={faGithub} />; // Profile icon.
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />; // Profile icon.

  // A function is created to handle the calculator numbers.
  // handleNumber is the function that is called when clicking only on the numbers in the calculator.
  // The function receives the number that is being clicked.
  // Perform the calculation and update the statuses.
  // Function without waiting for return.

  const handleNumber = (number) => {
    // A conditional is created to delimit the number of numbers that the user can include.
    if (operation.entryNumber.length < 10) {
      // number is the parameter to receive the number of the button that was clicked.
      // Variables are created to access the attributes of the state variable.
      // With the entryNumber variable we seek to construct the number for the operation,
      // for this reason the "number" parameter is concatenated to this variable.
      // The action that indicates that the entryNumber has already been constructed is
      // the handleOperators (information in the function documentation).
      // entryNumber is initialized as a string to make concatenation easier.

      let previousCalculation = parseToNumberValid(
        operation.previousCalculation
      );
      let operator = operation.operator;
      let result = parseToNumberValid(operation.result);
      let entryNumber = operation.entryNumber + number;

      // A conditional is created for the calculator logic.
      // ParseFloat is used to convert the string that is received in previousCalculation and
      // entryNumber in decimal numbers to perform the mathematical operation.

      if (operator === "+") {
        result = parseFloat(previousCalculation) + parseFloat(entryNumber);
      } else if (operator === "-") {
        result = parseFloat(previousCalculation) - parseFloat(entryNumber);
      } else if (operator === "/") {
        result = parseFloat(previousCalculation) / parseFloat(entryNumber);
      } else if (operator === "*") {
        result = parseFloat(previousCalculation) * parseFloat(entryNumber);
      }

      // The state variable is accessed to change the attributes "window", "result", "entryNumber".
      // In this case, window is updated by concatenating each selected number.
      // result updates the result of the operation.
      // entryNumber is updated with the variable that was initialized with the same name above.
      // The rest of the variables remain in the same state.

      setOperation({
        ...operation,
        window: operation.window + number,
        result: result,
        entryNumber: entryNumber,
      });
    }
  };

  // A function is created to handle the operators.
  // When an operator is chosen, window will save that operator.
  // The operator attribute of the state variable is updated with the parameter sent (the symbol clicked by the user).
  // previousCalculation is updated with the result of the operation and
  // entryNumber will return to its initial state '' to wait for the next number.

  const handleOperators = (operator) => {
    // In this case, the window is updated by concatenating each selected operator.

    setOperation({
      ...operation,
      window: operation.window + operator,
      operator: operator,
      previousCalculation: operation.result,
      entryNumber: "",
    });
  };

  // A function is created to handle the symbol =.
  // The state variable is accessed to change the attributes "previousCalculation", "entryNumber" and "window",
  // to set them to an initial value.

  const handleResult = () => {
    setOperation({
      ...operation,
      previousCalculation: "",
      entryNumber: "",
      window: "",
    });
  };

  // A function is created to handle the AC or clear button
  // All attributes of the state variable are accessed to reset all values ​​to their initial value.
  // In the case of previousCalculation and result they will return to the initial value that has been placed in the input of Initial Value.

  const handleClear = () => {
    setOperation({
      ...operation,
      previousCalculation: "0",
      entryNumber: props.initialValue,
      window: "",
      operator: "+",
      result: props.initialValue,
    });
  };

  // A function is created to indicate what to do in the case that initialValue is a letter and returns NaN.
  // The function receives a string.

  const parseToNumberValid = (string) => {
    // The variable number is declared, where parseFloat will convert the string it receives into a number.

    let number = parseFloat(string);

    // Using the conditional, the string is transformed into a number, filtering the initial values ​​of letters, to change them to 0.

    if (isNaN(number)) {
      return 0;
    } else {
      return number;
    }
  };

  // Since the requirement is to have the InitialValue in the calculator component, this props was included in the useEffect for
  // allow access to the props directly from the effect and update the variables entryNumber and result.

  useEffect(() => {
    setOperation({
      ...operation,
      entryNumber: props.initialValue,
      result: props.initialValue,
    });
  }, [props]);

  // HTML Design with Bootstrap.

  return (
    <>
      <div className="container">
        {/* Calculator screen */}
        <div className="window">
          <div className="margin-win">
            <div className="color-title-window pad-cal">{operation.window}</div>
            <div className="color-title-window size-result">
              {parseToNumberValid(operation.result)}
            </div>
          </div>
        </div>
        {/* Calculator buttons */}
        <div className="cal-buttons">
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleNumber("7")}
            >
              7
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleNumber("8")}
            >
              8
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleNumber("9")}
            >
              9
            </button>
            <button
              type="button"
              className="btn btn-outline-dark operator-color size-letter-btn"
              onClick={() => handleOperators("+")}
            >
              +
            </button>
          </div>
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleNumber("4")}
            >
              4
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleNumber("5")}
            >
              5
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleNumber("6")}
            >
              6
            </button>
            <button
              type="button"
              className="btn btn-outline-dark operator-color size-letter-btn"
              onClick={() => handleOperators("-")}
            >
              -
            </button>
          </div>
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleNumber("1")}
            >
              1
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleNumber("2")}
            >
              2
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleNumber("3")}
            >
              3
            </button>
            <button
              type="button"
              className="btn btn-outline-dark operator-color"
              onClick={() => handleOperators("*")}
            >
              X
            </button>
          </div>
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleNumber("0")}
            >
              0
            </button>
            <button
              type="button"
              className="btn btn-outline-dark operator-color size-letter-btn"
              onClick={() => handleNumber(".")}
            >
              .
            </button>
            <button
              type="button"
              className="btn btn-outline-dark operator-color"
              onClick={() => handleOperators("/")}
            >
              /
            </button>
            <button
              type="button"
              className="btn btn-outline-dark operator-color"
              onClick={() => handleClear()}
            >
              AC
            </button>
          </div>
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-primary btnsymboleq size-letter-btn"
              onClick={() => handleResult()}
            >
              =
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {/* Profile card  */}
        <div className="card features">
          <div className="cardheader"></div>
          <div className="info">
            <div className="made-by">Made by J.M</div>
            <div className="desc">Developer</div>
            <div className="desc">Geek Gamer </div>
          </div>
          <div className="bottom">
            <a
              className="icons-style"
              href="https://github.com/jmanuelbello30?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              {gitHubIcon}
            </a>
            <a
              className="icons-style"
              href="https://www.linkedin.com/in/belloal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkedinIcon}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
