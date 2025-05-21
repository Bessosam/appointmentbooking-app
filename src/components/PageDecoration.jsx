import React from "react";

const PageDecoration = () => {
  return (
    <div>
      <div className="absolute bottom-20 right-0 z-0 size-40 sm:size-60 md:size-80 opacity-90 overflow-hidden">
        <img
          src="/DesignBG.svg"
          alt=""
          className="absolute bottom-0 right-0 w-72 sm:w-96 md:w-[500px] object-contain z-0 image-effect"
        />
        <img
          src="/landing-page-img.svg"
          alt=""
          className="absolute top-15 right-0 z-10 w-full h-full"
        />
      </div>
    </div>
  );
};

export default PageDecoration;
