import React from 'react'

const Section1 = () => {
    return (
        <div className='w-full max-w-[1920px] h-full mx-auto '>

            <div className='w-full max-w-[1615px] absolute mt-[281px] ml-[237px] '>
                <div className='text-[50px] w-full max-w-[615px] font-camp h-[120px] leading-[120%]'>
                    <p className='font-normal'>Connect To The Grid <br></br>
                        <span className='font-bold font-campi '><i>Safely</i></span> And <span className='font-bold'><i>Efficiently</i></span></p>
                </div>
                <div className='max-w-[500px] w-full  h-[81px]'>
                    <p className='mt-6 text-lg leaing-[150%]  font-normal font-camp'>
                        We&apos;re a team of IT Engineers that make sure that you get<br></br> your grid connection, are allowed to feed in safely and<br></br> receive feed-in tariff. Hassle-free!
                    </p>
                </div>
                <div className='w-[266px] h-[59px] bg-[#00828C] mt-8 flex justify-center'>
                    <button className='font-medium text-white text-camp text-lg leading-[150%]'>Connect me to the grid</button>
                </div>
                <div className=' flex mt-[206px] justify-center align-center items-center w-full max-w-[176px] h-[168.54px] '>
                    <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%208.svg' />

                </div>
            </div>

            <div className=' w-full ml-[200px] max-w-[1467px] h-full float-right bg-gray-100'>

                <div className='flex float-right'>
                    <button className='arrow-button'><img className='flex w-6 h-6 justify-center mr-1' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Arrow_Left_5.svg'></img></button>
                    <img className='mt-[136px] w-full max-w-[436px] max-h-[662px] h-full mr-10' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle+2.svg'></img>
                    <img className='mt-[100px]' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle%203.svg'></img>
                </div>
                <div className='grid-container cursor-pointer  bg-inherit'>

                    <div className=' flex justify-center align-center  ml-[250px] items-center w-full max-w-[176px] h-[168.54px] '>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%206.png' />
                    </div>

                    <div className='flex justify-center align-center ml-[200px] items-center w-full max-w-[176px] h-[168.54px] '>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%207.png' />
                    </div>
                    <div className='flex justify-center align-center ml-[100px] items-center w-full max-w-[176px] h-[168.54px]'>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%205.png' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section1;
