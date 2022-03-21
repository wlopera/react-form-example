import useBasicInput from "../hooks/use-basic-input";
import useInput from "../hooks/use-input";

const BasicForm = () => {
  const inNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurhandler: firstNameBlurhandler,
    reset: resetFirstNameInput,
  } = useBasicInput(inNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurhandler: lastNameBlurhandler,
    reset: resetLastNameInput,
  } = useBasicInput(inNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid =
    enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("Nombre:", enteredFirstName);
    console.log("Apellido:", enteredLastName);
    console.log("correo:", enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="firstname"
            value={enteredFirstName}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurhandler}
          />
          {firstNameHasError && (
            <p className="error-text">El Nombre no puede ser vacio</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Apellido</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurhandler}
          />
          {lastNameHasError && (
            <p className="error-text">El Nombre no puede ser vacio</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Correo Electrónico</label>
        <input
          type="text"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Correo inválido</p>}
      </div>
      <div className="form-actions">
        <button className="" disabled={!formIsValid}>
          Enviar
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
