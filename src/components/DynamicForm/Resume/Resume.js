import { Button, CardGroup, Modal } from "react-bootstrap";
import CardResume from "./CardResume/CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies";
import CardResumeColors from "./CardResume/CardResumeColors";
export default function Resume({showModal, setModal, setStep}) {
    const favouriteFruit=localStorage.getItem('fruitName');
    const fruitIcon= localStorage.getItem('iconFruit');
    const hobbiesStorage=JSON.parse(localStorage.getItem('hobbies'));
    const addiotionalHobbie = localStorage.getItem('additionalHobbie');
    const comment = localStorage.getItem('comment');
    const colorsStorage=JSON.parse(localStorage.getItem('colors'));

    const clearForm = () =>{
        localStorage.clear();
        setModal(false);
        setStep(1);
    };

    return(
        <Modal
            show={showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={clearForm}
        >
            <Modal.Header closeButton>
                <Modal.Title>Congratulations !🥳 🎉</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Here you are your resume</h4>
                <CardGroup className="mt-4">
                    {favouriteFruit && fruitIcon &&(
                        <CardResume 
                            title={fruitIcon}
                            subtitle="Your favourite fruit or Drink is"
                            text={favouriteFruit}
                        />
                    )}
                    {hobbiesStorage &&(
                        <CardResumeHobbies 
                            subtitle="Your hobbies"
                            text={addiotionalHobbie}
                            hobbiesStorage={hobbiesStorage}
                        />
                    )}
                    {comment && (
                        <CardResume
                            subtitle="And for the last this is the comment"
                            text={comment}
                        />
                    )}
                    {colorsStorage && (
                        <CardResumeColors 
                        subtitle="Your Favorite Color is:"                        
                        colorsStorage={colorsStorage}
                    />
                    )}
                </CardGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={clearForm} variant="outline-dark">
                    Exit and clear form
                </Button>
            </Modal.Footer>
        </Modal>
    );

}
