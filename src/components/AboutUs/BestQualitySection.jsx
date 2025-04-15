import React from "react";
import { styles } from "../../styles/styles";
import { GiSofa } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { About1 } from "../../assets/export";

const BestQualitySection = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} w-full py-6 lg:pt-6 lg:pb-20 bodyBg`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-6">
          <h1 className="text-4xl font-bold">
            The Best Quality Furniture Store in Town
          </h1>
          <p className="text-base font-normal leading-7">
            Sagittis enim, auctor ultrices dui etiam viverra nulla scelerisque
            in semper porttitor pharetra, tortor amet lorem cursus velit posuere
            tristique tempus, tincidunt non velit quis congue lectus a
            ullamcorper iaculis.
          </p>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-start justify-start gap-x-3">
              <GiSofa className="text-yellow-500 mt-0.5 text-2xl block" />
              <div>
                <h2 className="text-base font-bold leading-7">
                  Huge Selection
                </h2>
                <p className="text-base font-normal leading-7">
                  Sagittis enim, auctor ultrices dui etiam viverra nulla.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-x-3">
              <FaWallet className="text-yellow-500 mt-0.5 text-xl block" />
              <div>
                <h2 className="text-base font-bold leading-7">
                  Low Price Everyday
                </h2>
                <p className="text-base font-normal leading-7">
                  Tincidunt sed eget nunc tellus viverra sapien massa cursus.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-x-3">
              <FaTruck className="text-yellow-500 mt-0.5 text-2xl block" />
              <div>
                <h2 className="text-base font-bold leading-7">
                  Same Day Delivery
                </h2>
                <p className="text-base font-normal leading-7">
                  Pretium, tempus ultricies lacus eleifend scelerisque sem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:px-8 lg:pt-3 lg:col-span-1">
          <img src={'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D&w=500'} alt="" className="drop-shadow-2xl brightness-90" />
        </div>
      </div>
    </div>
  );
};

export default BestQualitySection;
