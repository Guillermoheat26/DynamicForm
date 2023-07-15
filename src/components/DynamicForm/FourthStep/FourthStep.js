import Select from "react-select";
import { useState } from "react";
import { Col, Container, Row} from "react-bootstrap";
import "./FourthStep.css";
import Resume from "../Resume";
const options=[
    {id:1, value:"Blue", label:"Blue 🟦"},
    {id:2, value:"Red", label:"Red 🟥"},
    {id:3, value:"Yellow", label:"Yellow 🟨"},
    {id:4, value:"Black", label:"Black ⬛"},
    {id:5, value:"White", label:"White ⬜"},
    {id:6, value:"Green", label:"Green 🟩"},
    {id:7, value:"Gray", label:"Gray ⚪"},
];

export default function FourthStep({setStep}) {
    const [modal, setModal]= useState(false);
    const [selectOption, setSelectOption]=useState(null);
    const colorSer= JSON.stringify(selectOption);
    localStorage.setItem("colors", colorSer);

    return(
        <div>
            <h2>Fourth Step</h2>
            <h4>Do you want to add any Color</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                <Col lg="7" className="space-select">
                        <h5>Select your favorite color</h5>
                        <Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />
                    </Col>
                </Row>
                <div className="send-form">
                    <p className="result p-3" onClick={()=> setModal(true)}>
                        View result 🙌
                    </p>
                </div>
                {modal && (
                    <Resume showModal={modal} setModal={setModal} setStep={setStep}/>
                )}
            </Container>
        </div>
    );
}
