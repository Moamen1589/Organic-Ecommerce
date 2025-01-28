import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Shop from './Components/Shop';
import Home from './Components/Home';
import ShowDetails from './Components/ShowDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ShopContext from './Context/ShopContext';
import CheckOut from './Components/CheckOut';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import UserDataContext from './Context/UserDataContext';
import Profile from './Auth/Profile';


AOS.init({
  once: true
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <React.StrictMode>
      <UserDataContext>
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
      </UserDataContext>
    </React.StrictMode>
  </>
);

reportWebVitals();
