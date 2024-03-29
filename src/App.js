import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { Route,Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Profile from './components/profile';
import Table from './components/table';

function App() {
  return (
   <Fragment>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/table' element={<Table/>}/>
    </Routes>
   </Fragment>
  );
}

export default App;
