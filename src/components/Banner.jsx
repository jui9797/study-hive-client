import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[80vh] bg-[url('assets/group-1.jpg')] mt-10 lg:mt-16 w-full">
          <div className="hero-overlay bg-black bg-opacity-60"></div>
          <div className="hero-content">
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-2xl md:text-5xl font-bold text-base-100">
                Boost Your Learning with Study Hive!
              </h1>
              <p className="py-4 text-base-100">
                A smart way to study—join groups, submit assignments, and
                support your peers.
              </p>
              <button className="relative overflow-hidden rounded-lg bg-[#0AB99D] text-white px-6 py-3  uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#0AB99D] font-bold">
                <Link to="/assignments">Explore Now</Link>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[80vh] bg-[url('assets/group-3.jpg')] mt-10 lg:mt-16 w-full">
          <div className="hero-overlay bg-black bg-opacity-70"></div>
          <div className="hero-content">
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-2xl md:text-5xl font-bold text-base-100">
                Study Smart, Not Alone!
              </h1>
              <p className="py-4 text-base-100">
                Connect with like-minded learners, share ideas, and make
                studying more fun and productive.
              </p>
              <button className="relative overflow-hidden rounded-lg bg-[#0AB99D] text-white px-6 py-3  uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#0AB99D] font-bold">
                <Link to="/contact">Join for Free</Link>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[80vh] bg-[url('assets/group-4.jpg')] mt-10 lg:mt-16 w-full">
          <div className="hero-overlay bg-black bg-opacity-60 pointer-events-none"></div>
          <div className="hero-content">
            <div className="flex flex-col justify-center items-center text-base-100 text-center">
              <h1 className="text-2xl md:text-5xl font-bold ">
                Your Ultimate Group Study Hub!
              </h1>
              <p className="py-4 text-base-100">
                Create, collaborate, and conquer assignments with friends in an
                interactive learning environment.
              </p>
              <button className="relative overflow-hidden rounded-lg bg-[#0AB99D] text-white px-6 py-3  uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#0AB99D] font-bold">
                <Link to="/assignments">Explore Now</Link>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
