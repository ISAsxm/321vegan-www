"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { testimonialData } from "@/assets/assets";
import Testimonial from "@/app/ui/home/Testimonial";

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1024) setSlidesToShow(1);
      else setSlidesToShow(2);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Slider {...settings} className="mt-12">
      {testimonialData.map((testimonial, i) => (
        <Testimonial testimonial={testimonial} key={`testimonial-${i}`} />
      ))}
    </Slider>
  );
};

export default Testimonials;
