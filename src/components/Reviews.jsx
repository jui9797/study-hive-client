import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AnimatedImg from "./AnimatedImg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Reviews = () => {
  const { isDarkMode } = useContext(AuthContext);
  const reviews = [
    {
      name: "Andrew Johnson",
      image:
        "https://i.ibb.co.com/xv8k6FH/portrait-casual-guy-posing-studio-176420-28907.jpg",
      role: "Student",
      review:
        "Study Hive has made group studies so easy! I love how I can collaborate with my peers. ",
      rating: 5,
    },
    {
      name: "Liam Anderson",
      image: "https://i.ibb.co/nMZCXcRL/David-Meier-e1709289717460.jpg",
      role: "Developer",
      review:
        "The assignment submission feature is a game changer. Everything is well organized.",
      rating: 4,
    },
    {
      name: "Olivia Smith",
      image:
        "https://i.ibb.co/k2kbjWxF/young-beautiful-girl-posing-black-leather-jacket-park-1153-8104.jpg",
      role: "Designer",
      review:
        "A smart, user-friendly platform for learning and sharing ideas. Highly recommend it.",
      rating: 5,
    },
    {
      name: "Maya Thompson",
      image:
        "https://i.ibb.co.com/fhPVmQK/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
      role: "Developer",
      review:
        "The interface is clean and intuitive. It’s easy to navigate and makes learning enjoyable!",
      rating: 4.5,
    },
    {
      name: "Isabella Carter",
      image:
        "https://i.ibb.co.com/d4RxqzgH/Screen-Shot-2019-08-13-at-8-09-58-PM.png",
      role: "Project Manager",
      review:
        "A fantastic platform with an incredibly supportive and active community.I really appreciate. ",
      rating: 5,
    },
    {
      name: "Noah Anderson",
      image:
        "https://i.ibb.co.com/S7Jy7y63/d6980d7df891d6e75cda017ed6ee2cc1.jpg",
      role: "Content Creator",
      review:
        "An excellent space for sharing creative ideas and collaborating with like-minded people. ",
      rating: 4,
    },
  ];

  return (
    <div className="my-10 lg:my-44 px-4">
      <h2
        className={`text-2xl lg:text-4xl text-center font-bold mb-4 lg:mb-10 ${
          isDarkMode ? "text-white" : "text-gray-700"
        }`}
      >
        Why People Talk About StudyHive?
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" dark:bg-gray-700  rounded-xl p-6 text-center transition-colors duration-300  flex flex-col lg:flex-row justify-center gap-8 items-center">
              <div>
                <AnimatedImg
                  imageSrc={item?.image}
                  alt="Profile picture"
                ></AnimatedImg>
              </div>

              <div
                className={`p-4 rounded-lg shadow-lg shadow-teal-400 ${
                  isDarkMode
                    ? "bg-gray-700 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                <p className="text-xl lg:text-[22px] font-bold mb-4 lg:mb-8 w-3/2">
                  {item.review}
                </p>

                <div className="flex justify-center mb-2">
                  {Array(Math.floor(item.rating))
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                </div>
                <h3 className="text-lg font-semibold ">{item.name}</h3>
                <p className="text-sm ">{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
