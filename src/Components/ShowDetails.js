import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './NavBar';
import SideCart from './SideCart';
import { useSelected } from '../hooks/useSelected';
import '../Styles/Shop.css'
function ShowDetails() {
    const location = useLocation()
    const product = location.state ? location.state : null
     const {addProduct} = useSelected()
    const navigate = useNavigate()
    const handleSelected = (product) => {
        addProduct(product)
    };
    return (
        <div>
            {product.map((product) => {
                return (
                    <>
                        <NavBar />
                        <SideCart />
                        <div key={product.id} className='flex  h-max p-32 gap-20  justify-center items-center max-lg:flex-col '>
                            <img src={product.image} className='aspect-square  w-56 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80' alt='\'/>
                            <div>
                                <h1 className='text-3xl max-sm:pl-7'>{product.foodName}</h1>
                                <p className='text-2xl mt-8 max-sm:pl-7'>{product.description}</p>
                                <p className='my-5 text-xl max-sm:pl-7'>${product.price}.00</p>
                                <button onClick={() => handleSelected(product)} className="bg-orange-500 mx-auto block   w-96 py-3 rounded-lg mt-6">
                                    Add To Cart
                                </button>
                                <button className=' w-full mt-10 underline font-bold' onClick={() => {navigate('/shop') }}><i className="fa-solid fa-arrow-left mr-3"></i> Countinue Shopping</button>
                            </div>
                        </div>
                        <Footer />
                    </>

                )
            })}
        </div>
    )
}

export default ShowDetails