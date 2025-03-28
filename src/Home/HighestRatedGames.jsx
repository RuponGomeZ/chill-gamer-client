import React, { useEffect, useState } from 'react';

const HighestRatedGames = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/review/sorted")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="flex justify-center lg:mx-0 mx-6">
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighestRatedGames;
