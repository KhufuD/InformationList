import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";

const ErrorModal = (props) => {
    return(
        <div>
            <div className="backdrop" onClick={props.onConfirm}/>
        <Card className="error-modal">
            <header>
            <h2>{props.title}</h2>
            </header>
            <div className="content" >
                <p>{props.message}</p>
            </div>
            <footer>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
        </div>
    );
};

export default ErrorModal;