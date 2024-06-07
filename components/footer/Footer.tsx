import React from 'react';
import MagicButton from "@/components/ui/MagicButton";
import {FaEnvelope, FaLocationArrow} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={`w-full pt-20 pb-10`} id={`contact`}>
            <div className={`w-full absolute left-0 -bottom-72 min-h-96`}>
                <img src={`/footer-grid.svg`} alt={`grid`} className={`w-full h-full opacity-50`} loading={`lazy`}/>
            </div>
            <div className={`flex flex-col items-center`}>
                <h1 className={`heading lg:max-w-[45vw]`}>
                    Ready to take <span className={`text-purple`}>your</span> projects to the next level?
                </h1>
                <p className={`text-white-200 my-10 md:mt-10 text-center text-xl`}>
                    Get in touch with me to discuss how I can help you.
                </p>
                <a href={`mailto:fadushenoda0o0@gmail.com`}>
                    <MagicButton title={`Mail Me`} icon={<FaLocationArrow/>} position={`right`}/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;