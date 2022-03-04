import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNamesIsValid, setEnteredNamesIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNamesIsValid(true);
      return;
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (event.target.value === "") {
      setEnteredNamesIsValid(false);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNamesIsValid(false);
      return;
    }

    setEnteredName("");
    setEnteredNamesIsValid(true);
  };

  const nameInputIsInValid = !enteredNamesIsValid && enteredNameTouched;

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
