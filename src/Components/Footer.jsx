import React from 'react';

const Footer = () => {
    return (
      <div className="bg-[#125B9A]">
        <footer className="footer text-white p-10">
          <aside>
            <img className='w-24' src="https://i.ibb.co.com/0D8RzXp/Swinging-Doodle-1.png" alt="" />
            <p>
              Dreamscape Design Ltd.
              <br />
              Providing reliable Painting since 2019
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Navigate</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;