import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SpecialtyList({ departmentId, searchValue }) {
    const [specialties, setSpecialties] = useState([]);
    useEffect(() => {
        const department_id = departmentId > 0 ? `/department/${departmentId}` : '';
        const getSpecialty = async () => {
            const response = await axios.get(`http://localhost:5000/profession${department_id}`);
            setSpecialties(response.data);
        };
        getSpecialty();
    }, [departmentId],);
    return (
        <>
            {specialties
            .filter((data) => {
                if (data.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return true;
                } 
                    return false;
                
            })
            .map((data) => (
                <Row key={data.id} className='m-2'>
                    <Col md="3">
                        <img src={data.poster} alt="Logo" className='mr-3 img-thumbnail' />
                    </Col>
                    <Col md="9">
                        <h5>{data.name}</h5>
                        <span className="fst-italic">Study duration: </span>{data.duration}<br />
                        <span className="fst-italic">Learning base: </span>{data.education}<br />
                        <span className="fst-italic">Department: </span>{data.department.name}<br />
                        <span className="fst-italic">Date published: </span>{data.createdAt}<br />
                        <Link to={`/detail/${data.id}`} className='me-1'>
                            Detail specialty
                        </Link>
                    </Col>
                </Row>
            ))}
        </>
    );
}
