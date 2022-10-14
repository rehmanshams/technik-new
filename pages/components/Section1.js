import React from 'react'

const Section1 = () => {
    return (
        <div className='w-full max-w-[1920px] h-full mx-auto '>

            <div className=' xl:max-w-[1340px]  2xl:max-w-[1536px] 4xl:max-w-[1615px] absolute lg:mt-[201px] xl:mt-[281px] 2xl:mt-[281px]  md:mt-44  md:pl-16  lg:pl-16 xl:pl-16 2xl:pl-0 2xl:ml-[237px] '>
                <div className='md:text-[30px]  lg:text-[40px] xl:text-[50px] 2xl:text-[50px] w-full xl:max-w-[1280px] 2xl:max-w-[615px] font-camp h-[120px] leading-[120%]'>
                    <p className='font-normal'>Connect To The Grid <br></br>
                        <span className='font-bold font-campi '><i>Safely</i></span> And <span className='font-bold'><i>Efficiently</i></span></p>
                </div>
                <div className='max-w-[500px] w-full  h-[81px]'>
                    <p className='   lg:mt-1 xl:mt-6 2xl:mt-6 md:text-xs lg:text-sm xl:text-lg 2xl:text-lg leaing-[150%]  font-normal font-camp'>
                        We&apos;re a team of IT Engineers that make sure that you get<br></br> your grid connection, are allowed to feed in safely and<br></br> receive feed-in tariff. Hassle-free!
                    </p>
                </div>

                <div className='md:w-[186px] lg:w-[186px] xl:w-[266px] 2xl:w-[266px] lg:h-[49px] xl:h-[59px] 2xl:h-[59px] bg-[#00828C] mt-8 flex justify-center'>
                    <button className='font-medium text-white text-camp  md:text-sm lg:text-sm xl:text-lg 2xl:text-lg leading-[150%]'>Connect me to the grid</button>
                </div>
                <div className=' flex lg:mt-[32px] xl:mt-[71px] 2xl:mt-[206px] justify-center 2xl:ml-0 xl:ml-10 align-center items-center w-full max-w-[176px] h-[168.54px] '>
                    <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%208.svg' />

                </div>
            </div>

            <div className=' w-full 2xl:ml-[200px] md:max-w-[500px] lg:max-w-[750px] xl:max-w-[980px] 2xl:max-w-[1100px] 4xl:max-w-[1467px]  h-full float-right bg-gray-100'>

                <div className='flex float-right'>
                    <button className='arrow-button xl:mt-[540px] lg:mt-[410px] 2xl:mt-[640px]'><img className='flex w-6 h-6 justify-center mr-1' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Arrow_Left_5.svg'></img></button>
                    <img className='mt-[136px] md:max-w-[230px] w-full lg:max-w-[250px]  xl:max-w-[350px] 2xl:max-w-[436px] max-h-[662px] h-full mr-10' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle+2.svg'></img>
                    <img className='mt-[100px] w-full md:max-w-[150px] lg:max-w-[160px] 2xl:max-w-[400px] xl:max-w-[220px]' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle%203.svg'></img>
                </div>
                <div className='grid-container cursor-pointer md:mt-[490px] lg:mt-[520px] xl:mt-[670px] 2xl:mt-[800px] bg-inherit'>

                    <div className=' flex justify-center align-center  xl:ml-32 2xl:ml-[250px] items-center w-full max-w-[176px] h-[168.54px] '>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%206.png' />
                    </div>

                    <div className='flex justify-center align-center 2xl:ml-[200px] items-center w-full max-w-[176px] h-[168.54px] '>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%207.png' />
                    </div>
                    <div className='flex justify-center align-center 2xl:ml-[100px] items-center w-full max-w-[176px] h-[168.54px]'>
                        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%205.png' />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Section1;
