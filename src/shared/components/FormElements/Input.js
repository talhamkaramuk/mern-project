import React, { useEffect, useReducer } from "react";

import { validate } from "../../util/validator";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "ON_BLUR": {
      return {
        ...state,
        isOnBlur: true,
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isOnBlur: false,
  });

  const { value, isValid, isOnBlur } = inputState;
  const { id, label, type, placeholder, rows, onInput, errorText, validators } =
    props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators,
    });
  };

  const onBlurHandler = () => {
    dispatch({ type: "ON_BLUR" });
  };

  const element =
    props.element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        onBlur={onBlurHandler}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        value={value}
        onChange={changeHandler}
        onBlur={onBlurHandler}
      />
    );

  return (
    <div
      className={`form-control ${
        !isValid && isOnBlur && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {element}
      {!isValid && isOnBlur && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
