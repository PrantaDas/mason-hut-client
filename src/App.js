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
import MyOrder from './Pages/DashBoard/MyOrder';
import DashBoard from './Pages/DashBoard/DashBoard';
import AddReview from './Pages/DashBoard/AddReview';
import MyProfile from './Pages/DashBoard/MyProfile';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';
import Welcome from './Pages/DashBoard/Welcome';
import AddProducts from './Pages/DashBoard/AddProducts';
import ManageProducts from './Pages/DashBoard/ManageProducts';
import NotFound from './Pages/NotFound/NotFound';
import Payment from './Pages/DashBoard/Payment';
import ManageOrders from './Pages/DashBoard/ManageOrders';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        <Route path='/dashboard' element={<DashBoard></DashBoard>}>
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path='/dashboard/myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
          <Route path='/dashboard/addreview' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='/dashboard/addproduct' element={<AddProducts></AddProducts>}></Route>
          <Route path='/dashboard/manageproduct' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='/dashboard/manageorders' element={<ManageOrders></ManageOrders>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
