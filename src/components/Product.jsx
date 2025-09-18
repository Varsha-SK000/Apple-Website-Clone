import React from 'react';
import img1 from "./images/desktop/promo_ipad_air__bfbxzvw65c02_large.jpg";
import img2 from "./images/Products/promo_iphone_tradein__bugw15ka691e_medium.jpg";
import img3 from "./images/desktop/promo_ios18__eo1lt24j3wk2_large.jpg";
import img4 from "./images/Products/promo_iphone_family__ofrg9zdy1teq_medium.jpg";
import Button from "./Common/Button";

const Product = () => {
  const productData = [
    {
      id: 1,
      title: "iOS 18",
      lines: ["Personalise your iPhone with", "10 new Indian languages"],
      bgImage: img1,
      highlight: true,
    },
    {
      id: 2,
      title: "iPad air",
      lines: ["Now supercharged by the M3 chip"],
      bgImage: img2,
    },
    {
      id: 3,
      title: "MacBook pro",
      lines: ["A work of smart"],
      bgImage: img3,
    },
    {
      id: 4,
      title: "iPhone",
      lines: ["Meet the iPhone 16 family"],
      bgImage: img4,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto p-1">
      {productData.map(({ id, title, lines, bgImage }) => (
        <div
          key={id}
          className="relative min-h-[60vh] xs:min-h-[50vh] bg-cover bg-center rounded-xl shadow-lg overflow-hidden flex items-start justify-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Card Content at Top */}
          <div className="relative px-4 xs:px-2 pt-6 xs:pt-4">
            <div className=" rounded-xl w-full px-4 xs:px-2 py-3 xs:py-2 text-center text-black ">
              <h1 className="text-sm xs:text-xs sm:text-xl md:text-2xl font-bold break-words">
                {title}
              </h1>
              {lines.map((line, index) => (
                <p
                  key={index}
                  className="text-xs xs:text-[10px] sm:text-lg md:text-xl break-words"
                >
                  {line}
                </p>
              ))}
              <Button />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
