import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='main' style={{ width: '100%', margin: '0 auto' }}>
            <div className='footer-img'>
                <img src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="footer" />
                <div className='inner-img'>
                    <h3>Better for People & the Planet</h3>
                    <h6>Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate</h6>
                    <button>Shop men</button>
                    <button>Shop women</button>
                </div>
            </div>
            <div className='footer2'>
                <ul className='options'>
                    <li>Secure Payment</li>
                    <li>Express Shipping</li>
                    <li>Free Return</li>
                </ul>
            </div>
            <div className='footer-abt'>
                <div>
                    <ul>
                        <li><h4>PLASHOE</h4></li>
                        <li>Praesent eget tortor sit risus egestas nulla <br /> pharetra ornare quis bibendum est <br />bibendum sapien proin nascetur</li>
                        <ul className='social-icons'>
                            <li>ig</li>
                            <li>x</li>
                            <li>fb</li>
                            <li>wa</li>
                        </ul>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h4>Shop</h4></li>
                        <li>shop men</li>
                        <li>shop women</li>
                        <li>lookbook</li>
                        <li>gift card</li>
                        <li>sale</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h4>About</h4></li>
                        <li>our story</li>
                        <li>our materials</li>
                        <li>our value</li>
                        <li>sustainability</li>
                        <li>manufacture</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h4>Need help?</h4></li>
                        <li>FAQs</li>
                        <li>Shipping & Returns</li>
                        <li>shoe care</li>
                        <li>size chart</li>
                        <li>contact us</li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>© 2025 Recycled Shoe Store. Powered by Recycled Shoe Store.</p>
                <img src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png" alt="Payment options" />
            </div>
        </div>
    )
}

export default Footer