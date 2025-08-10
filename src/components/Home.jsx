import AboutUs from "./AboutUs";
import AssignmentGrid from "./AssignmentGrid";
import Banner from "./Banner";
import Faq from "./Faq";
import Newsletter from "./Newsletter";
import Reviews from "./Reviews";
import WhyChoose from "./whyChoose";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <AboutUs></AboutUs>
        <WhyChoose></WhyChoose>
        <AssignmentGrid></AssignmentGrid>
        <Faq></Faq>
        <Newsletter></Newsletter>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;
