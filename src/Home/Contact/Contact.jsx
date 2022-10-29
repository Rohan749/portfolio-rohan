import React from "react";
import "./Contact.css"
import { ImMail3 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Contact = () => {
  return (
    <>
      <div className="contact_body">
        <div className="heading">
          <div data-AOS="fade-up" className="head1">
            CONTACT ME
          </div>
          <div data-AOS="fade-up" data-aos-delay="10" className="head2">
            LET'S GET IN TOUCH
          </div>
        </div>
        <div className="contact_">
            <div data-AOS="fade-up" data-aos-delay="10" className="container email">
                <ImMail3 /> rohanpandey749@gmail.com
            </div>
            <div data-AOS="fade-up" data-aos-delay="20" className="container phno">
                <BsFillTelephoneFill /> +91-8210036627
            </div>
            <div data-AOS="fade-up" data-aos-delay="30" className="container twitter">
                <BsTwitter /> @heyrohan7
            </div>
            <div data-AOS="fade-up" data-aos-delay="40" className="container linkdn">
                <BsLinkedin /> Rohan Kumar Pandey 
            </div>
        </div>
        <div className="copyright">&copy; Copyright 2022 Rohan Kumar Pandey</div>
      </div>
    </>
  );
};

export default Contact;
