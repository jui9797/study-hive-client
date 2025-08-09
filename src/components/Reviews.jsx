import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  const reviews = [
    {
      name: "Sophia Johnson",
      role: "Student",
      review:
        "Study Hive has made group studies so easy! I love how I can collaborate with my peers and get instant feedback.",
      rating: 5,
    },
    {
      name: "Liam Anderson",
      role: "Developer",
      review:
        "The assignment submission feature is a game changer. Everything is well organized and super easy to use.",
      rating: 4,
    },
    {
      name: "Olivia Smith",
      role: "Designer",
      review:
        "A smart, user-friendly platform for learning and sharing ideas. Highly recommend it to all students!",
      rating: 5,
    },
  ];

  return (
    <div className="my-10 lg:my-28 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        What Our Users Say
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 max-w-xl mx-auto text-center transition-colors duration-300 border-2 border-blue-600">
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                {item?.review}
              </p>
              <div className="flex justify-center mb-2">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
