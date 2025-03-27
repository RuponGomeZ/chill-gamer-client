import React from 'react';

const StayConnected = () => {
    return (
        <div className="flex items-center justify-center"> {/* Centers everything */}
            <div className="grid grid-cols-2 grid-rows-2 gap-5">
                <div className="bg-red-500 w-40 border"> Giveaways</div>
                <div className="bg-red-500 w-40  border row-span-2">News & Updates</div>
                <div className="bg-red-500 w-40  border">Subscribe Us on Youtube</div>
            </div>
        </div>
    );
};

export default StayConnected;
