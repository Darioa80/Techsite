import React from "react";
import Image from "../components/Image";

import "../components/Image.css";

const Bio = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 center" style={{ flexDirection: "column" }}>
            <Image
              image="Dario-main-tall.jpg"
              alt="Dario"
              styleName="mainImage"
              name="Dario Andrade Mendoza"
              description="Dario leading a conversation around mental health and resilience with Ladytowne"
            />
          </div>
          <div className="col-sm-8 center">
            <p className="bioText">
              My journey in software development started in 2015, when I was a
              junior at the University of Arizona. I was studying Mechanical
              Engineering and decided to add the class ECE 175 to my schedule.
              The class was officially called{" "}
              <b>Computer Programming for Engineering Applications I'</b>"
              through the Electrical and Computer Engineering (ECE) department
              within my college of Engineering.
              <br />
              <br />
              It quickly became one of my favorite classes of that semester.
              Every week we had to solve programming problems, and each week
              they became more complex. This class provided a new experience for
              me. It challenged the way I approached problems and rewarded the
              effort put into it. The reward was more than a grade this time.
              There was a feeling of excitement and pride when the program
              worked. I decided to pursue programming classes along with my
              Mechanical Engineering degree. Taking 4 programming classes in
              total where{" "}
              <b>
                {" "}
                I learned Object Oriented Software Design through Java, learned
                Data Structures and Algorithms in C and C++ as well as
                foundations for web programming.
              </b>{" "}
              I decided that I wanted to program more and embarked in a graduate
              program through the ECE department. <br />
              <br />I completed that degree in May of 2020.{" "}
              <b>
                {" "}
                Now graduated with my Master's degree, I have been learning
                technologies that were not taught at university.{" "}
              </b>{" "}
              I started with React.js and used that library to create this site.
              I've revisited FullStack development through the MERN stack
              project I deployed as well as Data Structures and Algorithms
              through LeetCode. <br />
              <br /> I'm always excited to learn new technologies and skills,
              and enver afraid to revisit concepts i've learned in the past. I
              continue to problem solve, to learn and to challenge myself. These
              personality traits have lead me to programming time and time
              again. <b>I'm determined</b> to start my career as a software
              developer.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bio;
