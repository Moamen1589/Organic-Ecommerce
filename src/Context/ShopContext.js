import React, { createContext, useEffect, useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../Context/UserDataContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export const selectedProduct = createContext(null);
const ShopContext = ({ children }) => {
    const [allProducts, setProducts] = useState([]);
    const [price, setPrice] = useState()
    const [newQuntatiy, setQuantity] = useState()
    const [newId, setId] = useState()
    const { email } = useContext(UserContext)
    const navigate = useNavigate()
    // Function To Add Product To Side Cart
    const addProduct = (product) => {
        // Check If Product Duplicated
        const checkDuplication = allProducts.some((p) => p.id === product.id);
        if (checkDuplication) {
            toast.dismiss();
            toast.warn('Product Already Added', {
                autoClose: 2000,
            });
            return;
        }
        if (!email) {
            Swal.fire({
                title: "You Must Sign In First",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sign In"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin')
                }
            });
        } else {
            toast.success('Product Added To Cart', {
                autoClose: 2000,
            });
            setProducts((prev) => [...prev, product]);
        }

    };

    // If Side Cart Have Product Storage Them In Session Storage

    if (allProducts.length !== 0) {
        window.sessionStorage.setItem('products', JSON.stringify(allProducts))
    }

    // Function To Increase Product Quntaity

    const increaseProduct = (id) => {
        let updateQuntaity = allProducts.find((p) => p.id === id).quantity
        setQuantity(updateQuntaity + 1)
        const productPrice = allProducts.find((p) => p.id === id).price
        if (!price) {
            setPrice(productPrice)
        }
        else if (newId) {
            if (newId !== id) {
                setPrice(productPrice)
            }
        }
        setId(id)
    }

    // Function To Reduce Product Quntaity
    const reduceProduct = (id) => {
        let updateQuntaity = allProducts.find((p) => p.id === id).quantity
        setQuantity(updateQuntaity - 1)
        if (price) {
            setPrice(price)
        }
        setId(id)
    }

    // Calculate Price Depend On Quntaity

    useEffect(() => {
        setProducts((prevProducts) =>
            prevProducts.map((p) =>
                p.id === newId
                    ? { ...p, quantity: newQuntatiy, price: price * newQuntatiy }
                    : p
            )
        );
    }, [newQuntatiy, newId]);

    //  Get Storage Products From Local Storage If User Reload Page
    useEffect(() => {
        if (JSON.parse(window.sessionStorage.getItem('products'))) {
            setProducts(JSON.parse(window.sessionStorage.getItem('products')))
        }
    }, [])

    // Remove Product From Side Cart
    const removeProduct = (productId) => {
        const updatedProducts = allProducts.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
        window.sessionStorage.setItem('products', JSON.stringify(updatedProducts));
    }



    return (
        <>
            <selectedProduct.Provider value={{ allProducts, addProduct, removeProduct, increaseProduct, reduceProduct,setProducts }}>
                {children}
            </selectedProduct.Provider >
            <ToastContainer />
        </>
    );
};
export default ShopContext


