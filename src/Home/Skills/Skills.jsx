import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {

        useEffect(() => {
          AOS.init();
        }, []);
        return  (
            <>
              <div className="skill_body">
                <div className="heading">
                  <div data-AOS="fade-up" className="head1">MY SKILLS</div>
                  <div data-AOS="fade-up" data-aos-delay="10" className="head2">I LOVE TO BUILD NEW THINGS</div>
                </div>
                <div className="stack_body">
                  <div className="stack sk1">
                    <div data-AOS="fade-right" data-aos-delay="100" className="head_name">Languages/Libraries</div>
                    <div className="upper">
                      <div data-AOS="fade-right" data-aos-delay="400" className="sk c"/>
                      <div data-AOS="fade-right" data-aos-delay="300" className="sk c__"/>
                      <div data-AOS="fade-right" data-aos-delay="200" className="sk html"/>
                      <div data-AOS="fade-right" data-aos-delay="100" className="sk css" />
                    </div>
                    <div className="upper">
                      <div data-AOS="fade-right" data-aos-delay="300" className="sk js"></div>
                      <div data-AOS="fade-right" data-aos-delay="200" className="sk react"></div>
                      <div data-AOS="fade-right" data-aos-delay="100" className="sk node"></div>
                    </div>
                  </div>
                  <div className="stack sk2">
                    <div data-AOS="fade-left" data-aos-delay="100" className="head_name">Tools</div>
                    <div className="upper">
                      <div data-AOS="fade-left" data-aos-delay="100" className="sk vs"/>
                      <div data-AOS="fade-left" data-aos-delay="200" className="sk figma" />
                      <div data-AOS="fade-left" data-aos-delay="300" className="sk git"/>
                      <div data-AOS="fade-left" data-aos-delay="400" className="sk boot"/>
                    </div>
                    <div className="upper">
                      <div data-AOS="fade-left" data-aos-delay="100" className="sk postman"/>
                      <div data-AOS="fade-left" data-aos-delay="200" className="sk docker"/>
                      <div data-AOS="fade-left" data-aos-delay="300" className="sk linux"/>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
};

export default Skills;
