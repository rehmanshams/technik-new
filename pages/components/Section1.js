import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";

const Section1 = () => {

    return (
        <div className='w-full max-w-[1920px] h-full mx-auto '>

            <div className=' xl:max-w-[1340px]  2xl:max-w-[1536px] 4xl:max-w-[1615px] absolute lg:mt-[201px] xl:mt-[281px] 2xl:mt-[281px]  xs:ml-4 sm:ml-6 xs:mt-44 sm:mt-44 md:mt-44  md:pl-8  lg:pl-16 xl:pl-16 2xl:pl-0 2xl:ml-[237px] '>
                <div className='xs:text-[15px] sm:text-[20px]  md:text-[22px]  lg:text-[40px] xl:text-[50px] 2xl:text-[50px] w-full xl:max-w-[1280px] 2xl:max-w-[615px] font-camp h-[120px] leading-[120%]'>
                    <p className='font-normal'>Connect To The Grid <br></br>
                        <span className='font-bold font-campi '><i>Safely</i></span> And <span className='font-bold'><i>Efficiently</i></span></p>
                </div>
                <div className='max-w-[500px] w-full  h-[81px]'>
                    <p className='   xs:mt-[-70px] sm:mt-[-40px]  md:mt-[-40px] lg:mt-1 xl:mt-6 2xl:mt-6 xs:text-[6px] sm:text-[9px] md:text-[9px] lg:text-sm xl:text-lg 2xl:text-lg leaing-[150%]  font-normal font-camp'>
                        We&apos;re a team of IT Engineers that make sure that you get<br></br> your grid connection, are allowed to feed in safely and<br></br> receive feed-in tariff. Hassle-free!
                    </p>
                </div>

                <div className='xs:w-[116px] sm:w-[116px] md:w-[116px] lg:w-[186px] xl:w-[266px] 2xl:w-[266px] lg:h-[49px] xs:h-[32px] sm:h-[32px] md:h-[32px] xl:h-[59px] 2xl:h-[59px] bg-[#00828C] md:mt-[-10px] lg:mt-8 xl:mt-8 2xl:mt-8 4xl:mt-8 flex justify-center'>
                    <button className='font-medium text-white text-camp  xs:text-[10px] sm:text-[10px] md:text-[10px] lg:text-sm xl:text-lg 2xl:text-lg leading-[150%]'>Connect me to the grid</button>
                </div>
                <div className=' flex sm:mt-[75px] md:mt-[130px] lg:mt-[32px] xl:mt-[71px] 2xl:mt-[206px] justify-center   xs:ml-4 sm:ml-0 md:ml-10 lg:ml-0  4xl:ml-0  2xl:ml-0 xl:ml-10 align-center items-center w-full xs:max-w-[50px] sm:max-w-[80px]  md:max-w-[80px] lg:max-w-[176px] xl:max-w-[176px] 2xl:max-w-[176px] 4xl:max-w-[176px] h-[168.54px] '>
                    <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%208.svg' />

                </div>
            </div>

            <div className=' w-full 2xl:ml-[200px] xs:max-w-[200px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[750px] xl:max-w-[980px] 2xl:max-w-[1100px] 4xl:max-w-[1467px]  xs:h-[400px] sm:h-full float-right bg-gray-100'>
                <div className='flex float-right'>
                    {/* <button className='arrow-button lg:h-14 xl:h-14 2xl:h-14 sm:h-12  sm:mt-[360px] sm:w-12 4xl:h-14 md:h-12 md:w-12 lg:w-14 xl:w-14 2xl:w-14 4xl:w-14 md:mt-[390px] xl:mt-[540px] lg:mt-[410px] 2xl:mt-[640px]'><img className='flex w-6 h-6 justify-center sm:mt-[-5px] md:mt-[-5px] lg:mt-0 xl:mt-0 4xl:mt-0 2xl:mt-0 mr-1' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Arrow_Left_5.svg'></img></button>
                    <img className='mt-[136px] sm:max-w-[200px] md:max-w-[230px] w-full lg:max-w-[250px]  xl:max-w-[350px] 2xl:max-w-[436px] max-h-[662px] h-full mr-10' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle+2.svg'></img>
                    <img className='mt-[100px] w-full sm:max-w-[120px] md:max-w-[150px] lg:max-w-[160px] 2xl:max-w-[400px] xl:max-w-[220px]' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle%203.svg'></img> */}
                    <div className="main">
                        <>
                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img className="imageone" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle+2.svg" /></SwiperSlide>
                                <SwiperSlide><img className="imageone" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/wp7004450-power-plant-wallpapers.jpg" /></SwiperSlide>
                                <SwiperSlide><img className="imageone" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/casey-horner-n7Bp8zlnhRk-unsplash.jpg" /></SwiperSlide>
                                <SwiperSlide><img className="imageone" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/wp7004549-power-plant-wallpapers.jpg" /></SwiperSlide>



                            </Swiper>
                        </>
                    </div>
                </div>
                <div className='grid-container cursor-pointer xs:mt-[340px] sm:mt-[440px] md:mt-[490px] lg:mt-[520px] xl:mt-[670px] 2xl:mt-[800px] bg-inherit'>

                    <div className=' flex justify-center align-center  xl:ml-32 2xl:ml-[100px] 4xl:ml-[250px] items-center w-full xs:max-w-[50px] sm:max-w-[80px] md:max-w-[80px] lg:max-w-[176px] xl:max-w-[176px] 2xl:max-w-[176px] 4xl:max-w-[176px] h-[168.54px] '>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%206.png' />
                    </div>

                    <div className='flex justify-center align-center 4xl:ml-[200px] 2xl:ml-[70px] items-center w-full md:max-w-[90px] lg:max-w-[176px] xs:max-w-[50px] sm:max-w-[80px] xl:max-w-[176px] 2xl:max-w-[176px] 4xl:max-w-[176px] h-[168.54px] '>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%207.png' />
                    </div>
                    <div className='flex justify-center align-center 2xl:ml-[20px] 4xl:ml-[100px] items-center w-full md:max-w-[80px] lg:max-w-[176px] xl:max-w-[176px] xs:max-w-[50px] sm:max-w-[80px] 2xl:max-w-[176px] 4xl:max-w-[176px] h-[168.54px]'>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%205.png' />
                    </div>
                </div>

            </div>


        </div >
    )
}

export default Section1;
