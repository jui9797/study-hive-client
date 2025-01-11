

import AssignmentGrid from './AssignmentGrid';
import Banner from './Banner';
import Faq from './Faq';
import Newsletter from './Newsletter';
import WhyChoose from './whyChoose';




const Home = () => {
  
    
    return (
      <div>
            <Banner></Banner>
          <div className='my-10'>
            <WhyChoose></WhyChoose>
          </div>
          <div className='my-10'>
            <AssignmentGrid></AssignmentGrid>
          </div>
          <div className='my-10 lg:my-20'>
          <Faq></Faq>
          </div>
          <div className='my-10 lg:my-20'>
            <Newsletter></Newsletter>
          </div>
        </div>
    );
};

export default Home;