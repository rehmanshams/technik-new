import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
const Section1 = () => {

    return (
        <div className='w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] 4xl:max-w-[1920px] h-full mx-auto '>

            <div className=' xl:max-w-[1340px]  2xl:max-w-[1536px] 4xl:max-w-[1615px] absolute lg:mt-[201px] xl:mt-[281px] 2xl:mt-[281px]  sm:ml-6 sm:mt-44 md:mt-44  md:pl-8  lg:pl-16 xl:pl-16 2xl:pl-0 2xl:ml-[237px] '>
                <div className='sm:text-[20px]  md:text-[22px]  lg:text-[40px] xl:text-[50px] 2xl:text-[50px] w-full xl:max-w-[1280px] 2xl:max-w-[615px] font-camp h-[120px] leading-[120%]'>
                    <p className='font-normal'>Connect To The Grid <br></br>
                        <span className='font-bold font-campi '><i>Safely</i></span> And <span className='font-bold'><i>Efficiently</i></span></p>
                </div>
                <div className='max-w-[500px] w-full  h-[81px]'>
                    <p className='   sm:mt-[-40px]  md:mt-[-40px] lg:mt-1 xl:mt-6 2xl:mt-6 sm:text-[9px] md:text-[9px] lg:text-sm xl:text-lg 2xl:text-lg leaing-[150%]  font-normal font-camp'>
                        We&apos;re a team of IT Engineers that make sure that you get<br></br> your grid connection, are allowed to feed in safely and<br></br> receive feed-in tariff. Hassle-free!
                    </p>
                </div>

                <div className='sm:w-[116px] md:w-[116px] lg:w-[186px] xl:w-[266px] 2xl:w-[266px] lg:h-[49px] sm:h-[32px] md:h-[32px] xl:h-[59px] 2xl:h-[59px] bg-[#00828C] md:mt-[-10px] lg:mt-8 xl:mt-8 2xl:mt-8 4xl:mt-8 flex justify-center'>
                    <button className='font-medium text-white text-camp  sm:text-[10px] md:text-[10px] lg:text-sm xl:text-lg 2xl:text-lg leading-[150%]'>Connect me to the grid</button>
                </div>
                <div className=' flex sm:mt-[75px] md:mt-[130px] lg:mt-[32px] xl:mt-[71px] 2xl:mt-[206px] justify-center   md:ml-10 lg:ml-0  4xl:ml-0  2xl:ml-0 xl:ml-10 align-center items-center w-full sm:max-w-[80px]  md:max-w-[80px] lg:max-w-[176px] xl:max-w-[176px] 2xl:max-w-[176px] 4xl:max-w-[176px] h-[168.54px] '>
                    <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%208.svg' />

                </div>
            </div>

            <div className=' w-full 2xl:ml-[200px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[750px] xl:max-w-[980px] 2xl:max-w-[1100px] 4xl:max-w-[1467px]  h-full float-right bg-gray-100'>
                <div className='flex float-right'>
                    {/* <button className='arrow-button lg:h-14 absolute xl:h-14 2xl:h-14 sm:h-12  sm:mt-[360px] sm:w-12 4xl:h-14 md:h-12 md:w-12 lg:w-14 xl:w-14 2xl:w-14 4xl:w-14 md:mt-[390px] xl:mt-[540px] lg:mt-[410px] 2xl:mt-[640px]'><img className='flex w-6 h-6 justify-center sm:mt-[-5px] md:mt-[-5px] lg:mt-0 xl:mt-0 4xl:mt-0 2xl:mt-0 mr-1' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Arrow_Left_5.svg'></img></button> */}
                    <>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper  mt-[120px] w-full  sm:max-w-[200px]  sm:h-[302px] "
                    >
                        <SwiperSlide className='sm:ml-[-100px]'>    <img  src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle+2.svg'></img>
                        </SwiperSlide>
                        <SwiperSlide><img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle%203.svg'></img></SwiperSlide>

                    </Swiper>
                </>
                </div>
                <div className='grid-container cursor-pointer sm:mt-[440px] md:mt-[490px] lg:mt-[520px] xl:mt-[670px] 2xl:mt-[800px] bg-inherit'>

                    <div className=' flex justify-center align-center  xl:ml-32 2xl:ml-[100px] 4xl:ml-[250px] items-center w-full sm:max-w-[80px] md:max-w-[80px] lg:max-w-[176px] xl:max-w-[176px] 2xl:max-w-[176px] 4xl:max-w-[176px] h-[168.54px] '>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%206.png' />
                    </div>

                    <div className='flex justify-center align-center 4xl:ml-[200px] 2xl:ml-[70px] items-center w-full md:max-w-[90px] lg:max-w-[176px] sm:max-w-[80px] xl:max-w-[176px] 2xl:max-w-[176px] 4xl:max-w-[176px] h-[168.54px] '>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%207.png' />
                    </div>
                    <div className='flex justify-center align-center 2xl:ml-[20px] 4xl:ml-[100px] items-center w-full md:max-w-[80px] lg:max-w-[176px] xl:max-w-[176px] sm:max-w-[80px] 2xl:max-w-[176px] 4xl:max-w-[176px] h-[168.54px]'>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%205.png' />
                    </div>
                </div>
              
            </div>


        </div >
    )
}

export default Section1;
