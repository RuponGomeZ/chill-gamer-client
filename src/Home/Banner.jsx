import React from 'react';

const Banner = ({ data }) => {
    return (
        <div className="flex justify-center items-center p-4">
            <div className="carousel bg-neutral rounded-box w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl h-48 sm:h-56 md:h-64 lg:h-[400px] space-x-4 p-4">
                <div className="carousel-item">
                    <img
                        className='w-full h-full object-cover rounded-box'
                        src={data[0].img}
                        alt="Slide 1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={data[1].img}
                        className='w-full h-full object-cover rounded-box'
                        alt="Slide 2"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={data[2].img}
                        className='w-full h-full object-cover rounded-box'
                        alt="Slide 3"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
