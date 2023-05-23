import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function UsersList() {
   const [users, setUsers] = React.useState([]);

   const getUsers = async () => {
      const response = await axios.get(`http://localhost:5000/users/users`);
      setUsers(response.data);
   };

   React.useEffect(() => {
      getUsers();
   }, []);

   return (
      <Container className="mt-1">
         <h2 className="text-center mt-3">Users List </h2>
         <Row>
            <Col md={{ span: 9, offset: 2 }}>
               <Table striped>
                  <thead>
                     <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                     </tr>
                  </thead>
                  <tbody>
                     {users.map((users, index) => (
                        <tr key={users.id}>
                           <td>
                              {index + 1}. #{users.id}
                           </td>
                           <td>{users.name}</td>
                           <td>{users.email}</td>
                           <td>{users.role}</td>
                        </tr>
                     ))}
                  </tbody>
               </Table>
            </Col>
         </Row>
      </Container>
   );
}
