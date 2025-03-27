import React from 'react';
import gamepad from '../assets/gamepad.png'
import eledenring from '../assets/eldenring.jpg'
import doom from '../assets/doom.jpg'


const StayConnected = () => {
    return (
        <div className="flex items-center justify-center"> {/* Centers everything */}
            <div className="grid grid-cols-2  grid-rows-2 gap-5">
                <div className=" p-6 border rounded-xl flex flex-col items-center justify-center">
                    <h4 className='font-bold text-3xl'> Giveaways</h4>
                    <p>Keep your eyes on Chill Gamer to win a Brand new Game Pad</p>
                    <img className='w-64 mx-auto mt-7' src={gamepad} alt="" />
                </div>
                <div className="  border rounded-xl row-span-2">
                    <h4 className='font-bold text-3xl'>News & Updates</h4>
                    <h5 className=' text-xl underline'>Upcoming Games of 2025</h5>

                    <div className="card bg-base-200 w-96 shadow-sm mx-auto my-10">
                        <div className="card-body">
                            <h2 className="card-title">Elden Ring Nightreign</h2>
                            <div className="badge badge-primary badge-outline">Adventure</div>
                        </div>
                        <figure>
                            <img
                                src={eledenring}
                                alt="Shoes" />
                        </figure>
                    </div>

                    <div className="card bg-base-200 w-96 shadow-sm mx-auto my-10">
                        <div className="card-body">
                            <h2 className="card-title">Doom: The Dark Ages</h2>
                            <div className="badge badge-primary badge-outline">Adventure</div>
                        </div>
                        <figure>
                            <img
                                src={doom}
                                alt="Shoes" />
                        </figure>
                    </div>
                </div>
                <div className="border rounded-xl">
                    <h4 className='font-bold text-3xl p-6'>Subscribe Us on Youtube</h4>
                    <div>
                        <iframe className='p-5' width="560" height="315" src="https://www.youtube.com/embed/ReB_8fdv_Wo?si=frYynTNIwmH0K0a8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StayConnected;
