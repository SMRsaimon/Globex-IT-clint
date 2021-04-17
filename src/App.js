
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
export const userContext = createContext()
function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setLoggedInUser(userInfo)

  }, [])
  console.log(loggedInUser)

  return (
    <userContext.Provider value={{ loggedInUser, setLoggedInUser }} >
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
          <Route path='/deshboard'>
            <AdminDeshBoard />
          </Route>
          <Route path='/addAdmin'>
            <AdminDeshBoard />
          </Route>
          <Route path='/addProduct'>
            <AddProduct />
          </Route>
          <Route path='/addminOrderList'>
            <AdminOrderList />
          </Route>
          <Route path='/buyServices/:id'>
            <BuyProduct />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider >
  );
}

export default App;
