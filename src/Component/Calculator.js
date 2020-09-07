import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Calculator = (props) => {
  // Se declara una variable de estado para manejar los datos de la calculadora.
  // previousCalculation será el primer valor de cálculo luego de que se ejecute entryNumber.
  // entryNumber es el número que ingresa con a darle click a los botones de la calculadora, y puede iniciarse con un número mediante (initialValue).
  // window es el string que simula la pantalla de la calculadora, muestra la operación que el usuario esta realizando.
  // operator es el símbolo operador que hará la función matemática.
  // result es el total de la operación y estará relacionado con el botón =.

  const [operation, setOperation] = useState({
    previousCalculation: "0",
    entryNumber: props.initialValue,
    window: "",
    operator: "+",
    result: props.initialValue,
  });

  // Se crean 3 variables para manejar los Iconos de Fontawesome según su documentación.
  const calculatorIcon = <FontAwesomeIcon icon={faCalculator} />; // Icono para título.
  const gitHubIcon = <FontAwesomeIcon icon={faGithub} />; // Icono para profile.
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />; //Icono para  profile.

  // Se crea una función para manejar los números de la calculadora.
  // handleNumber es la función que se llama al momento de hacer click únicamente a los números de la calculadora.
  // La función recibe el número que se esta haciendo click.
  // Realiza el cálculo y actualiza los estados.
  // Función sin espera de return.

  const handleNumber = (number) => {
    // Se crea condicional para delimitar la cantidad de números que puede incluir el usuario.
    if (operation.entryNumber.length < 10) {
      // number es el parametro para recibir el número del botón al cual se le dió click.
      // Se crean variables para acceder a los atributos de la variable de estado.
      // Con la variable entryNumber se busca construir el número para la operación, por esto se concatena a esta variable el parametro "number".
      // La acción que indica que el entryNumber ya ha sido construido es el handleOperators (información en documentación de la función).
      // entryNumber se inicializa como un string para hacer de forma mas sencilla la concatenación.

      let previousCalculation = parseToNumberValid(
        operation.previousCalculation
      );
      let operator = operation.operator;
      let result = parseToNumberValid(operation.result);
      let entryNumber = operation.entryNumber + number;

      // Se crea un condicional para la lógica de la calculadora.
      // Se utiliza parseFloat para convertir el string que se recibe en previousCalculation y entryNumber en números decimales para realizar la opración matemática.

      if (operator === "+") {
        result = parseFloat(previousCalculation) + parseFloat(entryNumber);
      } else if (operator === "-") {
        result = parseFloat(previousCalculation) - parseFloat(entryNumber);
      } else if (operator === "/") {
        result = parseFloat(previousCalculation) / parseFloat(entryNumber);
      } else if (operator === "*") {
        result = parseFloat(previousCalculation) * parseFloat(entryNumber);
      }

      // Se accede a la variable de estado para cambiar los atributos "window", "result", "entryNumber".
      // En este caso, window es actualizado concatenando cada número seleccionado.
      // result actualiza el resultado de la operación.
      // entryNumber es actualizado con la variable que arriba se inicializo con el mismo nombre.
      // El resto de las variables se mantienen en el mismo estado.

      setOperation({
        ...operation,
        window: operation.window + number,
        result: result,
        entryNumber: entryNumber,
      });
    }
  };

  // Se crea una función para manejar los operadores.
  // Cuando se elige un operador, window guardara ese operador.
  // El atributo operador de la variable de estado es actualizado con el parámetro enviado (el símbolo clikeado por el usuario).
  // previousCalculation es actualizado con el resultado de la operación y entryNumber volverá a su estado inicial '' para esperar el próximo número.

  const handleOperators = (operator) => {
    // En este caso, window es actualizado concatenando cada operador seleccionado.

    setOperation({
      ...operation,
      window: operation.window + operator,
      operator: operator,
      previousCalculation: operation.result,
      entryNumber: "",
    });
  };

  // Se crea una función para manejar el símbolo =.
  // Se accede a la variable de estado para cambiar los atributos "previousCalculation", "entryNumber" y "window", para colocarlos a un valor inicial.

  const handleResult = () => {
    setOperation({
      ...operation,
      previousCalculation: "",
      entryNumber: "",
      window: "",
    });
  };

  // Se crea una función para manejar el botón AC o clear
  // Se accede a todos los atributos de la variable de estado para colocar todos los valores a su valor inicial.
  // En el caso de previousCalculation y result regresarán al valor inicial que se haya declarado en <Calculator initialValue =""/>

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

  // Diseño de HTML con Bootstrap.

  return (
    <>
      <div className="container">
        {/* Título de la calculadora */}
        <div className="title-box">
          <h1 className="principal-title">
            Calculator with React Hooks {calculatorIcon}
          </h1>
        </div>
        {/* Pantalla de Calculadora */}
        <div className="window">
          <div className="margin-win">
            <div className="color-title-window pad-cal">{operation.window}</div>
            <div className="color-title-window size-result">
              {parseToNumberValid(operation.result)}
            </div>
          </div>
        </div>
        {/* Botones de calculadora */}
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
        {/* Tarjeta profile */}
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
