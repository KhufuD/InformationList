import "./Form.css";
import Card from "./UI/Card";

const Form = () => {
return(
<Card>
    <form className="input-form">
        <label className="User-label">Username</label>
        <input className="User-input"></input>
        <label className="User-label">Age(Years)</label>
        <input className="User-input"></input>
        <button type="submit" className="submit-button">Add User</button>
    </form>
</Card>
);
};

export default Form;