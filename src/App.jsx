import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import LoginComp from './components/login/LoginComp';
import HomePage from './components/Home';
import NotFound from './components/NotFound';
function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/login' element={users ? <TodayAttendence /> : <Navigate to='/login' />}/> */}
      <Route path='/login' element={<LoginComp/>}/>
      <Route path='/' element={ <HomePage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App
