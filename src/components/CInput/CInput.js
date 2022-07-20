import { Input } from "react-bootstrap";
import { Form } from "react-bootstrap";
const CInput = (props) => {
    const inputChangeHandlers = (e) => {
        props.inputChangeHandler(e);
    }
    const handleClick = () => {
        props.handleClick();
    }
    return (
        <>
            <Form.Group controlId={props.id} className={props.className1}>
                {
                    props.label && (
                        <Form.Label>{props.label}</Form.Label>
                    )
                }

                <Form.Control type={props.type}
                    placeholder={props.placeHolder}
                    rows={props.rows}
                    name={props.name}
                    readOnly={props.readonly}
                    onChange={inputChangeHandlers}
                    value={props.datavalue}
                    className={props.className2}
                    maxLength={props.maxLength ? props.maxLength : ""}
                />
                <span className="error-message">{props.errorMessage}</span>
            </Form.Group>
        </>
    );
}

export default CInput;
