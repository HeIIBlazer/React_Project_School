import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();

   const Auth = async (e) => {
      e.preventDefault();
      try {
         await axios.post(`http://localhost:5000/users/login`, {
            email: email,
            password: password,
         });
         navigate('/');
         window.location.reload();
      } catch (error) {
         if (error.response) {
            setMsg(error.response.data.msg);
         }
      }
   };
   return (
      <Container className="mt-1">
         <h2 className="text-center mt-3">Login form</h2>
         <Row className="d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
               <Card className="shadow">
                  <Card.Body>
                     <Form onSubmit={Auth}>
                        <p className="has-text-centered">{msg}</p>
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
                        <Button
                           variant="primary"
                           type="submit"
                           className="w-100"
                        >
                           Login
                        </Button>
                     </Form>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   );
}
