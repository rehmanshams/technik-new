import React from 'react'
import { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='w-full   max-w-[1920px] h-full mx-auto'>
            <div className='flex max-w-[1920px] absolute justify-between w-full items-center'>
                <div className='  md:max-w-[91px]  lg:max-w-[141px] xl:max-w-[141px] 4xl:max-w-[141px] 2xl:max-w-[141px] w-full h-12 xs:ml-5 sm:ml-5 md:ml-10 lg:ml-16 xl:ml-20 2xl:ml-20 mt-4'>
                    <svg className='md:w-[102px]  xs:w-[60px] sm:w-[90px] lg:w-[142px] xl:w-[142px] 2xl:w-[142px] 4xl:w-[142px]' height="49" viewBox="0 0 142 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.2321 9.05762C44.8366 9.05762 43.2521 10.7058 43.2521 12.9932C43.2521 15.2915 44.8822 16.9389 47.325 16.9389C49.0886 16.9389 50.4626 16.033 50.8995 14.5945H48.3133C48.0886 14.8134 47.7661 14.9493 47.3557 14.9493C46.4021 14.9493 45.8822 14.4184 45.6791 13.7339H50.9825C51.0281 13.4403 51.0281 13.13 51.0281 12.8355C51.0281 10.5649 49.383 9.05762 47.2321 9.05762ZM45.6658 12.2593C45.8499 11.4985 46.3714 11.0011 47.2188 11.0011C48.0157 11.0011 48.5538 11.4356 48.6923 12.2593H45.6658Z" fill="#00828C" />
                        <path d="M12.1939 9.05762C9.79598 9.05762 8.21143 10.7058 8.21143 12.9932C8.21143 15.2915 9.84075 16.9389 12.2868 16.9389C14.0513 16.9389 15.4236 16.033 15.8597 14.5945H13.276C13.0488 14.8134 12.7271 14.9493 12.3167 14.9493C11.3648 14.9493 10.8432 14.4184 10.6409 13.7339H15.9426C15.9899 13.4403 15.9899 13.13 15.9899 12.8355C15.9899 10.5649 14.3456 9.05762 12.1939 9.05762ZM10.626 12.2593C10.8109 11.4985 11.3316 11.0011 12.1774 11.0011C12.9775 11.0011 13.5156 11.4356 13.6516 12.2593H10.626Z" fill="#00828C" />
                        <path d="M106.029 24.0198V12.322H59.2386V0.5H35.0392V12.322H24.2002V0.5H0V24.9802H11.6913V36.7141H70.0742V48.5H141.026V24.0198H106.029ZM35.8642 1.33376H58.4127V24.1456H35.8642V1.33376ZM0.826685 1.33376H23.376V24.1456H0.826685V1.33376ZM70.0742 35.8787H12.5155V24.9802H24.2002V13.1557H35.0392V24.9802H59.2386V13.1557H105.206V24.0198H70.0742V35.8787ZM140.2 47.6654H70.8984V24.8544H140.2V47.6654Z" fill="#00828C" />
                        <path d="M98.6715 40.7445C100.694 40.7445 102.25 39.4435 102.432 37.5327H100.121C99.9999 38.2071 99.4261 38.65 98.6865 38.65C97.6276 38.65 97.0091 37.8699 97.0091 36.8617C97.0091 35.8535 97.6276 35.0893 98.6865 35.0893C99.4269 35.0893 99.9999 35.533 100.121 36.2049H102.432C102.25 34.2925 100.694 32.9932 98.6715 32.9932C96.3739 32.9932 94.665 34.6137 94.665 36.8617C94.665 39.1222 96.3739 40.7445 98.6715 40.7445Z" fill="#00828C" />
                        <path d="M106.119 36.0231C106.53 35.55 106.986 35.3101 107.413 35.3101C108.205 35.3101 108.719 35.8008 108.719 36.8275V40.556H111.097V36.44C111.097 34.39 109.865 33.1276 108.071 33.1276C107.31 33.1276 106.691 33.3801 106.119 33.8263V30.8989H103.724V40.5568H106.119V36.0231Z" fill="#00828C" />
                        <path d="M115.025 36.023C115.437 35.5499 115.889 35.31 116.316 35.31C117.108 35.31 117.623 35.8007 117.623 36.8274V40.5558H120.004V36.4398C120.004 34.3898 118.768 33.1274 116.978 33.1274C116.214 33.1274 115.598 33.3799 115.026 33.8262V33.3489H112.631V40.5566H115.026V36.023H115.025Z" fill="#00828C" />
                        <path d="M123.973 35.0688H121.592V40.5554H123.973V35.0688Z" fill="#00828C" />
                        <path d="M122.768 33.5096C123.531 33.5096 124.164 32.9317 124.164 32.1583C124.164 31.3715 123.531 30.7944 122.768 30.7944C121.989 30.7944 121.372 31.3715 121.372 32.1583C121.372 32.9317 121.989 33.5096 122.768 33.5096Z" fill="#00828C" />
                        <path d="M128.03 39.1275L129.013 38.0614L130.716 40.556H133.565L130.627 36.2915L133.33 33.3499H130.495L128.03 36.0382V30.8989H125.635V40.556H128.03V39.1275Z" fill="#00828C" />
                        <path d="M80.0172 37.4741C80.0172 39.421 81.1622 40.6984 82.8836 40.6984C83.5121 40.6984 84.0187 40.6431 84.7783 40.4166V38.3179L84.7766 38.3079C84.2468 38.411 83.8521 38.4857 83.5121 38.4857C82.809 38.4857 82.3977 38.1309 82.3977 37.4011V35.3352H84.8206V33.2726H82.3977V30.8208H80.0172V33.2726H78.6241V35.3352H80.0172V37.4741Z" fill="#00828C" />
                        <path d="M89.9399 40.7302C91.6745 40.7302 93.0252 39.8394 93.4539 38.4235H90.915C90.6903 38.6416 90.3744 38.7724 89.9706 38.7724C89.0328 38.7724 88.5195 38.2515 88.3222 37.5797H93.5368C93.5808 37.2894 93.5808 36.9824 93.5808 36.6947C93.5808 34.4627 91.9631 32.978 89.8479 32.978C87.4913 32.978 85.9366 34.6011 85.9366 36.8474C85.9366 39.1096 87.5345 40.7302 89.9399 40.7302ZM89.8329 34.8905C90.6198 34.8905 91.1497 35.3174 91.2856 36.1294H88.3089C88.4888 35.3812 89.0004 34.8905 89.8329 34.8905Z" fill="#00828C" />
                    </svg>
                </div>
                <div className=''>
                    <nav className='  xs:flex sm:flex md:hidden' role=" navigation">
                        <div onClick={() => setShow(!show)} className=' xs:ml-[100px] sm:ml-[400px] pb-[90px]' id="menuToggle">

                            <input className='' type="checkbox" />

                            <span></span>
                            <span></span>
                            <span></span>
                            {show ? 
                            <ul id="menu">
                                <a href="#"><li>About us</li></a>
                                <a href="#"><li>Community</li></a>
                                <a href="#"><li>Public utilities</li></a>
                                <a href="#"><li>EZA controller</li></a>
                                <a href="#"><li>References</li></a>
                                <a href="" target="_blank"><li>Careers</li></a>
                            </ul> : null}

                        </div>
                    </nav>
                </div>
                <div className='flex lg:gap-2 md:gap-1 xl:gap-10  4xl:gap-44 4xl:max-w-[1377px] 2xl:gap-10	  w-full  md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1055px]  '>
               
                    <nav className='mt-[35.5px]  hidden md:flex  2xl:ml-0 lg:ml-14 4xl:gap-11 xl:ml-10 campton-bold space-x-10 md:text-[8px] lg:text-[11px] xl:text-sm 2xl:text-4 4xl:text-4 font-normal cursor-pointer w-full lg:max-w-[700px] xl:max-w-[700px] 4xl:max-w-[1184px] 2xl:max-w-[1017px] h-[24px] font-camp 	 '>
                        <ul className='font-bold font-camp  2xl:gap-10	 text-[#00828C]'><u>Home</u></ul>
                        <ul className='font-normal  font-camp 	'>About us</ul>
                        <ul className='font-normal font-camp '>Community</ul>
                        <ul className='font-normal font-camp '>Public utilities</ul>
                        <ul className='font-normal font-camp'>EZA controller</ul>
                        <ul className='font-normal font-camp'>References</ul>
                        <ul className='font-normal font-camp'>Careers</ul>
                    </nav>
                    <div className='md:mt-7 lg:mr-3 md:mr-1 xs:hidden sm:hidden md:flex lg:mt-5 xl:mt-5 2xl:mt-5 4xl:mt-5 text-center align-center flex justify-center  md:w-[80px] lg:w-[100px] 2xl:mr-20 xl:w-[150px] 4xl:w-[220px] 2xl:w-[220px] md:h-[27px]  lg:h-[45px] xl:h-[55px] 4xl:h-[40px] 2xl:h-[40px] bg-[#00828C]'>
                        <button className='text-white    md:text-[10px]  lg:text-xs xl:text-sm 4xl:text-lg 2xl:text-lg font-medium w-[142px] h-[27px] lg:mt-2 xl:mt-3 4xl:mt-1 2xl:mt-1' >Request a quote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
