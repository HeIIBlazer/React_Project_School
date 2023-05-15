import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function ProfessionList() {
    const [profession, setProfession] = React.useState([]);

    const getProfession = async () => {
        const response = await axios.get(`http://localhost:5000/profession`);
        setProfession(response.data);
    }

    const deleteProfession = async (id) => {
        if (window.confirm('Are you sure?')) {
            await axios.delete(`http://localhost:5000/profession/${id}`);
            getProfession();
        }
    }

    React.useEffect(() => {
        getProfession();
    }, [])

    return (
       <Container className="mt-1">
          <h2 className="text-center mt-3">Profession List Manage</h2>
          <Row>
             <Col md={{ span: 9, offset: 2 }}>
                <p className="text-end">
                   <Link to="/addprofession">
                      <Button variant="primary" size="sm">
                         Add Profession
                      </Button>
                   </Link>
                </p>
                <Table striped>
                   <thead>
                      <tr>
                         <th>No#</th>
                         <th>Name</th>
                         <th>Department</th>
                         <th className="text-center">Actions</th>
                      </tr>
                   </thead>
                   <tbody>
                      {profession.map((profession, index) => (
                         <tr key={profession.id}>
                            <td>
                               {index + 1}. #{profession.id}
                            </td>
                            <td>{profession.name}</td>
                            <td>{profession.department.name}</td>
                            <td className="text-center">
                               <Link
                                  to={`/detail/${profession.id}`}
                                  className="me-1"
                               >
                                  <Button variant="success" size="sm">
                                     Detail
                                  </Button>
                               </Link>
                               <Link
                                  to={`/editprofession/${profession.id}`}
                                  className="me-1"
                               >
                                  <Button variant="primary" size="sm">
                                     Edit
                                  </Button>
                               </Link>
                               <Button
                                  onClick={() =>
                                     deleteProfession(profession.id)
                                  }
                                  variant="danger"
                                  size="sm"
                               >
                                  delete
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