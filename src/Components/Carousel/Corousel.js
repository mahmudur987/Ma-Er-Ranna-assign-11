import React from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Corousel = () => {
  const corouselItems = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1621417809801-2fba61eaa511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      Heading: " Delicious Food From Sumyia",
      discription: "A reliable establishment of delicious and nutritious food",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      Heading: "Home Made Food From Sumyia",
      discription: "A reliable establishment of delicious and nutritious food",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1579794661617-b65ceb096d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80",
      Heading: " EXCLUSIVE ALL ITEMS From Sumyia",
      discription: "A reliable establishment of delicious and nutritious food",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      Heading: "PROPERNUTRATION FOOD From Sumyia",
      discription: "A reliable establishment of delicious and nutritious food",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        {corouselItems.map((data, idx) => (
          <div key={idx} class="relative h-[600px] p-3  ">
            <img
              src={data.img}
              alt="Banner Image"
              class="object-cover w-full h-full"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-80"></div>
            <motion.h1
              animate={{
                scale: [1, 2.5, 1],
                x: [null, 60, 0],
                color: "white",
                opacity: [0, 1, 0],
              }}
              // exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 8, yoyo: Infinity }}
              className="absolute left-5 top-1 text-b"
            >
              Welcome
            </motion.h1>
            <motion.h1
              animate={{
                scale: [1, 2.5, 1],
                x: [null, -40, 0],
                y: [null, 40, 0],
                color: "white",
                opacity: [0, 1, 0],
              }}
              // exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 8, yoyo: Infinity }}
              className="absolute right-5 top-1 text-b"
            >
              Ma-Er-Ranna
            </motion.h1>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <h1 class="text-4xl font-bold text-white lg:text-6xl">
                  {data.Heading}
                </h1>
                <p class="mt-4 text-lg text-gray-300 lg:text-xl">
                  {data.discription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Corousel;
