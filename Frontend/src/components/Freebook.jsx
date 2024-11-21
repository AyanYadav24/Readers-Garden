import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${window.location.origin}/book`);
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1, // Added rows setting to show two rows of items
    slidesPerRow: 2, // Number of items per row
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          rows: 2, // For larger screens, keep two rows
          slidesPerRow: 3, // 3 items per row
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 2, // On medium screens, maintain two rows
          slidesPerRow: 2, // 2 items per row
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1, // For small screens, show one row
          slidesPerRow: 1, // 1 item per row
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="font-semibold text-2xl md:text-3xl mb-4 text-gray-900 dark:text-gray-100">
            Free Offered <span className="text-teal-600">Books</span>
          </h1>
          {/* <p className="text-gray-700 dark:text-gray-300">
            Please take a moment to look at the books below; they offer valuable insights and knowledge on various fascinating topics. These books are really amazing. Kindly take a moment to look at these extremely knowledgeable and beautiful books.
          </p> */}
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
