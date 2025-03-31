import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HighestRatedGames = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://game-review-server-site.vercel.app/review/sorted")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="flex flex-col items-center lg:mx-0 mx-6">
            <div className="carousel w-full max-w-[700px]">
                {data.map((game, index) => (
                    <div
                        key={index}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full"
                    >
                        <img
                            src={game.img}
                            alt={`Game ${index + 1}`}
                            className="w-full h-64 md:h-80 lg:h-96 object-cover"
                        />

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            {/* Previous Button */}
                            <a
                                href={`#slide${index === 0 ? data.length : index}`}
                                className="btn btn-circle"
                            >
                                ❮
                            </a>
                            {/* Next Button */}
                            <a
                                href={`#slide${(index + 2) > data.length ? 1 : index + 2}`}
                                className="btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>

                        {/* Explore More Button */}
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                            <Link to={`/reviews/${game._id}`}>
                                <button
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"

                                >
                                    Explore More
                                </button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default HighestRatedGames;