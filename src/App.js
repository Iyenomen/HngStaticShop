import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// import { Container } from 'react-bootstrap'
import SellerPage from './SellerPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './Cart';
import Checkout from './Checkout';
import Catalog from './Catalog';
// import Cart from './Cart'
// import Checkout from './Checkout'

const App = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <SellerPage />,
  //   },
  // ]);

  return (
    <div>
       {/* <SellerPage/> */}
       <Router>
         <Routes>
            <Route path='/' element={<SellerPage/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/catalog' element={<Catalog />}/>
         </Routes>
       </Router>
    </div>
  )
}

export default App