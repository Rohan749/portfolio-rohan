import React, { useEffect } from "react";
import "./FirstPage.css";
import { GrTwitter } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGeeksforgeeks } from "react-icons/si";
import Parallax from "react-rellax";
import ChangingText from "./ChangingText";
import AOS from "aos";
import "aos/dist/aos.css";

const FirstPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="background">
        <div className="black_bar" />
        <div className="firstpage_body">
          <div data-AOS="fade-up" className="my_description">
            <Parallax speed="6">
              <ChangingText />
            </Parallax>
          </div>
          <div className="icon_links">
            <Parallax speed="6">
              <div data-AOS="fade-up" data-aos-delay="100" className="iconl">
                <a href="https://twitter.com/heyrohan7" target="_blank"><GrTwitter /></a>
              </div>
              <div data-AOS="fade-up" data-aos-delay="200" className="iconl">
                <a href="https://github.com/Rohan749" target="_blank"><BsGithub /></a>
              </div>
              <div data-AOS="fade-up" data-aos-delay="300" className="iconl">
                <a href="https://www.instagram.com/_r.code_/" target="_blank"><BsInstagram /></a>
              </div>
              <div data-AOS="fade-up" data-aos-delay="400" className="iconl">
                <a href="https://www.linkedin.com/in/rohan-kumar-pandey-25a263208/" target="_blank"><BsLinkedin /></a>
              </div>
              <div data-AOS="fade-up" data-aos-delay="500" className="iconl">
                <a href="https://auth.geeksforgeeks.org/user/rohanpandey749/practice" target="_blank"><SiGeeksforgeeks /></a>
              </div>
            </Parallax>
          </div>
          <div className="responsive_icons">
            <div data-AOS="fade-up" data-aos-delay="100" className="resp_icon">
            <a href="https://twitter.com/heyrohan7" target="_blank"><GrTwitter /></a>
            </div>
            <div data-AOS="fade-up" data-aos-delay="200" className="resp_icon">
            <a href="https://github.com/Rohan749" target="_blank"><BsGithub /></a>
            </div>
            <div data-AOS="fade-up" data-aos-delay="300" className="resp_icon">
            <a href="https://www.instagram.com/_r.code_/" target="_blank"><BsInstagram /></a>
            </div>
            <div data-AOS="fade-up" data-aos-delay="400" className="resp_icon">
            <a href="https://www.linkedin.com/in/rohan-kumar-pandey-25a263208/" target="_blank"><BsLinkedin /></a>
            </div>
            <div data-AOS="fade-up" data-aos-delay="500" className="resp_icon">
            <a href="https://auth.geeksforgeeks.org/user/rohanpandey749/practice" target="_blank"><SiGeeksforgeeks /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
