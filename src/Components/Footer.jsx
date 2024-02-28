import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <h3 className="text-center font-bold">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h3>
      </div>
      <div>
        <p className="text-center">
          CHEMICALS & PROCESS | POWER WATER & WASTE WATER | OILS & GAS | PHARMA
          | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL &
          MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR |
          BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className=" bg-red-600 text-white flex items-center justify-between px-20 h-20">
        <div>
          <p className=" text-sm">
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            Toll free 1800 200 1234
          </p>
        </div>
        <div>
          <p className=" text-sm">
            <span>
              <i class="fa-brands fa-facebook"></i>
            </span>
            www.facebook.com/cripumps
          </p>
        </div>
        <div>
          <p className=" text-sm">
            <span>
              <i class="fa-solid fa-globe"></i>
            </span>
            www.crigroups.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
