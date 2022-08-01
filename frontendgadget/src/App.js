import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Registe from './Register';
import Login from './Login';
import Landing from './Landing';
import Home from './Home';
import Profile from './Profile';
import PrivateRoute from './Private';
import Redirect from './Redirect';
import Productdetail from './Productdetail';
import Cart from './Cart';
import Orderplaced from './Orderplaced';


function App() {

  return (
    <Router >
    <Routes>
    <Route path='/' exact element={ <Home/> } />
    <Route path='/register' exact element={ <Registe/> } />
    <Route path='/login' exact element={ <Login/> } />

    
 
    < Route path="/"  element={<PrivateRoute/>}> 
    <Route path='/landing' exact element={ <Landing/> } />
    <Route path='/profile' exact element={ <Profile/> } />
    <Route path='/detail' exact element={ <Productdetail /> } />
    <Route path='/cart' exact element={ <Cart/> } />
    <Route path='/order' exact element={ <Orderplaced/> } />

    </Route> 
    <Route path = "*"  element={<Redirect/>}>
              
              </Route>
      </Routes>
      </Router>
 
  );
}

export default App;
