
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SiteBar from "./components/NavMenu/SideBar.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import ContractForm from './components/ContractForm/ContractForm';
import Login from './components/LogInManager/LogIn/LogIn';
import { createContext, useEffect, useState } from 'react';
import SignUp from './components/LogInManager/SignUp/SignUp';
import AddProduct from './components/DeshBoard/AddProduct/AddProduct';
import AdminDeshBoard from './components/DeshBoard/AdminDeshBoard/AdminDeshBoard';
import AdminOrderList from './components/DeshBoard/AdminOrderList/AdminOrderList';
import BuyProduct from './components/DeshBoard/UserDeshBoard/buyProduct/BuyProduct';
import ManageProduct from './components/DeshBoard/ManageProduct/ManageProduct';
import BookingList from './components/DeshBoard/UserDeshBoard/BookingList/BookingList';
import UserReview from './components/DeshBoard/UserDeshBoard/UserReview/UserReview';
import DeshBoardWelcome from './components/DeshBoard/DeshBoardWelCome/DeshBoardWelcome';
import PrivateRoute from './components/PrivateRoute';

export const userContext = createContext()
function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setLoggedInUser(userInfo)

  }, [])
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <userContext.Provider value={{ loggedInUser, setLoggedInUser, isAdmin, setIsAdmin }} >
      <Router>

        <Switch>
          <Route exact path='/' >
            <Home></Home>
          </Route>
          <Route path='/home' >
            <Home></Home>
          </Route>
          <Route path='/services' >
            <SiteBar />
            <Services />
            <Footer />
          </Route>
          <Route path='/about'>
            <SiteBar />
            <GetStarted />
            <Footer />
          </Route>
          <Route path='/support'>
            <SiteBar />
            <ContractForm />
            <Footer />
          </Route>
          <Route path='/logIn'>
            <SiteBar />
            <Login />
          </Route>
          <Route path='/SignUp'>
            <SiteBar />
            <SignUp />
          </Route>
          <PrivateRoute path='/deshboard'>
            <DeshBoardWelcome />
          </PrivateRoute>
          <PrivateRoute path='/addAdmin'>
            <AdminDeshBoard />
          </PrivateRoute>
          <PrivateRoute path='/addProduct'>
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path='/addminOrderList'>
            <AdminOrderList />
          </PrivateRoute>
          <PrivateRoute path='/buyServices/:id'>
            <BuyProduct />
          </PrivateRoute>
          <PrivateRoute path='/manageProduct'>
            <ManageProduct />
          </PrivateRoute>
          <PrivateRoute path='/bookingList'>
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path='/userReview'>
            <UserReview />
          </PrivateRoute>

        </Switch>

      </Router>
    </userContext.Provider >
  );
}

export default App;
