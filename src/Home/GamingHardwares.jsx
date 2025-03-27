import React from 'react';
import sonyGamepad from '../assets/sony-gamepad.jpg'
import xboxGamepad from '../assets/xbox-gamepad.jpg'
import steering from '../assets/steering.jpg'
import headset from '../assets/headset.jpg'

const GamingHardwares = () => {
    return (
        <div className='flex gap-10 justify-center'>
            <div>
                <img className='w-48' src={headset} alt="" />
                <h5 className='font-bold '>Razer Naga Expert MMO</h5>
                <p>$65.00 - $75.00</p>
            </div>
            <div>
                <img className='w-48' src={xboxGamepad} alt="" />
                <h5 className='font-bold '>XBOX Original Gamepad</h5>
                <p>$150.00 - $170</p>
            </div>
            <div>
                <img className='w-48' src={steering} alt="" />
                <h5 className='font-bold '>Thrustmaster Ferrari 458</h5>
                <p>$180.00 - $210.00</p>
            </div>
            <div>
                <img className='w-48' src={headset} alt="" />
                <h5 className='font-bold '>PS3 Original Gamepad</h5>
                <p>$340.00 - $350.00</p>
            </div>

        </div>
    );
};

export default GamingHardwares;