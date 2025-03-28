import React from 'react';
import gamepad from '../assets/gamepad.png';
import eledenring from '../assets/eldenring.jpg';
import doom from '../assets/doom.jpg';

const StayConnected = () => {
    return (
        <div className="flex items-center justify-center p-4"> {/* Centers everything and adds padding */}
            <div className="grid gap-5 w-full max-w-4xl grid-cols-1 md:grid-cols-2"> {/* Responsive grid layout */}
                <div className="p-6 border rounded-xl flex flex-col items-center justify-center text-center">
                    <h4 className='font-bold text-2xl md:text-3xl'>Giveaways</h4>
                    <p>Keep your eyes on Chill Gamer to win a Brand new Game Pad</p>
                    <img className='w-44 md:w-56 lg:w-64 mx-auto mt-5' src={gamepad} alt="Gamepad" />
                </div>
                <div className="border rounded-xl row-span-2 p-3 w-full">
                    <h4 className='font-bold text-2xl md:text-3xl'>News & Updates</h4>
                    <h5 className='text-lg md:text-xl underline'>Upcoming Games of 2025</h5>

                    <div className="card bg-base-200 w-full max-w-sm md:max-w-md pb-5 shadow-sm mx-auto my-5">
                        <div className="card-body">
                            <h2 className="card-title">Elden Ring Nightreign</h2>
                            <div className="badge badge-primary badge-outline">Adventure</div>
                        </div>
                        <figure>
                            <img className='w-full max-w-xs md:max-w-sm' src={eledenring} alt="Elden Ring" />
                        </figure>
                    </div>

                    <div className="card bg-base-200 w-full max-w-sm md:max-w-md pb-5 shadow-sm mx-auto my-5">
                        <div className="card-body">
                            <h2 className="card-title">Doom: The Dark Ages</h2>
                            <div className="badge badge-primary badge-outline">Adventure</div>
                        </div>
                        <figure>
                            <img className='w-full max-w-xs md:max-w-sm' src={doom} alt="Doom" />
                        </figure>
                    </div>
                </div>
                <div className="border rounded-xl text-center p-6 w-full">
                    <h4 className='font-bold text-2xl md:text-3xl'>Subscribe Us on Youtube</h4>
                    <div className="flex justify-center mt-4">
                        <iframe className='w-full max-w-md aspect-video' src="https://www.youtube.com/embed/ReB_8fdv_Wo?si=frYynTNIwmH0K0a8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StayConnected;