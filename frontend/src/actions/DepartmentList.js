import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


export default function DepartmentList() {
   const [department, setDepartment] = React.useState([]);

   const getDepartment = async () => {
      const response = await axios.get(`http://localhost:5000/department`);
      setDepartment(response.data);
   };

   const deleteDepartment = async (id) => {
      if (window.confirm('Are you sure?')) {
         await axios.delete(`http://localhost:5000/department/${id}`);
         getDepartment();
      }
   };

   React.useEffect(() => {
      getDepartment();
   }, []);

   return (
      <Container className="mt-1">
         <h2 className="text-center mt-3">Department List Manage</h2>
         <Row>
            <Col md={{ span: 9, offset: 2 }}>
               <p className="text-end">
                  <Link to="/adddepartment">
                     <Button variant="primary" size="sm">
                        Add Department
                     </Button>
                  </Link>
               </p>
               <Table striped>
                  <thead>
                     <tr>
                        <th>No#</th>
                        <th>Name</th>
                        <th className="text-center">Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {department.map((department, index) => (
                        <tr key={department.id}>
                           <td>
                              {index + 1}. #{department.id}
                           </td>
                           <td>{department.name}</td>
                           <td className="text-center">
                              <Link
                                 to={`/editdepartment/${department.id}`}
                                 className="me-1"
                              >
                                 <Button variant="success" size="sm">
                                    Edit
                                 </Button>
                              </Link>
                              <Button
                                 variant="danger"
                                 size="sm"
                                 onClick={() => deleteDepartment(department.id)}
                              >
                                 Delete
                              </Button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </Table>
            </Col>
         </Row>
      </Container>
   );
}
