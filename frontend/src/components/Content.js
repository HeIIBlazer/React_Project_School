import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Specialties from '../pages/Specialties';
import DetailSpecialty from '../pages/DetailSpecialty';

export default function Content() {
    return (
        <main className='flex-flex-shrink-0'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />

                    <Route path='/specialty' element={<Specialties />} />
                    <Route path='/detail/:id' element={<DetailSpecialty/>}/>
                </Routes>
            </Router>
        </main>
    )
}
