import React from 'react'
import { Button, Container } from 'react-bootstrap';

export default function BannerBox() {
    return (
        <Container
            fluid
            className='bg-success text-white p-5 opacity-75'
            style={{
                backgroundImage: `url(https://seaworld.com/san-diego/-/media/seaworld-san-diego/images/events/fireworks/1900x600-swc-fireworks-electric-eel.ashx?version=1_202110145922)`,
                height: 400,
                backgroundSize: "cover",
            }}
        >
            <Container className='p-5' style={{ alignItems: 'center', justifyContent: 'center' }}>
                <h1>Example Hero banner</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec mattis justo. Sed in ipsum efficitur, tristique lacus cursus, vulputate velit. Donec eget nisi vitae quam rutrum finibus. Proin pretium euismod odio, non dictum sapien tristique ac..
                </p>
                <p>
                    <Button className='primary'>Learn more</Button>
                </p>
            </Container>
        </Container>
    )
}
