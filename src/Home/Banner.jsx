import React from 'react';

const Banner = ({ data }) => {
    console.log(data);

    return (
        <div>
            <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                <div className="carousel-item">
                    <img
                        className='max-w-96 max-h-72 rounded-box'
                        src={data[0].img} />
                </div>
                <div className="carousel-item">
                    <img
                        src={data[1].img}
                        className="max-w-72 max-h-52  rounded-box" />
                </div>
                <div className="carousel-item">
                    <img
                        src={data[2].img}
                        className="max-w-72 max-h-52  rounded-box" />
                </div>
                {/* <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                        className="rounded-box" />
                </div> */}
            </div>
        </div>
    );
};

export default Banner;