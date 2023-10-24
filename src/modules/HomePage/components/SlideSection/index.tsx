import Slider from "react-slick";

import ArrowRight from "@/icons/ArrowRight";
import { FCC } from "@/types";
import { useRef, useState } from "react";
import Slide from "./Slide";

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
  const slideRef = useRef<Slider>(null);
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    if (!slideRef.current) return;
    slideRef?.current.slickPrev();
  };

  const handleNext = () => {
    if (!slideRef.current) return;
    slideRef?.current.slickNext();
  };
  return (
    <div className="relative py-16">
      <Slider
        {...settings}
        ref={slideRef}
        beforeChange={(_, next) => setIndex(next)}
      >
        <Slide
          slideIndex="01"
          isSelected={index === 0}
          slogan="GERALD WINE FIELD MOTION ART DIRECTOR"
          title="INSPIRE, DELIGHT & EDUCATE"
          description="THAT IS LARGE ENOUGH FOR SEVERAL PEOPLE TO MOVE ABOUT, AND WHOSE SIZE, FIXTURES, THE ACTIVITY TO BE CONDUCTED."
        >
          <div className="flex gap-14">
            <ArrowRight
              onClick={handlePrevious}
              className="-scale-100 cursor-pointer"
            />
            <ArrowRight onClick={handleNext} className="cursor-pointer" />
          </div>
        </Slide>
        <Slide
          slideIndex="02"
          isSelected={index === 1}
          slogan="GERALD WINE FIELD MOTION ART DIRECTOR"
          title="INSPIRE, DELIGHT & EDUCATE"
          description="THAT IS LARGE ENOUGH FOR SEVERAL PEOPLE TO MOVE ABOUT, AND WHOSE SIZE, FIXTURES, THE ACTIVITY TO BE CONDUCTED."
        >
          <div className="flex gap-14">
            <ArrowRight
              onClick={handlePrevious}
              className="-scale-100 cursor-pointer"
            />
            <ArrowRight onClick={handleNext} className="cursor-pointer" />
          </div>
        </Slide>
        <Slide
          slideIndex="03"
          isSelected={index === 2}
          slogan="GERALD WINE FIELD MOTION ART DIRECTOR"
          title="INSPIRE, DELIGHT & EDUCATE"
          description="THAT IS LARGE ENOUGH FOR SEVERAL PEOPLE TO MOVE ABOUT, AND WHOSE SIZE, FIXTURES, THE ACTIVITY TO BE CONDUCTED."
        >
          <div className="flex gap-14">
            <ArrowRight
              onClick={handlePrevious}
              className="-scale-100 cursor-pointer"
            />
            <ArrowRight onClick={handleNext} className="cursor-pointer" />
          </div>
        </Slide>
        <Slide
          slideIndex="04"
          isSelected={index === 3}
          slogan="GERALD WINE FIELD MOTION ART DIRECTOR"
          title="INSPIRE, DELIGHT & EDUCATE"
          description="THAT IS LARGE ENOUGH FOR SEVERAL PEOPLE TO MOVE ABOUT, AND WHOSE SIZE, FIXTURES, THE ACTIVITY TO BE CONDUCTED."
        >
          <div className="flex gap-14">
            <ArrowRight
              onClick={handlePrevious}
              className="-scale-100 cursor-pointer"
            />
            <ArrowRight onClick={handleNext} className="cursor-pointer" />
          </div>
        </Slide>
        <Slide
          slideIndex="05"
          isSelected={index === 4}
          slogan="GERALD WINE FIELD MOTION ART DIRECTOR"
          title="INSPIRE, DELIGHT & EDUCATE"
          description="THAT IS LARGE ENOUGH FOR SEVERAL PEOPLE TO MOVE ABOUT, AND WHOSE SIZE, FIXTURES, THE ACTIVITY TO BE CONDUCTED."
        >
          <div className="flex gap-14">
            <ArrowRight
              onClick={handlePrevious}
              className="-scale-100 cursor-pointer"
            />
            <ArrowRight onClick={handleNext} className="cursor-pointer" />
          </div>
        </Slide>
      </Slider>
    </div>
  );
};

export default SlideSection;
