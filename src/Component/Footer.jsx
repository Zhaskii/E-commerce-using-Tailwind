import React from 'react'
import logo from '../assets/img/logo.jpg'

function Footer() {
  return (
    <>
      <footer className="bg-green-600 relative">
  <section className="container mx-auto py-8 md:py-16">
    <div className="flex flex-col md:flex-row justify-evenly">
      <div className="md:w-[40%]">
        <img className='w-[140px] h-[110px] mx-auto md:mx-0' src={logo} />
        <p className="text-white text-center md:text-left px-4 md:px-0 py-4 md:pb-6 max-w-[400px] mx-auto md:mx-0">Consulting is a dynamic and multifaceted field that involves providing expert advice and guidance to individuals.</p>
        <a href="#" className="block text-center md:text-left">
          <p className="bg-lime font-bold p-4 rounded-[20px] text-black inline-block">View All <span className="mx-3"><i className="bi bi-arrow-right" /></span></p>
        </a>
      </div>
      <div className="text-white md:w-[20%]">
        <ul>
          <li className="font-semibold text-[25px] py-4">Quick Links</li>
          <li className="py-2">Make Appointment</li>
          <li className="py-2">Customers Services</li>
          <li className="py-2">About Company</li>
          <li className="py-2">Our Case Studies</li>
          <li className="py-2">Free Consulting</li>
          <li className="py-2">Meet Your Experts</li>
        </ul>
      </div>
      <div className="text-white md:w-[40%]">
        <h4 className="font-semibold text-[25px] py-4">Get In Touch</h4>
        <div className="flex flex-col py-3">
          <div className="flex items-center">
            <p className="text-[30px]"><i className="bi bi-geo-alt-fill" /></p>
            <p className="mx-2">Kathmandu, Barakuti, No 4, Nepal</p>
          </div>
          <div className="flex items-center">
            <p className="text-[30px]"><i className="bi bi-telephone-fill" /></p>
            <p className="mx-2">+123 456 789 865 <br /> +321 456 987 123</p>
          </div>
          <div className="flex items-center">
            <p className="text-[30px]"><i className="bi bi-chat-square-dots-fill" /></p>
            <p className="mx-2">sb@gmail.com <br /> sbgmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr className="border-white" />
  <section className="container mx-auto py-8 md:py-16">
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
      <p className="text-white text-center md:text-left">Copyright @ 2023 Store. All Rights Reserved.</p>
      <div className="flex justify-center md:justify-end gap-4 items-center">
        <h4 className="text-white">Follow Us:</h4>
        <ul className="flex gap-6">
          <li className="border p-2 rounded-full text-white text-[18px] hover:text-black hover:bg-green-500"><i className="bi bi-facebook" /></li>
          <li className="border p-2 rounded-full text-white text-[18px] hover:text-black hover:bg-green-500"><i className="bi bi-twitter-x" /></li>
          <li className="border p-2 rounded-full text-white text-[18px] hover:text-black hover:bg-green-500"><i className="bi bi-instagram" /></li>
          <li className="border p-2 rounded-full text-white text-[18px] hover:text-black hover:bg-green-500"><i className="bi bi-linkedin" /></li>
        </ul>
      </div>
    </div>
  </section>
</footer>


    </>
  )
}

export default Footer
