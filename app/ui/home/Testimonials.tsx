"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonialData } from "@/assets/assets";
import Testimonial from "@/app/ui/home/Testimonial";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // max-width
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <Slider {...settings} className="mt-12">
      {testimonialData.map((testimonial, i) => (
        <Testimonial testimonial={testimonial} key={`testimonial-${i}`} />
      ))}
    </Slider>
  );
};

export default Testimonials;
