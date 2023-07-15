import { Card } from "react-bootstrap";
import "./CardResume";
export default function CardResumeColors(props) {
    const {subtitle, colorsStorage}=props;

    return (
        <div>
            <Card className="text-center p-2 card-resume">
                <Card.Body>
                    <Card.Subtitle>
                        <b>{subtitle}</b>
                    </Card.Subtitle>
                    <ul>
                        {colorsStorage.map((colors, index)=>(
                            <li key={index}>{colors.label}</li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
}
