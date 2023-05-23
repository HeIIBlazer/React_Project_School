import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Specialties from '../pages/Specialties';
import DetailSpecialty from '../pages/DetailSpecialty';

import ProfessionList from '../actions/ProfessionList';
import AddProfession from '../actions/AddProfession';
import EditProfession from '../actions/EditProfession';

import DepartmentList from '../actions/DepartmentList';
import AddDepartment from '../actions/AddDepartment';
import EditDepartment from '../actions/EditDepartment';

import UsersList from '../actions/UsersList';

import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Logout from './Logout';

export default function Content() {
   return (
      <main className="flex-flex-shrink-0">
         <Router>
            <Routes>
               <Route exact path="/" element={<Home />} />

               <Route path="/specialty" element={<Specialties />} />
               <Route path="/detail/:id" element={<DetailSpecialty />} />

               <Route path="/profession" element={<ProfessionList />} />
               <Route path="/addprofession" element={<AddProfession />} />
               <Route path="/editprofession/:id" element={<EditProfession />} />

               <Route path="/department" element={<DepartmentList />} />
               <Route path="/adddepartment" element={<AddDepartment />} />
               <Route path="/editdepartment/:id" element={<EditDepartment />} />

               <Route path="/users" element={<UsersList />} />

               <Route exact path="/register" element={<Register />} />
               <Route exact path="/login" element={<Login />} />
               <Route exact path="/profile" element={<Profile />} />
               <Route exact path="/logout" element={<Logout />} />
            </Routes>
         </Router>
      </main>
   );
}
