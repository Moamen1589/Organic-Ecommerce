import Home from './Home';
import ShowDetails from './ShowDetails';
import Shop from './Shop';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Profile from '../Auth/Profile';
import CheckOut from './CheckOut';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ShopContext from '../Context/ShopContext';
function App() {
  return ( 
    
    <Router>
        <ShopContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details" element={<ShowDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </ShopContext>
    </Router>
  
  );
}

export default App;
