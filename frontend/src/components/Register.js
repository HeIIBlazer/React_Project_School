import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confPassword, setConfPassword] = useState('');
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();

   const Register = async (e) => {
      e.preventDefault();
      try {
         await axios.post(`http://localhost:5000/users/register`, {
            name: name,
            email: email,
            password: password,
            confPassword: confPassword,
         });
         navigate('/login');
      } catch (error) {
         if (error.response) {
            setMsg(error.response.data.msg);
         }
      }
   };

   return (
      <Container className="mt-1">
         <h2 className="text-center mt-3">Register form</h2>
         <Row className="d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
               <Card className="shadow">
                  <Card.Body>
                     <Form onSubmit={Register}>
                        <p className="has-text-centered">{msg}</p>
                        <Form.Group className="mb-3">
                           <Form.Label className="text-center">
                              User Name
                           </Form.Label>
                           <Form.Control
                              type="text"
                              placeholder="Enter user name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                           />
                        </Form.Group>
                        <Form.Group className="mb-3">
                           <Form.Label className="text-center">
                              Email address
                           </Form.Label>
                           <Form.Control
                              type="email"
                              placeholder="Enter email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                           />
                        </Form.Group>
                        <Form.Group className="mb-3">
                           <Form.Label className="text-center">
                              Password
                           </Form.Label>
                           <Form.Control
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                           />
                        </Form.Group>
                        <Form.Group className="mb-3">
                           <Form.Label className="text-center">
                              Confirm Password
                           </Form.Label>
                           <Form.Control
                              type="password"
                              placeholder="Confirm Password"
                              value={confPassword}
                              onChange={(e) => setConfPassword(e.target.value)}
                           />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                           <Button
                              variant="primary"
                              type="submit"
                              className="w-50"
                           >
                              Register
                           </Button>
                        </div>
                     </Form>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   );
}
