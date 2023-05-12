import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function DetailSpecialty() {
    const [specialty, setSpecialty] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const { id } = useParams();
    React.useEffect(() => {
        const getSpecialty = async () => {
            const response = await axios.get(`http://localhost:5000/profession/${id}`);
            setSpecialty(response.data);
            setDepartment(response.data.department);
        };
        getSpecialty();
    }, [id])
    return (
        <>
            <Container className='mt-1'>
                <h2 className='text-center m-4'> Specialty #{specialty.id}</h2>
                <Row className='m-2' key={specialty.id}>
                    <Col md='6'>
                        <img className='mr-3' style={{ "object-fit": "contain", "max-width": "100%"}} src={specialty.poster} alt="Logo" />
                    </Col>
                    <Col md='6'>
                        <h5>{specialty.name}</h5>
                        <p><span className='fst-italic'>Study duration: </span>{specialty.name}</p>
                        <p><span className='fst-italic'>Learning base: </span>{specialty.education}</p>
                        <p><span className='fst-italic'>Description: </span>{specialty.description}</p>
                        <p><span className='fst-italic'>Department: </span>{department.name}</p>
                        <p><span className='fst-italic'>Date published: </span>{specialty.createdAt}</p>
                        <Link to='/specialty' className='me-1'>Specialties List</Link>
                    </Col>
                </Row>

            </Container>
        </>
    )
}