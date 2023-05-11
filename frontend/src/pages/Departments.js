import React from 'react'
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Departments({ depId, onClickDepartment }) {
    const [departments, setDepartment] = useState([]);

    useEffect(() => {
        const getDepartment = async () => {
            const response = await axios.get(`http://localhost:5000/department`);
            setDepartment(response.data);
        };
        getDepartment();
    }, []);
    return (
        <>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem
                        style={{ cursor: 'pointer' }}
                        key={0}
                        onClick={() => onClickDepartment(0)}
                        className={depId === 0 ? 'active' : ''}
                    >
                        All
                    </ListGroupItem>
                    {departments.map((data) => (
                        <ListGroupItem
                            style={{ cursor: 'pointer' }}
                            key={data.id}
                            onClick={() => onClickDepartment(data.id)}
                            className={depId === data.id ? 'active' : ''}
                        >
                            {data.name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Card>
        </>
    )
}
