import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

export default function EditDepartment() {
   const [name, setName] = React.useState('');

   const navigate = useNavigate();

   const { id } = useParams();

   React.useEffect(() => {
      const getDepartmentById = async () => {
         const response = await axios.get(
            `http://localhost:5000/department/${id}`
         );
         setName(response.data.name);
      };
      getDepartmentById();
   }, [id]);

   const updateDepartment = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:5000/department/${id}`, {
         name,
      });
      navigate('/department');
   };

   return (
      <Container className="mt-1">
         <h2 className="text-center">
            Edit Department{id} - {name}
         </h2>
         <Row>
            <Col md={{ span: 7, offset: 2 }}>
               <Form onSubmit={updateDepartment}>
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

                  <Button variant="primary" type="submit">
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
