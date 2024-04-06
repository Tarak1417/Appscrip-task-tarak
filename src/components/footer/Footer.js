import React from 'react'
import usFlag from '../../assets/images/us-flag-img.png';
import instaLogo from '../../assets/icons/Insta-logo.png';
import linkedinLogo from '../../assets/icons/linkedin-logo.png';

import gpayImg from '../../assets/images/gpay-img.png';
import mastercardImg from '../../assets/images/master-card-img.png';
import paypalImg from '../../assets/images/paypal-img.png';
import amexImg from '../../assets/images/amex-img.png';
import applepayImg from '../../assets/images/apple-pay-img.png';
import qpayImg from '../../assets/images/qpay-img.png';
import arrowDownLogo from '../../assets/icons/down-arrow-white.png'

import './Footer.css'

function Footer() {
    return (
        <footer>
            <section id='footer-top'>
                <section id='subscribe-section'>
                    <div style={{ margin: '14px 0px' }}>
                        <p className='footer-heading'>Be the first to know</p>
                    </div>
                    <p className='footer-info'>Sign up for updates from mettā muse.</p>
                    <div className='footer-form-section'>
                        <form>
                            <input type='email' placeholder='Enter Your E-mail' />
                            <button >SUBSCRIBE</button>
                        </form>
                    </div>
                </section>
                <section id='footer-top-info-section'>
                    <section id='contact-us-section' style={{ marginBottom: '14px' }}>
                        <div>
                            <p className='footer-heading'>CONTACT US</p>
                        </div>
                        <p className='footer-info'>+44 221 133 5360</p>
                        <p className='footer-info'>customercare@mettamuse.com</p>
                    </section>
                    <section id='currency-section'>
                        <div>
                            <p className='footer-heading'>CURRENCY</p>
                        </div>
                        <div className='footer-info' style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                            <img src={usFlag} alt='US-flag-img' />
                            <b>+ USD</b>
                        </div>
                        <p style={{ fontSize: '12px' }} className='hidden'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </section>
                </section>
            </section>
            <hr />
            <section id='footer-bottom'>
                <section className='footer-bottom-section oter-company-info'>
                    <div className='footer-heading-section'>
                        <p className='footer-heading'>mettā muse</p>
                        <img src={arrowDownLogo} alt='arrow-down-logo' className='d-block-mobile' />
                    </div>
                    <div className='footer-bottom-info d-none-mobile'>
                        <p className='footer-info'> About Us</p>
                        <p className='footer-info'> Stories</p>
                        <p className='footer-info'> Artisans</p>
                        <p className='footer-info'> Boutiques</p>
                        <p className='footer-info'> Contact Us</p>
                        <p className='footer-info'> EU Compliances Docs</p>
                    </div>
                </section>
                <section className='footer-bottom-section'>
                    <div className='footer-heading-section'>
                        <p className='footer-heading'>Quick Links</p>
                        <img src={arrowDownLogo} alt='arrow-down-logo' className='d-block-mobile' />
                    </div>
                    <div className='footer-bottom-info d-none-mobile'>
                        <p className='footer-info'> Orders & Shipping</p>
                        <p className='footer-info'> Join/Login as a Seller</p>
                        <p className='footer-info'> Payment & Pricing</p>
                        <p className='footer-info'> Return & Refunds</p>
                        <p className='footer-info'> FAQs</p>
                        <p className='footer-info'> Privacy Policy</p>
                        <p className='footer-info'> Terms & Conditions </p>
                    </div>
                </section>

                <section className='footer-bottom-section'>
                    <section className='footer-bottom-section follow-us-section'>
                        <div className='footer-heading-section'>
                            <p className='footer-heading'>Follow Us</p>
                            <img style={{ width: '20px', height: '20px' }} src={arrowDownLogo} alt='arrow-down-logo' className='d-block-mobile' />
                        </div>
                        <div>
                            <div className='footer-bottom-info d-none-mobile'>
                                <img src={instaLogo} alt='instagram-logo' />
                                <img src={linkedinLogo} alt='Linkedin-logo' />
                            </div>
                        </div>
                    </section>
                    <section className='payments-section' style={{ marginTop: '22px' }}>
                        <div>
                            <p className='footer-heading'>mettā muse Accepts</p>
                        </div>
                        <div className='payments-info'>
                            <img src={gpayImg} alt='G-pay-img' />
                            <img src={mastercardImg} alt='mastercard-img' />
                            <img src={paypalImg} alt='paypal-img' />
                            <img src={amexImg} alt='amex-pay-img' />
                            <img src={applepayImg} alt='apple-pay-img' />
                            <img src={qpayImg} alt='q-pay-img' />
                        </div>
                    </section>
                </section>
            </section>
            <center>
                <p style={{ fontSize: '14px', margin: '16px auto', opacity: '65%' }}>Copyright @ 2024 . All rights reserved.</p>
            </center>
        </footer>
    )
}

export default Footer