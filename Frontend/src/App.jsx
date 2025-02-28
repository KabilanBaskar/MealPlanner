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
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/MyTable' element={<MyTable />} />
            <Route path='/Tracker' element={<Tracker />} />
            <Route path='/Rewards' element={<Rewards />} />
            <Route path='/FoodSection' element={<FoodSection />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
