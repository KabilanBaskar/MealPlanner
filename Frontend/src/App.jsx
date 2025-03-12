import Navbar from './NavComponent/Navbar';
import Home from './NavComponent/Home';
import MyTable from './NavComponent/MyTable';
import Tracker from './NavComponent/Tracker';
import Rewards from './NavComponent/Rewards';
import FoodSection from './NavComponent/FoodSection';
import Login from './UserCredentials/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Home' element={<Navbar />}></Route>
        <Route path='/MyTable' element={<MyTable />}></Route>
        <Route path='/Tracker' element={<Tracker />}></Route>
        <Route path='/Rewards' element={<Rewards />}></Route>
        <Route path='/Foodsection' element={<FoodSection />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
