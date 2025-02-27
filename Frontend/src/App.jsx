import Navbar from './NavComponent/Navbar';
import Home from './NavComponent/Home';
import MyTable from './NavComponent/MyTable';
import Tracker from './NavComponent/Tracker';
import Rewards from './NavComponent/Rewards';
import FoodSection from './NavComponent/FoodSection';
import Login from './UserCredentials/Login';
import Signup from './UserCredentials/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/MyTable' element={<MyTable />} />
            <Route path='/Tracker' element={<Tracker />} />
            <Route path='/Rewards' element={<Rewards />} />
            <Route path='/FoodSection' element={<FoodSection />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
