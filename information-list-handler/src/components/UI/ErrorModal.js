import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
    return(
        <div>
            <div className="backdrop" onClick={props.onConfirm}/>
        <Card>
            <header>
            <h2>{props.title}</h2>
            </header>
            <div>
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