import React, {useState} from 'react';
import "./Form.css";
import Button from "./UI/Button";
import Card from "./UI/Card";


const Form = (props) => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return;
    }if(+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');

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
        <input className="User-input" id="username" value={enteredUsername} type="text" onChange={usernameChangeHandler}></input>
        <label className="User-label">Age(Years)</label>
        <input className="User-input" type="number" id="age" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
        
      </form>
    </Card>
  );
};

export default Form;
