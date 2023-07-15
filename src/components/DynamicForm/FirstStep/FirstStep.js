import "./FirstStep.css";
import CardFruit from "./CardFruit";
import { Container, Row } from "react-bootstrap";
import { useState} from "react";

export const fruits = [
    {
        id:1,
        icon:"🍅",
        name:"Tomato",
        description:"Some quick example to build on the card title and make uo the bulk of the card's content",
    },
    {
        id:2,
        icon:"🫐",
        name:"BlueBerries",
        description:"Some quick example to build on the card title and make uo the bulk of the card's content",
    },
    {
        id:3,
        icon:"🍌",
        name:"Banana",
        description:"Some quick example to build on the card title and make uo the bulk of the card's content",
    },
    {
        id:4,
        icon:"🍹",
        name:"Tropical Drink",
        description:"Some quick example to build on the card title and make uo the bulk of the card's content",
    },
    {
        id:5,
        icon:"🍷",
        name:"Red Wine",
        description:"Some quick example to build on the card title and make uo the bulk of the card's content",
    },
    {
        id:6,
        icon:"🍺",
        name:"Beer",
        description:"Some quick example to build on the card title and make uo the bulk of the card's content",
    },
];

export default function FirstStep() {
    const [selectedCard, setSelectedCard] = useState(null);

    const clickCard = (fruit) =>{
        setSelectedCard(fruit.id);
        localStorage.setItem("fruitName", fruit.name);
        localStorage.setItem("iconFruit", fruit.icon);
    };


    return(
        <div>
            <h2>Choose your favorite fruit or drink</h2>
            <h4>Select your fruit or Drink and then click the button of "Next Step"</h4>
            <Container className="p-5 text-center">
                <Row>
                    {fruits.map ((fruit, index)=>(
                        <CardFruit
                            fruit={fruit}
                            key={index}
                            clickCard={clickCard}
                            selectedCard={selectedCard}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
    
}
