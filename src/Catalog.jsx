import React from 'react'
import { useNavigate } from 'react-router-dom'

const Catalog = () => {
    let variable = 'hamburger'

    const hamburgerDisplay = () => {
        console.log('click')
    }

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
        </nav>  

        <div className='t-parent'>
            <h3 className='t-collection'>New Collection</h3> 
        </div> 

        <div className='product-description'>
            <div className='description'>
                <div className='formattings'>
                    <h3 className='product-title'>Zacro bag</h3>
                    <p className='product-text'>
                        Sed et iaculis semper purus in risus egestas. Amet ultrices eu mattis massa 
                        erat quam nisi gravida. Faucibus viverra imperdiet sem risus auctor enim odio 
                        eros pulvinar. Felis morbi enim metus tristique vestibulum. In eget morbi ut 
                        arcu amet. Feugiat proin dapibus dolor posuere tincidunt sodales diam. Quam 
                        orci eu odio interdum. Nulla cum amet tincidunt id. Massa sapien arcu arcu 
                        fermentum. Tortor in etiam elit sagittis.
                    </p>
                </div>
                <div className='product-arrow'>
                    <h3 className='shop-now'>SHOP NOW</h3>
                    <div className='arrow'></div>
                </div>
            </div>
            <div className='product-item1'></div>
        </div>

        <div className='product-description2'>
            <div className='description2'>
                <div className='product-item2'></div>
                <div className='formattings2'>
                    <h3 className='product-title2'>Zacro bag</h3>
                    <p className='product-text2'>
                        Sed et iaculis semper purus in risus egestas. Amet ultrices eu mattis massa 
                        erat quam nisi gravida. Faucibus viverra imperdiet sem risus auctor enim odio 
                        eros pulvinar. Felis morbi enim metus tristique vestibulum. In eget morbi ut 
                        arcu amet. Feugiat proin dapibus dolor posuere tincidunt sodales diam. Quam 
                        orci eu odio interdum. Nulla cum amet tincidunt id. Massa sapien arcu arcu 
                        fermentum. Tortor in etiam elit sagittis.
                    </p>
                </div>
                <div className='product-arrow2'>
                    <h3 className='shop-now2'>SHOP NOW</h3>
                    <div className='arrow2'></div>
                </div>
            </div>
        </div>

        <div className='product-description3'>
            <div className='description3'>
                <div className='formattings3'>
                    <h3 className='product-title3'>Zacro bag</h3>
                    <p className='product-text3'>
                        Sed et iaculis semper purus in risus egestas. Amet ultrices eu mattis massa 
                        erat quam nisi gravida. Faucibus viverra imperdiet sem risus auctor enim odio 
                        eros pulvinar. Felis morbi enim metus tristique vestibulum. In eget morbi ut 
                        arcu amet. Feugiat proin dapibus dolor posuere tincidunt sodales diam. Quam 
                        orci eu odio interdum. Nulla cum amet tincidunt id. Massa sapien arcu arcu 
                        fermentum. Tortor in etiam elit sagittis.
                    </p>
                </div>
                <div className='product-arrow3'>
                    <h3 className='shop-now3'>SHOP NOW</h3>
                    <div className='arrow3'></div>
                </div>
            </div>
            <div className='product-item3'></div>
        </div>

        <div className='pop-item'>
             <h3 className='p-item'>Popular Items</h3>
        </div>

        <div className='pop-products'>
            <div className='format-prod1'>
               <div className='p-product1'></div>
               <div className='add-btn'>
                    <button className='add-cart1' onClick={cartHandler}>ADD TO CART</button>
                </div>
            </div>
            <div className='format-prod2'>
               <div className='p-product2'></div>
               <div className='add-btn'>
                   <button className='add-cart2' onClick={cartHandler}>ADD TO CART</button>
               </div>
            </div>
            <div className='format-prod3'>
               <div className='p-product3' ></div>
               <div className='add-btn'>
                   <button className='add-cart3' onClick={cartHandler}>ADD TO CART</button>
               </div>
            </div>
            <div className='format-prod4'>
                <div className='p-product4'></div>
                <div className='add-btn'>
                    <button className='add-cart4' onClick={cartHandler}>ADD TO CART</button>
                </div>
            </div>
        </div>

        <div className='socials'>
            <h3 className='social-text'>Follow us on Instagram</h3>
        </div>

        <div className='floral-bags'>
            <div className='floral-bag1'></div>
            <div className='floral-bag2'></div>
            <div className='floral-bag3'></div>
        </div>

        <section className='motto1'>
           <div className='motto-position1'>
              <div className='logo3'></div>
              <p className='text-motto1'>carry elegance everywhere</p>
           </div>
        </section>

        {/* <footer>
            <div className='footer1'>
                <div className='hawvey1'>
                    <h4 className='hawvey3'>Hawvey</h4>
                    <p className='address1'>No 12 Alongo Stress, off Uzoba road +234-703-3578-111 </p>
                </div>
                <ul className='link2'>
                    <li>Sales</li>
                    <li onClick={catalogHandler}>Catalog</li>
                    <li>Contact</li>
                </ul>

                <div className='inbox'>
                    <p className='subscribe'>Subscribe to Newsletter</p>
                    <div className='input-holder1'>
                        
                        <div className='input-holder'>Email</div>
                        <button className='press-btn'>Ok</button>
                    </div>
                </div>
            </div>
        </footer> */}
    </div>
  )
}

export default Catalog