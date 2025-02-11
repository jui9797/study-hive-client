// Import Swiper React components
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      // Install Swiper modules
      modules={[Autoplay, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto change every 3s
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[80vh] bg-[url('assets/Collaborate-Learn.jpeg')] border-2 border-blue-500 mt-10 lg:mt-16 w-full">
          <div className="hero-overlay bg-black bg-opacity-60"></div>
          <div className="hero-content">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-primary dark:text-white">
                Collaborate with Friends
              </h1>
              <p className="py-6 text-white dark:text-gray-200">
                Work together with friends on assignments and group projects.
                Build knowledge through collaboration and teamwork.
              </p>
              <button className="btn bg-primary text-white hover:bg-accent">
                Start Collaborating
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[80vh] bg-[url('assets/Track-Progress.png')] mt-10 lg:mt-16 w-full">
          <div className="hero-overlay bg-black bg-opacity-70"></div>
          <div className="hero-content">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-primary dark:text-white">
                Track Your Progress
              </h1>
              <p className="py-6 text-white">
                Monitor your assignments, grades, and milestones. Stay motivated
                and on track as you achieve your goals.
              </p>
              <button className="btn bg-primary text-white hover:bg-accent">
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[80vh] bg-[url('assets/Engage-Learn.jpg')] mt-10 lg:mt-16 w-full">
          <div className="hero-overlay bg-black bg-opacity-60 pointer-events-none"></div>
          <div className="hero-content">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-primary dark:text-white">
                Engage & Learn
              </h1>
              <p className="py-6 text-white">
                Take part in interactive learning sessions and discussions.
                Transform your understanding through active participation.
              </p>
              <button className="btn bg-primary text-white hover:bg-accent">
                Join a Study Group
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
