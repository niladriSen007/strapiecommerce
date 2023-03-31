import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-gray-100 pt-12 pb-8">
            <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="md:flex md:justify-between md:items-center">
                    <div class="md:flex-shrink-0 overflow-hidden">
                        <span className='text-blue-600 font-bold text-4xl'>BLUECART.</span>
                    </div>
                    <div class="mt-8 md:mt-0 md:ml-10">
                        <h4 class="text-lg font-medium text-gray-900">About Us</h4>
                        <p class="mt-2 text-sm text-gray-600">We are an ecommerce store selling high-quality products at affordable prices. We have a wide selection of products, from clothing to electronics and everything in between.</p>
                    </div>
                    <div class="mt-8 md:mt-0 md:ml-10">
                        <h4 class="text-lg font-medium text-gray-900">Customer Service</h4>
                        <ul class="mt-2 text-sm text-gray-600">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                        </ul>
                    </div>
                    <div class="mt-8 md:mt-0 md:ml-10">
                        <h4 class="text-lg font-medium text-gray-900">Connect With Us</h4>
                        <ul class="mt-2 text-sm text-gray-600">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-8 border-t border-gray-200 pt-8">
                <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="md:flex md:items-center md:justify-between">
                        <p class="text-sm text-gray-600">&copy; 2023 Ecommerce Store. All rights reserved.</p>
                        <img src="https://ik.imagekit.io/ksaehdhru/login_form/payment_2UiqsaoTlm.png?updatedAt=1679463749545" alt="payment-logo" className='md:w-80' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer