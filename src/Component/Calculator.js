import React, { useState } from "react";

const Calculator = (props) => {
  // Se declara una variable de estado para manejar los datos de la calculadora.
  // firstNumber es el número con que se inicia la calculadora (initialValue), y posteriomente será el primer valor de cálculo.
  // secondNumber es el segundo número que ingresa a la calculadora.
  // window es el string que simula la pantalla de la calculadora, muestra la operación que el usuario esta realizando.
  // operator es el símbolo operador que hará la función matemática.
  // result es el total de la operación y estará relacionado con el botón =.

  const [operation, setOperation] = useState({
    firstNumber: props.initialValue,
    secondNumber: "",
    window: "",
    operator: "+",
    result: props.initialValue,
  });

  // Se crea una función para manejar los números de la calculadora.
  // handleNumber es la función que se llama al momento de hacer click únicamente a los números de la calculadora.
  // La función debe recibir el número que se esta haciendo click.
  // Realiza el cálculo y actualiza los estados.
  // Función sin espera de return.

  const handleNumber = (number) => {
    // number es el parametro para recibir el número del botón al cual se le dió click.
    // Se crean variables para acceder a los atributos de la variable de estado.
    // Con la variable secondNumber se busca construir el número para la operación, por esto se concatena a esta variable el parametro "number".
    // La acción que indica que el secondNumber ya ha sido construido es el handleOperators (información en documetnación de la función).
    // secondNumber se inicializa como un string para hacer de forma mas sencilla la concatenación.

    let firstNumber = parseToNumberValid(operation.firstNumber);
    let operator = operation.operator;
    let result = parseToNumberValid(operation.result);
    let secondNumber = operation.secondNumber + number;

    // Se crea un condicional para la lógica de la calculadora.
    // Se utiliza parseFloat para convertir el string que se recibe en firstNumber y secondNumber en números decimales para realizar la opración matemática.

    if (operator === "+") {
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operator === "-") {
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operator === "/") {
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
    } else if (operator === "*") {
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
    }

    // Se accede a la variable de estado para cambiar los atributos "window", "result", "secondNumber".
    // En este caso, window es actualizado concatenando cada número seleccionado
    // result actualiza el resultado de la operación.
    // secondNumber es actualizado con la variable que arriba se inicializo con el mismo nombre.
    // El resto de las variables se mantienen en el mismo estado.

    setOperation({
      ...operation,
      window: operation.window + number,
      result: result,
      secondNumber: secondNumber,
    });
  };

  // Se crea una función para manejar los operadores.
  // Cuando se elige un operador, window guardara ese operador.
  // El atributo operador de la variable de estado es actualizado con el parámetro enviado (el símbolo clikeado por el usuario).
  // firstNumber es actualizado con el resultado de la operación y secondNumber volverá a su estado inicial '' para esperar el próximo número.

  const handleOperators = (operator) => {
    // En este caso, window es actualizado concatenando cada operador seleccionado

    setOperation({
      ...operation,
      window: operation.window + operator,
      operator: operator,
      firstNumber: operation.result,
      secondNumber: "",
    });
  };

  // Se crea una función para manejar el símbolo =.
  // Se accede a la variable de estado para cambiar los atributos "firstNumber", "secondNumber" y "window", para colocarlos a un valor inicial.

  const handleResult = () => {
    setOperation({
      ...operation,
      firstNumber: "",
      secondNumber: "",
      window: "",
    });
  };

  // Se crea una función para manejar el botón AC o clear
  // se accede a todos los atributos de la variable de estado para colocar todos los valores a su valor inicial.

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

  // Se crea una función para indicar que hacer en el caso de que initialValue sea una letra y retorne NaN.
  // La función recibe un string

  const parseToNumberValid = (string) => {
    // Se declara la variable number, donde parseFloat convertira en número el string que reciba.

    let number = parseFloat(string);

    // Mediante el condicional, se transforma el string en número, filtrando los valores iniciales de letras, para cambiarlos a 0.

    if (isNaN(number)) {
      return 0;
    } else {
      return number;
    }
  };

  // Renderizado de componente utilizando Bootstrap para el diseño.

  return (
    <>
      <div className="container">
        <div className="window">
          <div className="margin-win">
            <p className="color-title pad-cal">{operation.window}</p>
            <p className="color-title size-result">
              {parseToNumberValid(operation.result)}
            </p>
          </div>
        </div>
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
    </>
  );
};

export default Calculator;
