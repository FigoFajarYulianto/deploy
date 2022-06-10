import { Button } from "reactstrap";


export function GreenButton(buttonName) {

    return(
        <>
            <Button type="button" className="btn choice-btn fw-bold">
                {buttonName}
            </Button>
        </>
    )
}

export default GreenButton