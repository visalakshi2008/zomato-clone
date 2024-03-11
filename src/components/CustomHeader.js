import React from 'react';
import img1 from "./assets/img1.avif"

const CustomHeader = () => {
    return (
        <>
            <div className='w-full flex justify-center pt-4'>
                <div className='w-[80%] flex justify-between bg-red-700'>
                    <div className='text-center bg-yellow-700'>
                        <p className='pr-12 text-white cursor-pointer'>Get The App</p>
                    </div>
                    <div className='bg-green-700 flex gap-12'>
                        <p className='text-white cursor-pointer' >Investor Relations</p>
                        <p className='text-white cursor-pointer' >Add restaurant</p>
                        <p className='text-white cursor-pointer' >Login</p>
                        <p className='text-white cursor-pointer' >Signup</p>
                    </div>
                </div>
            </div>
            <div className='w-[80%] mx-auto  bg-green-700 flex flex-col items-center justify-center '>
                <div className="mb-4">
                    <p className='text-center pt-14 text-white text-5xl font-black'>Zomato</p>
                    <p className='pt-8 pb-8 text-white text-4xl'>Discover the best food & drinks in Hyderabad</p>
                </div>
                <div className="relative w-1/2 mb-[8%]">
                    <input type="text" list="searchOptions" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <p>Search icon</p>
                    </div>
                </div>
            </div>
            <div className='flex w-[80%] mx-auto gap-10 pt-14 mb-20'>
                <div class="max-w-sm rounded overflow-hidden shadow-lg h-[120px]">
                    <img class="w-full" src={img1} alt="Card image" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Dining</div>
                        <p class="text-gray-700 text-base">
                            This is the description of the card.
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg h-[120px]">
                    <img class="w-full" src={img1} alt="Card image" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Dining</div>
                        <p class="text-gray-700 text-base">
                            This is the description of the card.
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg h-[120px] ">
                    <img class="w-full" src={img1} alt="Card image" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Night club and nights</div>
                        <p class="text-gray-700 text-base">
                            This is the description of the card.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mx-auto  w-[80%]'>
                <p>Collections</p>
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</p>
            </div>

            <div className='mx-auto flex w-[80%] gap-12 pt-12 mb-[120px]'>
                <div className="relative max-w-sm rounded overflow-hidden shadow-lg ">
                    <img className="w-full " src={img1} alt="Card image" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <div className="font-bold text-xl mb-2">Dining</div>
                        <p className="text-gray-700 text-base">This is the description of the card.</p>
                    </div>
                </div>
                <div className="relative max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={img1} alt="Card image" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <div className="font-bold text-xl mb-2">Dining</div>
                        <p className="text-gray-700 text-base">This is the description of the card.</p>
                    </div>
                </div><div className="relative max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={img1} alt="Card image" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <div className="font-bold text-xl mb-2">Dining</div>
                        <p className="text-gray-700 text-base">This is the description of the card.</p>
                    </div>
                </div><div className="relative max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={img1} alt="Card image" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <div className="font-bold text-xl mb-2">Dining</div>
                        <p className="text-gray-700 text-base">This is the description of the card.</p>
                    </div>
                </div>
            </div>


        </>
    );
}

export default CustomHeader;
