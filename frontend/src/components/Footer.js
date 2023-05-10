import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-auto pt-3">
                <Container
                    className='text-center'
                    fluid
                    style={{
                        backgroundColor: '#198754',
                        color: '#fff',
                        height: '60px',
                        padding: '10px',
                    }}
                >
                    <p>Design &copy; 2023 Backend Node Express | Frontend React | ProjectSchool</p>
                </Container>
            </footer>
        )
    }
}
