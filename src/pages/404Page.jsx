import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa"; // Replace Next.js Link with react-router-dom Link


const PageNotFound = () => {

    const navigate = useNavigate();
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-lightBlue-300 to-lightBlue-500 p-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
                {/* Left Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                    <h1 className="text-navy-900 font-bold leading-[80px]">
                        <strong>404</strong> <br /> Page Not Found
                    </h1>

                    <div>
                        <button
                            onClick={() => navigate('/')}
                            className="flex gap-2 p-3 border rounded bg-blue-500 text-white font-bold"
                        >
                            <span>Back To Home</span>
                            <FaArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Right Content - Placeholder for Image */}
                <div className="md:w-1/2">
                    <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-xl">
                        {/* Placeholder for an image */}
                        <img src="global-trade.png" alt="Global Trade Data"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
