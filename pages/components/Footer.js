import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="2xl:w-full xl:[1280px] bg-[#00828C] h-[505px] mt-[120px] ">
                <div className="flex gap-32 justify-center">
                    <div className="mt-20">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Group.svg" />
                        <img className="mt-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%2026.png" />
                    </div>
                    <div>
                        <nav className="mt-20">
                            <ul className="">
                                <li className="text-[22px] text-white font-bold">About</li>
                                <li className="text-base mt-6 font-normal text-white">About us</li>
                                <li className="text-base mt-6 font-normal text-white">Community</li>
                                <li className="text-base mt-6 font-normal text-white">Public utilities</li>
                                <li className="text-base mt-6 font-normal text-white">EZA controller</li>
                                <li className="text-base mt-6 font-normal text-white">References</li>
                                <li className="text-base mt-6 font-normal text-white">Careers</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <nav className="mt-20">
                            <ul className="">
                                <li className="text-[22px] text-white font-bold">Social</li>
                                <li className="text-base mt-6 font-normal text-white">Twitter </li>
                                <li className="text-base mt-6 font-normal text-white">Linked in</li>
                                <li className="text-base mt-6 font-normal text-white">Facebook</li>
                                <li className="text-base font-normal text-white mt-6">Youtube</li>

                            </ul>
                        </nav>
                    </div>
                    <div>
                        <nav className="mt-20">
                            <ul className="">
                                <li className="text-[22px] text-white  font-bold">Contact Details</li>
                                <li className="text-base font-normal mt-6 mb-6 text-white">ee technik gmbh<br /> Gutenbering 6322848<br /> Norderstedt</li>
                                <a className="text-base font-normal mt-6 text-white mb-6" href="tel:+49 40 3577199-20">T +49 40 3577199-20</a>
                                <div><br/>
                                <a className="text-base font-normal mt-6 text-white" href="https://www.eetechnik.de/kontakt/" >buero@eetechnik.de</a>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="flex justify-center  align-center text-center place-content-center w-full">
                    <div className="border-b flex justify-center border-gray-300	 mt-[30px] w-[1250px] "></div>

                </div>
                <p className="text-base  align-center text-center place-content-center cursor-pointer pb-6 font-normal mt-6 text-white">Imprint &nbsp;&nbsp;   Privacy policy</p>
                
            </div>
    </div>
  )
}

export default Footer
