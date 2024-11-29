import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      <div className="container mx-auto text-center flex flex-col items-center">
        {/* Brand Section */}
        <div className="mb-8">
          <h2 className="font-bold text-3xl mb-2">Renterio Home</h2>
          <p>Your trusted partner in finding the perfect home.</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
          <div>
            <h6 className="footer-title mb-4">Services</h6>
            <ul className="space-y-2">
              <li><a className="link link-hover" href="#">Property Listings</a></li>
              <li><a className="link link-hover" href="#">Home Valuation</a></li>
              <li><a className="link link-hover" href="#">Consultation</a></li>
              <li><a className="link link-hover" href="#">Mortgage Assistance</a></li>
            </ul>
          </div>
          <div>
            <h6 className="footer-title mb-4">Company</h6>
            <ul className="space-y-2">
              <li><a className="link link-hover" href="#">About Us</a></li>
              <li><a className="link link-hover" href="#">Careers</a></li>
              <li><a className="link link-hover" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6 className="footer-title mb-4">Legal</h6>
            <ul className="space-y-2">
              <li><a className="link link-hover" href="#">Terms of Service</a></li>
              <li><a className="link link-hover" href="#">Privacy Policy</a></li>
              <li><a className="link link-hover" href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
