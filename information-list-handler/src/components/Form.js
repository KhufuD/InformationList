import React, {useState} from 'react';
import "./Form.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

const Form = () => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername,enteredAge);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form className="input-form" onSubmit={addUserHandler}>
        <label className="User-label">Username</label>
        <input className="User-input" id="username" type="text" onChange={usernameChangeHandler}></input>
        <label className="User-label">Age(Years)</label>
        <input className="User-input" type="number" id="age" onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
        
      </form>
    </Card>
  );
};

export default Form;
