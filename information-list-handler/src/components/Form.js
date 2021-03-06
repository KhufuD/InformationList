import React, {useState} from 'react';
import "./Form.css";
import Button from "./UI/Button";
import Card from "./UI/Card";
import ErrorModal from './UI/ErrorModal';


const Form = (props) => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:"No input", message: "please enter some details"
      });
      return;
    }if(+enteredAge < 1 || +enteredAge>100) {
      setError({
        title:"Invalid Age", message: "please enter valid age (0<age<100)"
      });
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
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card>
      <form className="input-form" onSubmit={addUserHandler}>
        <label className="User-label">Username</label>
        <input className="User-input" id="username" value={enteredUsername} type="text" onChange={usernameChangeHandler}></input>
        <label className="User-label">Age(Years)</label>
        <input className="User-input" type="number" id="age" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
        
      </form>
    </Card>
    </div>
  );
};

export default Form;
