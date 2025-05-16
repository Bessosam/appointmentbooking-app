import React from "react";

const PageDecoration = () => {
  return (
    <div>
      <div className="absolute bottom-20 right-0 z-0 size-60 opacity-90 overflow-hidden">
        <img
          src="/DesignBG.svg"
          alt=""
          className="absolute top-10 right-0 z-0 w-full h-full image-effect"
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
