import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="cover">
          <div className="about_body">
            <div className="heading">
              <div data-AOS="fade-up" className="head1">ABOUT ME</div>
              <div data-AOS="fade-up" data-aos-delay="50" className="head2">LET ME INTRODUCE MYSELF</div>
            </div>
            <div className="describe_body">
              <div data-AOS="fade-right" data-aos-delay="100" className="profile_pic" />
              <div data-AOS="fade-left" data-aos-delay="100" className="describe_para">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  repellat repudiandae in quaerat tempora fugiat odit mollitia
                  necessitatibus laborum deleniti cumque nobis explicabo ipsa
                  quae, fuga, vel sed facilis iste?
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default About;
