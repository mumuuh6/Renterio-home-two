import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-300 text-base-content p-10 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center mb-6">
            <h2 className="font-bold text-3xl">Gadget Heaven</h2>
            <p>Leading the way in cutting-edge technology and innovation.</p>
          </div>
          <div className="flex gap-12">
            <nav className='flex flex-col gap-2'>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Product Support</a>
              <a className="link link-hover">Order Tracking</a>
              <a className="link link-hover">Shipping & Delivery</a>
              <a className="link link-hover">Returns</a>
            </nav>
            <nav className='flex flex-col gap-2'>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Contact</a>
            </nav>
            <nav className='flex flex-col gap-2'>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of Services</a>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Cookie Policy</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
