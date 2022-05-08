import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Page404 from './Shared/Page404/Page404';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Cycle from './Pages/Home/Cycle/Cycle';
import Private from './Pages/Login/Private/Private';
import Cycles from './Pages/Home/Cycles/Cycles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCycle from './Pages/Manage/AddCycle/AddCycle';
import MangeCycles from './Pages/Manage/MangeCycles/MangeCycles';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import CycleDetails from './Pages/Home/CycleDetails/CycleDetails';
import Accessories from './Pages/Home/Accessories/Accessories';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/cycles' element={<Cycles></Cycles>}></Route>
        <Route path='/cycles/:cycleId' element={
          <Private>
            <Cycle></Cycle>
          </Private>
        }></Route>
        <Route path='/manage-cycles' element={<MangeCycles></MangeCycles>}></Route>
        <Route path='/sing-up' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/addCycle' element={<AddCycle></AddCycle>}></Route>
        <Route path='/features' element={<CycleDetails></CycleDetails>}></Route>
        <Route path='/accessories' element={<Accessories></Accessories>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;



