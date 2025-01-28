import { useSelected } from '../hooks/useSelected'
import NavBar from '../Components/NavBar'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Checkout = () => {

   const { allProducts, removeProduct, reduceProduct, increaseProduct } = useSelected()

   const navigate = useNavigate()
   const increaseProductQuntaity = (id) => {
      increaseProduct(id)
   }

   const reduceProductQuntaity = (id) => {
      reduceProduct(id)
   }


   const handleSubmit = () => {
      if (allProducts.length !== 0) {
         Swal.fire({
            title: "Payment Successfully",
            icon: "success",
            draggable: true
         }).then((submit) => {
            if (submit.isConfirmed) {
               navigate('/shop')
            }
         });
         window.sessionStorage.removeItem('products')
         allProducts.length = 0
      }else{
         Swal.fire({
            titleText:'No Items Selected',
            icon:'error'
         })
      }
   }
   return (
      <>
         <NavBar />
         <div className=" h-screen content-center max-sm:pt-36  ">
            <h1 className="text-center text-5xl my-10">Check Out</h1>
            <div className="flex justify-around items-center h-fit max-lg:flex-col max-lg:gap-10  ">
               <div className="mt-8 basis-2/5 max-lg:w-full px-16 max-sm:px-8 ">
                  <div className="flow-root">

                     <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {allProducts.map((product) => (
                           <li key={product.id} className="flex py-6 max-sm:flex-col">
                              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200 max-sm:mx-auto max-sm:my-6">
                                 <img alt={product.imageAlt && product.imageAlt} src={product.image} className="size-full object-cover " />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                 <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900 max-sm:my-6">
                                       <h3>
                                          {product.foodName}
                                       </h3>
                                       <p className="ml-4">${product.price}.00</p>
                                    </div>
                                 </div>
                                 <div className="flex flex-1 items-end justify-between text-sm content-center">
                                    <div className='flex  justify-around basis-2/3'>
                                       <button onClick={() => {
                                          increaseProductQuntaity(product.id)
                                       }}
                                          className='bg-orange-600 py-1 px-2 rounded-sm'> +</button>
                                       <span className='content-center'>{product.quantity}</span>
                                       <button  {...(product.quantity === 1 && { disabled: true })} onClick={() => {
                                          reduceProductQuntaity(product.id)
                                       }}
                                          className={product.quantity === 1 ? '  opacity-50 bg-orange-600 py-1 px-2 rounded' : 'bg-orange-600 py-1 px-2 rounded'}> - </button>
                                    </div>
                                    <div className="flex">
                                       <button
                                          type="button"
                                          className="font-medium text-xs p-2 rounded text-white bg-red-600 hover:bg-red-400"
                                          onClick={() => {
                                             removeProduct(product.id)
                                          }}
                                       >
                                          Remove
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        ))}
                     </ul>
                     <p className={allProducts.length === 0 ? 'text-5xl text-center max-sm:leading-snug' : 'hidden'}>No Items Selected <i className="fa-regular fa-face-smile pl-5 max-sm:block max-sm:mt-3 max-sm:p-0 "></i></p>
                  </div>
               </div>
               <div className="max-w-4xl p-8 basis-2/5 max-lg:w-full px-16 max-sm:px-8">
                  <h1 className="text-center text-3xl "> Good Bye <i className="fa-solid fa-hand-holding-heart px-2"></i> </h1>
                  <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-6">




                     <div className="mt-6 p-4 border-t border-gray-300">
                        <h3 className="text-lg font-semibold text-gray-700">Order Summary</h3>
                        <div className="mt-4">
                           <div className="flex justify-between">
                              <span>Subtotal</span>
                              <span>$0</span>
                           </div>
                           <div className="flex justify-between">
                              <span>Shipping</span>
                              <span>$0</span>
                           </div>
                           <div className="flex justify-between font-semibold text-lg">
                              <span>Total</span>
                              <p >${allProducts.length !== 0
                                 ? allProducts.map(product => product.price).reduce((prev, curr) => prev + curr, 0)
                                 : 0}.00</p>
                           </div>
                        </div>
                     </div>
                     {/* Submit Button */}
                     <div className="mt-6">
                        <button
                           type="submit"
                           className="w-full p-3 bg-orange-500 text-white rounded-md shadow-lg hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           onClick={handleSubmit}
                        >
                           Complete Purchase
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>

   );
};

export default Checkout;
