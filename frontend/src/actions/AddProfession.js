import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function AddProfession() {
    const [department, setDepartment] = React.useState([]);
    React.useEffect(() => {
        const getDepartment = async () => {
            const response = await axios.get(`http://localhost:5000/department`);
            setDepartment(response.data);
        }
        getDepartment();
    }, [])

    const [name, setName] = React.useState('');
    const [duration, setDuration] = React.useState('');
    const [education, setEducation] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [poster, setPoster] = React.useState('');
    const [department_id, setDepartment_id] = React.useState('');

    const navigate = useNavigate();

    const saveProfession = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000/profession/`, {
            name: name,
            duration: duration,
            education: education,
            description: description,
            poster: poster,
            department_id: department_id,
        });
        console.log(name, duration, education, description, poster, department_id)
        navigate('/profession');
    }

    return (
        <Container className='mt-1'>
            <h2 className='text-center'>Add Profession</h2>
            <Row>
                <Col md={{ span: 7, offset: 2 }}>
                    <Form onSubmit={saveProfession}>
                        <Form.Group className="mb-3" controlId="formControlText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control className='input' type="text" placeholder="Enter profession name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formControlText">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control className='input' type="number" min={1} max={4} placeholder="Enter profession duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formControlText">
                            <Form.Label>Education</Form.Label>
                            <Form.Control className='input' type="text" placeholder="Enter profession education" value={education} onChange={(e) => setEducation(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formControlText">
                            <Form.Label>Description</Form.Label>
                            <Form.Control className='input' as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formControlText">
                            <Form.Label>Poster</Form.Label>
                            <Form.Control className='input' type="text" placeholder="Enter profession poster" value={poster} onChange={(e) => setPoster(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formControlText">
                            <Form.Label>Department</Form.Label>
                            <Form.Select name="department_id" onChange={(e) => setDepartment_id(e.target.value)}>
                                <option key={0} value={0}>-- Choose Department --</option>
                                {department.map((data) => (
                                    <option value={data.id} key={data.id}>{data.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="warning" type="reset" href='/profession'>
                            Reset
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


