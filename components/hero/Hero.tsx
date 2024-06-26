import React from 'react';
import {Spotlight} from "@/components/ui/Spotlight";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";
import {FaDownload} from "react-icons/fa";

const Hero = () => {
    return (
        <div id={`about`} className={`pb-20 pt-36`}>
            <div>
                <Spotlight className={`-top-40 -left-10 md:-left-32 
                md:-top-20 h-screen`} fill={`white`}/>
                <Spotlight className={`top-10 left-full h-[80vh] w-[50vw]`} fill={`purple`}/>
                <Spotlight className={`top-28 left-80 h-[80vh] w-[50vw]`} fill={`blue`}/>
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
                  absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <TextGenerateEffect
                        class2={`mt-4`}
                        staggerValue={0.2}
                        applyOrNot={true}
                        className={`text-center text-3xl md:text-4xl font-bold`}
                        words={`Transform your Ideas to seamless real projects`}/>
                    <TextGenerateEffect
                        class2={`my-4`}
                        staggerValue={0.3}
                        className={`text-center text-xl md:text-2xl`}
                        words={`Hello I am Fady a Front-End Developer using React.js and Next.js`}
                    />
                    <a href={`/fadyshenoda.pdf`} download={true}>
                        <MagicButton
                            title="Download my CV"
                            icon={<FaDownload />}
                            position="right"
                            otherClasses={`flex items-center gap-2 !text-lg !md:text-xl`}
                        />
                    </a>
                </div>
            </div>
        </div>
)
    ;
};

export default Hero;