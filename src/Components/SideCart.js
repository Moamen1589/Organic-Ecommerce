import { createContext, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { useSelected } from '../hooks/useSelected'
export const context = createContext()
export default function SideCart() {
   const { allProducts, removeProduct, reduceProduct, increaseProduct } = useSelected()
   const [open, setOpen] = useState(false)
   const handelOpen = () => {
      setOpen(true)
   }
   const increaseProductQuntaity = (id) => {
      increaseProduct(id)
   }
   const reduceProductQuntaity = (id) => {
      reduceProduct(id)
   }

   return (
      <>
         <context.Provider value={handelOpen}>
            <NavBar />
         </context.Provider>
         <Dialog open={open ?? setOpen(false)} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
               transition
               className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
               <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                     <DialogPanel
                        transition
                        className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                     >
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                           <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                              <div className="flex items-start justify-between">
                                 <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                                 <div className="ml-3 flex h-7 items-center">
                                    <button
                                       type="button"
                                       onClick={() => setOpen(false)}
                                       className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                       <span className="absolute -inset-0.5" />
                                       <span className="sr-only">Close panel</span>
                                       <XMarkIcon aria-hidden="true" className="size-6" />
                                    </button>
                                 </div>
                              </div>

                              <div className="mt-8">
                                 <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                       {allProducts.map((product) => (
                                          <li key={product.id} className="flex py-6">
                                             <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img alt={product.imageAlt && product.imageAlt} src={product.image} className="size-full object-cover" />
                                             </div>

                                             <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                   <div className="flex justify-between text-base font-medium text-gray-900">
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
                                 </div>
                              </div>
                           </div>

                           <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                 <p>Total Price :</p>
                                 <p>${allProducts.length !== 0
                                    ? allProducts.map(product => product.price).reduce((prev, curr) => prev + curr, 0)
                                    : 0}.00</p>
                              </div>
                              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                              <div className="mt-6">
                                 <Link
                                    to={'/checkout'}
                                    className="flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-300"
                                 >
                                    Checkout
                                 </Link>
                              </div>
                              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                 <p>
                                    or{' '}
                                    <button
                                       type="button"
                                       onClick={() => setOpen(false)}
                                       className="font-medium text-black hover:text-gray-300"
                                    >
                                       Continue Shopping
                                       <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </DialogPanel>
                  </div>
               </div>
            </div >

         </Dialog >
      </>
   )
}
