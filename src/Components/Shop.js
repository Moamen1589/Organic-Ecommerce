import products from '../Data/foodProudcts.json';
import { useNavigate} from 'react-router-dom';
import NavBar from './NavBar';
import SideCart from './SideCart';
import { useSelected } from '../hooks/useSelected';
import '../Styles/Shop.css'
const Shop = () => {
    const { addProduct } = useSelected()

    const handleAddToCart = (product) => {
        addProduct(product)
    }
    const navigate = useNavigate()

   


    return (
        <>
            <NavBar />
            <SideCart />
            <div className='shop'>
                <div className='overlay'></div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 ">
                    <div className="mt-32 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative" >
                                <img
                                    alt={product.imageAlt}
                                    src={product.image}
                                    loading='lazy'
                                    className="aspect-square mx-auto w-56 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 cursor-pointer"
                                    onClick={() => navigate('/details', { state: [product] })}
                                />
                                <div className="mt-4 flex justify-between flex-col items-center gap-3">
                                    <div>
                                        <h3 className="text-lg text-gray-700">{product.foodName}</h3>
                                    </div>
                                    <p className="text-md font-medium text-gray-900">${product.price}.00</p>
                                </div>
                                <button onClick={() => handleAddToCart(product)} className="bg-orange-500 w-full py-3 rounded-lg mt-3">
                                    Add To Cart
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
