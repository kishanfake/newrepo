import { Button } from "react-bootstrap";

const CButton = (props) => {
    return (
        <>
            <Button
                type={props.type}
                variant={props.variant}
                className={props.className}
                onClick={props.onClickButton}
            >
                {props.name}
            </Button>
        </>
    );
}

export default CButton;
