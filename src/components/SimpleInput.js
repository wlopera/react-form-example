import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNamesIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNamesIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNamesIsValid) {
      return;
    }

    console.log("Nombre:", enteredName);
    setEnteredNameTouched(false);
    setEnteredName("");
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Nombre</label>
        <input
          placeholder="Nombre"
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInValid && (
          <p className="error-text">El Nombre no puede ser vacio</p>
        )}
      </div>
      <div className="form-actions">
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default SimpleInput;
