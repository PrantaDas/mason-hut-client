import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Tools from './Pages/Home/Tools';
import PurchaseTools from './Pages/Products/PurchaseTools';
import RequireAuth from './Pages/Authentication/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/tools/:id' element={<RequireAuth>
          <PurchaseTools></PurchaseTools>
        </RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
