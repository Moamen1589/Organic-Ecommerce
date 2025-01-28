import NavBar from './NavBar';
import Home from './Home';
import ShowDetails from './ShowDetails';
import SideCart from './SideCart';
import Shop from './Shop';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Profile from '../Auth/Profile';
function App() {

    return (
        <>
            <NavBar />
            <Home />
            <SideCart />
            <Shop />
            <ShowDetails />
            <SignIn />
            <SignUp />
            <Profile />
        </>
    );
}

export default App;
