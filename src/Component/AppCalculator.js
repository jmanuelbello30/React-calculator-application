
import React, { useState } from "react";
import Calculator from "./Calculator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const AppCalculator = () => {
  // This component was created to contain the entire application.
  // In this, the calculator is called and the initial value change is handled with an input for the user.

  // A state variable is declared to construct the initial value initialValueConstructor and handle it.
  const [initialitation, setInitialitation] = useState({
    initialValueConstructor: "",
    initialValue: "0",
  });

  // 1 variable is created to handle Fontawesome Icons according to its documentation.
  const calculatorIcon = <FontAwesomeIcon icon={faCalculator} />; // Icon for title.

  // A function is created to handle the update event of the field when the initial value is entered.
  // and save it to the initialValueConstructor state variable.
  const handleinitialValueConstructor = (e) => {
    setInitialitation({
      ...initialitation,
      initialValueConstructor: e.target.value,
    });
  };

  // A function is created to handle the click event of the Change Initial Value button.
  // The value that was stored in the attribute of the initialValueConstructor state variable is the value that is currently updated as
  // the initial value (initialValue).
  // Note: this event is added so as not to trigger for each change in the input an update in the calculator component prop.

  const changeInitialValue = () => {
    setInitialitation({
      ...initialitation,
      initialValue: initialitation.initialValueConstructor,
    });
  };

  // HTML Design with Bootstrap.

  return (
    <>
      <div className="container">
        {/* Calculator title */}
        <div className="title-box">
          <h1 className="principal-title">
            Calculator with React Hooks {calculatorIcon}
          </h1>
        </div>
        {/* Change Initial Value Input */}
        <div className="input-group mb-3">
          <div>
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              onChange={(e) => handleinitialValueConstructor(e)}
            />
          </div>

          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary changue-value-btn"
              type="button"
              id="button-addon1"
              onClick={() => changeInitialValue()}
            >
              Change Initial Value
            </button>
          </div>
        </div>
      </div>
      {/* Component Calculator */}
      <Calculator initialValue={initialitation.initialValue} />
    </>
  );
};

export default AppCalculator;