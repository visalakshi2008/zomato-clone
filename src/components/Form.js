import React from 'react';
import phoneImage from "../components/assets/phoneImage.avif";
import playStore from "../components/assets/playstore.png";
import apple from "../components/assets/apple.png"

const Form = () => {
    return (
        <div className='w-[80%] mx-auto flex gap-8 justify-center'>
            <img src={phoneImage} width={300} />
            <div>
                <p className='text-[#1c1c1c] text-[44px] pb-[15px]'>Get the Zomato app</p>
                <p className='text-2xl text-[#363636] pb-[25px]'>We will send you a link, open it on your phone to download <br />the app</p>

                <div className="flex items-center gap-10 pb-5">
                    <div className="flex items-center mr-8 ">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4  bg-gray-100 border-gray-300   dark:ring-offset-gray-800 " />
                        <label htmlFor="default-radio-1" className="ml-2 text-base  text-gray-900 dark:text-gray-300">Email</label>
                    </div>
                    <div className="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4  bg-gray-100 border-gray-300   dark:ring-offset-gray-800 " />
                        <label htmlFor="default-radio-2" className="ml-2 text-base  text-gray-900 dark:text-gray-300">Phone</label>
                    </div>
                </div>
                <div>
                    <input type="text" className=" w-[65%] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="type here..." />
                    <button type="button" className=" ml-3 bg-[#ef4f5f] text-white border border-white-500 rounded-lg px-3 py-2">
                        Share app Link
                    </button>
                    <p className='pb-[15px] pt-[20px] text-[#9c9c9c] text-[14px]'>Download app from</p>
                </div>
                <div className='flex items-center gap-5 '>
                    <button className='bg-[#21394f] flex items-center justify-center pt-1 pb-1 rounded w-[25%]'>
                        <img src={playStore} width={20} />
                        <p className=' text-white text-xs pl-2'>GET IT ON <br /><span >Google Play</span></p>
                    </button>
                    <button className='bg-[#21394f] flex items-center justify-center pt-1 pb-1 rounded w-[25%]'>
                        <img src={apple} width={20} className='' />
                        <p className=' text-white text-xs pl-2'>GET IT ON <br /><span >Google Play</span></p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;
