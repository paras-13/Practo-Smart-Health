import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export const SliderImage = () => {
  const images = [
    {
      url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png",
    },
    {
      url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png",
    },
    {
      url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-3.8c8ab982.png",
    },
    {
      url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png",
    },
  ];

  return (
    <div id="mainSlider">
      <div id="SliderImageImg">
        <SimpleImageSlider
          autoPlay={true}
          showBullets={false}
          width={"100%"}
          height={310}
          images={images}
          bgColor={"transperent"}
        />
      </div>
    </div>
  );
}
