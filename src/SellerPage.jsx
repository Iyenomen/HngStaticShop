import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SellerPage = () => {

    // Hamburger menu
    let variable = 'hamburger'

    const hamburgerDisplay = () => {
        console.log('click')
    }

    // Navigate
    const navigate = useNavigate()
   const cartHandler = () => {
       navigate('/cart')
   }

   const catalogHandler = () => {
     navigate('/catalog')
     console.log('catalog')
   }

  return (
    <div>
        <nav className='nav-links'>
            <div className='logo'></div>
            <ul className='links'>
                <li>New Collection</li>
                <li>About Us</li>
                <li onClick={catalogHandler}>Catalog</li>
                <li>Contact</li>
            </ul>
            <div className='icons'>
                <div className='search'></div>
                <div className='cart' onClick={cartHandler}></div>
            </div>
        </nav>
        <nav className='nav-hamburger'>
            <div className='logo'></div>
            <div className='flex'>
                <div className='cart'></div>
                {<div className={variable} onClick={hamburgerDisplay}></div>}
            </div>
           
            <div className='main-link'>
                <ul className='links'>
                    <li>New Collection</li>
                    <li>About Us</li>
                    <li onClick={catalogHandler}>Catalog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
        <section className='collection'>
            <div className='texts'>
                <h2 className='heading'>Latest collection</h2>
                <p className='sub-text'>
                    High-quality bags, carefully sorted
                    to meet your aesthetic design and
                    functionality in everyday carry
                </p>
            </div>

            <div className='products'>
                <div className='bag1'></div>
                <div className='bag2'></div>
                <div className='bag3'></div>
            </div>
        </section>
        <section className='motto'>
           <div className='motto-position'>
              <div className='logo2'></div>
              <p className='text-motto'>carry elegance everywhere</p>
           </div>
        </section>
        <footer>
            <div className='footer'>
                <div className='hawvey'>
                    <h3 className='hawvey2'>Hawvey</h3>
                    <p className='address'>No 12 Alongo Stress, off Uzoba road +234-703-3578-111 </p>
                </div>
                <ul className='link2'>
                    <li>Sales</li>
                    <li onClick={catalogHandler}>Catalog</li>
                    <li>Contact</li>
                </ul>
                <div className='inbox'>
                    <p className='subscribe'>Subscribe to Newsletter</p>
                    <div className='input-holder1'>
                        {/* <input type='text' placeholder='Email' className='input'></input> */}
                        <div className='input-holder'>Email</div>
                        <button className='press-btn'>Ok</button>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default SellerPage