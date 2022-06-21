import React, {useState} from "react";

import "./App.css";
import Form from "./components/Form";
import FormList from "./components/FormList";

function App() {
  const [userList,setUserList] = useState([]);

  const addUserHandler = (uName,uAge) => {
    setUserList(() => {
      return [{name: uName, age: uAge}];
    });
  }
  return (
    <div className="App">
      <Form onAddUser = {addUserHandler}/>
      <FormList users = {userList}/>
    </div>
  );
}

export default App;
