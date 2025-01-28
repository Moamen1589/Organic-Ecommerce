import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import '../Styles/sideBar.css'
import { useContext, useEffect, useState } from 'react'
import { context } from './SideCart'
import { Link } from 'react-router-dom'
import Classames from 'classnames';
import { useSelected } from '../hooks/useSelected'
import { UserContext } from '../Context/UserDataContext'
import Swal from 'sweetalert2'
import { selectedProduct } from '../Context/ShopContext'


const navigation = [
  { name: 'Home', Link: '/' },
  { name: 'Shop', Link: '/shop' },
  { name: 'Checkout', Link: '/checkout' },
]

const userNavigation = [
  { name: 'Your Profile', Link: '/profile' },
  { name: 'Sign In', Link: '/signin' },
  { name: 'Sign Up', Link: '/signup' },

]

export default function NavBar() {
  const { allProducts } = useSelected()

  const handleOpenSideBar = useContext(context)
  const { email, addEmail, addPassword } = useContext(UserContext)
  const { allProudcts } = useContext(selectedProduct)
  const [show, setShow] = useState(false)


  useEffect(() => {
    if (window.sessionStorage.getItem('email')) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])


  const handleLogOut = () => {
    Swal.fire({
      titleText: 'log out successfully',
      showConfirmButton: true
    })
    setShow(false)
    addEmail(null)
    addPassword(null)
    window.sessionStorage.clear()
    allProducts.length = 0
  }

  return (
    <>

      <div className="  w-full  bg-white fixed z-10">
        <Disclosure as="nav" className=" content-center h-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0" data-aos='fade-right' data-aos-duration='1000'>
                  <img src={'/Images/logo.svg'} alt='' />
                </div>
                <div className="hidden md:block" data-aos='fade-right' data-aos-duration='1000' >
                  <div className="ml-10 flex items-baseline gap-6 space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.Link}
                        className=' bg-orange-700 text-white rounded-md px-7 py-2 text-sm font-medium'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block" data-aos='fade-down' data-aos-duration='1000'>
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    onClick={handleOpenSideBar}
                    type="button"
                    className="relative rounded-full "
                  >
                    <i className="fa-solid fa-cart-shopping text-2xl p-2"></i>
                    <span className=' w-3 h-3 p-1 bg-orange-600 rounded-full relative -top-5 right-4'>{allProducts.length}</span>
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img alt="" src={'Images/account.webp'} className="size-8 " />
                      </MenuButton>
                    </div>
                    <MenuItems
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <Link
                            to={item.Link}
                            className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none"
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                      <p className={show ? 'px-4 py-2 font-normal text-red-600 cursor-pointer' : 'hidden'} onClick={handleLogOut}>log out</p>
                    </MenuItems>

                  </Menu>

                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <button
                  onClick={handleOpenSideBar}
                  type="button"
                  className="relative z-10 rounded-full "
                >
                  <i className="fa-solid fa-cart-shopping text-2xl p-2"></i>
                  <span className=' w-3 h-3 p-1 bg-orange-600 rounded-full relative -top-5 right-4'>{allProducts.length}</span>
                </button>
                <DisclosureButton className="group  inline-flex items-center justify-center  rounded-md  bg-black p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden    bg-white ">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.Link}
                  aria-current={item.current ? 'page' : undefined}
                  className={Classames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img alt="" src={'Images/account.webp'} className="size-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white"></div>
                  <div className="text-sm font-medium text-gray-400">{email ? email : 'Not Found'}</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.Link}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
                <p className={show ? 'px-4 py-2 font-normal text-red-600 cursor-pointer hover:bg-gray-700 hover:text-white rounded-md' : 'hidden'} onClick={handleLogOut}>log out</p>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>


        <main>
          <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}