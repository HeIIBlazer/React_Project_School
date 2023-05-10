import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Specialties from '../pages/Specialties';

export default function Content() {
    return (
        <main className='flex-flex-shrink-0'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />

                    <Route path='/speciality' element={<Specialties />} />
                </Routes>
            </Router>
        </main>
    )
}
