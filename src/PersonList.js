import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class PersonList extends Component {
   
    state = {
        persons: []
    };

 
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <Container className="mt-4">
                <h2 className="text-center text-white bg-success p-3">User List</h2>
                {this.state.persons.map((person, index) => (
                    <Card className="mb-3 bg-info text-white" key={index}>
                        <Row noGutters>
                            <Col md={4} className="d-flex align-items-center justify-content-center">
                                <Card.Img 
                                    src={person.picture.large} 
                                    alt="User profile" 
                                    className="rounded-circle m-3"
                                    style={{ width: '150px', height: '150px' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>
                                        {person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}
                                    </Card.Title>
                                    <Card.Text>
                                        <strong>User Name:</strong> {person.login.username}<br />
                                        <strong>Gender:</strong> {person.gender.toUpperCase()}<br />
                                        <strong>Time Zone Description:</strong> {person.location.timezone.description}<br />
                                        <strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}<br />
                                        <strong>Email:</strong> {person.email}<br />
                                        <strong>Birth Date and Age:</strong> {person.dob.date} ({person.dob.age})<br />
                                        <strong>Register Date:</strong> {person.registered.date}<br />
                                        <strong>Phone#:</strong> {person.phone}<br />
                                        <strong>Cell#:</strong> {person.cell}<br />
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Container>
        );
    }
}

export default PersonList;
