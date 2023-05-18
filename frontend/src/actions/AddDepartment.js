import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function AddDepartment() {
   const [name, setName] = React.useState('');

   const navigate = useNavigate();

   const saveDepartment = async (e) => {
      e.preventDefault();
      await axios.post(`http://localhost:5000/department/`, {
         name: name,
      });
      console.log(name);
      navigate('/department');
   };

   return (
      <Container className="mt-1">
         <h2 className="text-center">Add Department</h2>
         <Row>
            <Col md={{ span: 7, offset: 2 }}>
               <Form onSubmit={saveDepartment}>
                  <Form.Group className="mb-3" controlId="formControlText">
                     <Form.Label>Name</Form.Label>
                     <Form.Control
                        className="input"
                        type="text"
                        placeholder="Enter department name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </Form.Group>

                  <Button variant="success" type="submit">
                     Submit
                  </Button>

                  <Button
                     variant="danger"
                     onClick={() => navigate('/department')}
                     className="ms-1"
                  >
                     Cancel
                  </Button>
               </Form>
            </Col>
         </Row>
      </Container>
   );
}
