import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import zoneImg from '@/assets/swimming.png';
import classImg from '@/assets/class.png';
import playground from '@/assets/playground.png';
import bgImg from '@/assets/bg.png';

const RightSidebar = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Login Section */}
            <div>
                <h2 className='font-bold text-lg mb-4'>Login with</h2>
                <div className='flex flex-col gap-2'>
                    <button className='btn btn-outline border-blue-400 text-blue-500 hover:bg-blue-50 w-full flex items-center justify-center gap-2 normal-case'>
                        <FaGoogle /> Login with Google
                    </button>
                    <button className='btn btn-outline border-gray-700 text-gray-700 hover:bg-gray-100 w-full flex items-center justify-center gap-2 normal-case'>
                        <FaGithub /> Login with Github
                    </button>
                </div>
            </div>

            {/* Find Us On Section */}
            <div>
                <h2 className='font-bold text-lg mb-4'>Find Us On</h2>
                <div className='border rounded-lg overflow-hidden border-gray-200'>
                    <a href="#" className='flex items-center gap-3 p-4 border-b hover:bg-gray-50 transition-all'>
                        <div className='bg-gray-100 p-2 rounded-full text-blue-700'><FaFacebook /></div>
                        <span className='text-gray-600 font-medium'>Facebook</span>
                    </a>
                    <a href="#" className='flex items-center gap-3 p-4 border-b hover:bg-gray-50 transition-all'>
                        <div className='bg-gray-100 p-2 rounded-full text-blue-400'><FaTwitter /></div>
                        <span className='text-gray-600 font-medium'>Twitter</span>
                    </a>
                    <a href="#" className='flex items-center gap-3 p-4 hover:bg-gray-50 transition-all'>
                        <div className='bg-gray-100 p-2 rounded-full text-pink-500'><FaInstagram /></div>
                        <span className='text-gray-600 font-medium'>Instagram</span>
                    </a>
                </div>
            </div>

            {/* Q-Zone Section (Updated Style) */}
            <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className='font-bold text-lg mb-6'>Q-Zone</h2>
                <div className='flex flex-col gap-10'>
                    
                    {/* Swimming Card */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-white border transform rotate-3 rounded-md shadow-sm"></div>
                        <div className="absolute inset-0 bg-white border transform -rotate-2 rounded-md shadow-sm"></div>
                        <div className="relative bg-white p-3 border rounded-md z-10">
                            <Image src={zoneImg} alt="Swimming" className="w-full h-auto rounded-sm" />
                            
                        </div>
                    </div>

                    {/* Class Card */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-white border transform rotate-2 rounded-md shadow-sm"></div>
                        <div className="absolute inset-0 bg-white border transform -rotate-3 rounded-md shadow-sm"></div>
                        <div className="relative bg-white p-3 border rounded-md z-10">
                            <Image src={classImg} alt="Class" className="w-full h-auto rounded-sm" />
                            
                        </div>
                    </div>

                    {/* Playground Card */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-white border transform rotate-3 rounded-md shadow-sm"></div>
                        <div className="absolute inset-0 bg-white border transform -rotate-1 rounded-md shadow-sm"></div>
                        <div className="relative bg-white p-3 border rounded-md z-10">
                            <Image src={playground} alt="Play Ground" className="w-full h-auto rounded-sm" />
                            
                        </div>
                    </div>

                    {/* Bg Img Card */}

                    <div className="relative">
                        <div className="absolute inset-0 bg-white border transform rotate-3 rounded-md shadow-sm"></div>
                        <div className="absolute inset-0 bg-white border transform -rotate-1 rounded-md shadow-sm"></div>
                        <div className="relative bg-white p-3 border rounded-md z-10">
                            <Image src={bgImg} alt="bg img" className="w-full h-auto rounded-sm" />
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RightSidebar;