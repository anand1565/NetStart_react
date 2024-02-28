import React from "react";
import AwardImage from '../assets/2.png';

const Award = () => {
  return (
    <div className=" max-w-screen-md">
      <h2 className=" font-bold">
        C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
        4th time.
      </h2>
      <div className=" mx-5">
        <ul className="list-disc">
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
      </div>
      <div className=" mt-5">
        <img
          src={AwardImage}
          alt="Award recived"
          style={{ height: "300px", width: "100%" }}
        />
      </div>
      <p>
        Government of India has awarded the
        <b> "National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
        Joint Managing Director of C.R.I. Group received the award from Smt.
        Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
        Minister of State.
      </p>
    </div>
  );
};

export default Award;
