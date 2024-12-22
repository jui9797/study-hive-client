import React from 'react';

const WhyChoose = () => {
    return (
        <div>
            <h1 className='text-2xl lg:text-5xl text-center font-bold'>Why Choose Us</h1>
            <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='p-4 border-r-2 border-green-600 hover:bg-green-300'>
                    <h3 className='text-xl lg:text-3xl font-bold mb-3 text-green-600'>5+</h3>
                    <p>Years helping students in their studies.</p>
                </div>
                <div className='p-4 border-r-2 border-green-600 hover:bg-green-300'>
                    <h3 className='text-xl lg:text-3xl font-bold mb-3 text-green-600'>400+</h3>
                    <p>Highly qualified and trusted exparts</p>
                </div>
                <div className='p-4 border-r-2 border-green-600 hover:bg-green-300'>
                    <h3 className='text-xl lg:text-3xl font-bold mb-3 text-green-600'>1k</h3>
                    <p>Successfully completed orders.</p>
                </div>
                <div className='p-4  hover:bg-green-300'>
                    <div className='flex gap-4 items-center '>
                    <h3 className='text-xl lg:text-3xl font-bold mb-3 text-green-600 mt-2'>4.8</h3>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" />
                    </div>
                    </div>
                    <p>Average user rating</p>
                </div>

            </div>
        </div>
    );
};

export default WhyChoose;