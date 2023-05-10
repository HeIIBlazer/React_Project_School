import React from 'react'
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default function CardBox() {
    const [service, setService] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://645b35b599b618d5f3150a67.mockapi.io/services`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setService(arr);
            });
    }, []);

    return (
        <Container fluid className='mt-5 bg-light w-50'>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 className='mt-5 text-center'>CardBox</h2>
                    <Row xs={1} md={3} className='g-4 d-flex justify-content-center'>

                        {service.map((data) => (
                            <Col>
                                <Card className='m-2' key={data.id}>
                                    <Card.Img variant="top" src={data.image} style={{ height: 204 }} />
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
