import React from "react";

import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import "./Auth.css";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={onSubmitHandler}>
        <Input
          element="input"
          type="email"
          id="email"
          label="Email"
          validators={[VALIDATOR_EMAIL]}
          errorText="Please enter a valid email!"
          onInput={inputHandler}
        />
        <Input
          element="input"
          type="password"
          id="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(8)]}
          errorText="Please enter a valid password (at least 8 characters)!"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
