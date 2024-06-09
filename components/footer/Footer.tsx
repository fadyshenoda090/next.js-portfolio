import React from 'react';
import MagicButton from "@/components/ui/MagicButton";
import {FaEnvelope, FaLocationArrow} from "react-icons/fa";
import {socialMedia} from "@/data";

const Footer = () => {
    return (
        <footer className={`w-full pt-20 pb-10`} id={`contact`}>
            <div className={`flex flex-col items-center`}>
                <h1 className={`heading lg:max-w-[45vw]`}>
                    Ready to take <span className={`text-purple`}>your</span> projects to the next level?
                </h1>
                <p className={`text-white-200 my-10 md:mt-10 text-center text-xl`}>
                    Get in touch with me to discuss how I can help you.
                </p>
                <a href="mailto:fadyshenoda0o0@gmail.com">
                    <MagicButton title={`Mail Me`} icon={<FaLocationArrow/>} position={`right`}/>
                </a>
            </div>
            <div className={`flex flex-col gap-5 md:gap-0 md:flex-row mt-16 justify-between items-center`}>
                <p className={`text-sm md:text-base font-light md:font-normal`}>
                    Copyright &copy; 2024 Fady Shenoda
                </p>
                <div className={`flex items-center gap-6 md:gap-3`}>
                    {
                        socialMedia.map((item,index)=>(
                            <div key={index} className={`w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter
                                backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300`}>
                                <img src={item.img} alt={item.alt} width={20} height={20} loading={`lazy`}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;