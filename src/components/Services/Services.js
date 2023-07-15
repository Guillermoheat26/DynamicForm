import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/software-development.png";
import imgCourse2 from "../../assets/img/servicios-de-consultoria.png";
import imgCourse3 from "../../assets/img/telefono-movil.png";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "Web applications development",
            subtitle: "These applications can range from interactive and dynamic websites to complex web systems. Web development involves programming languages such as HTML, CSS, and JavaScript, as well as specific frameworks and tools such as React, Angular, or Django.",
            image: imgCourse1,
            footer: "Go to the course ➡️",
            link: "#!",
        },
        {
            title: "Consultancy",
            subtitle: "Business strategy, process optimization, marketing, information technology management, among others. Consultants analyze customer challenges and needs and provide personalized recommendations and solutions to improve your operation and achieve your goals.",
            image: imgCourse2,
            footer: "Go to the course ➡️",
            link: "#!",
        },
        {
            title: "Mobile application development",
            subtitle: "Creating applications for mobile devices, such as smartphones and tablets. Mobile app development involves using programming languages like Java or Kotlin for Android, and Swift or Objective-C for iOS. These apps can be native or cross-platform (developed once and running on multiple platforms).",
            image: imgCourse3,
            footer: "Go to the course ➡️",
            link: "#!",
        },
    ];

    return (
        <div className="services p-4 mt-5" id="services">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center">
                            Check some of my services that i did
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
