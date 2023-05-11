import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Departments from './Departments';
import SpecialtyList from './SpecialtyList';

export default function Specialties() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    return (
        <Container className='mt-1'>
            <h2>Specialties</h2>
            <Row>
                <Col md="3">
                    <h5>DEPARTMENTS</h5>
                    <Departments depId={activeIndex} onClickDepartment={(id) => setActiveIndex(id)} />
                </Col>

                <Col md="9">
                    <h5>SPECIALTIES LIST</h5>
                    <SpecialtyList departmentId={activeIndex} />
                </Col>
            </Row>
        </Container>
    )
}
