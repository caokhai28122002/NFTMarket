import Slider from "react-slick";

import { FCC } from "@/types";
import React from "react";
import ArrowRight from "@/icons/ArrowRight";
import SlideOne from "./SlideOne";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
};

const SlideSection: FCC = () => {
  return (
    <div className="relative py-16">
      <Slider {...settings} >
        <SlideOne>
          <div className="flex gap-14">
            <ArrowRight className="-scale-100" />
            <ArrowRight />
          </div>
        </SlideOne>
        <SlideOne>
          <div className="flex gap-14">
            <ArrowRight className="-scale-100" />
            <ArrowRight />
          </div>
        </SlideOne>
        <SlideOne>
          <div className="flex gap-14">
            <ArrowRight className="-scale-100" />
            <ArrowRight />
          </div>
        </SlideOne>
        <SlideOne>
          <div className="flex gap-14">
            <ArrowRight className="-scale-100" />
            <ArrowRight />
          </div>
        </SlideOne>
      </Slider>
    </div>
  );
};

export default SlideSection;
