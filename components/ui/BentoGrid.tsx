'use client'
import React, {useState} from "react";
import { cn } from "@/utils/cn";
import {BackgroundGradientAnimation} from "@/components/ui/GradientBg";
import {GridGlobe} from "@/components/ui/GridGlobe";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json';
import MagicButton from "@/components/ui/MagicButton";
import {IoCopyOutline} from "react-icons/io5";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                // "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  id,
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg,
                              }: {
    className?: string;
    title?: string;
    description?: string;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "fadyshenoda0o0@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };
    return (
        <div
            className={cn(
                `{\`h-full border border-white/[0.1] row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4\`}`,
                className
            )}
                    style={{background:"rgb(10,0,36)",
                    backgroundColor:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(81,37,156,1) 25%, rgba(77,28,110,1) 100%)"
        }}
        >
            <div className={`${id === 6 && "flex justify-center"} min-h-fit h-[13rem]`}>
                <div className={`w-full h-full absolute`}>
                    {img && (
                        <img src={img} alt={`image title`} className={cn(imgClassName,'object-center object-cover')} loading={`lazy`}/>
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id=== 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img src={spareImg} alt={`image title`} className={'object-cover object-center w-full h-full'} loading={`lazy`} />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation/>
                )}
                <div
                    className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10')}>
                    <div
                        className={`font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10`}>
                        {description}
                    </div>
                    <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                        {title}
                    </div>

                {id === 2 && (
                    <GridGlobe />
                )}
                {
                    id === 3 && (
                        <div className={`flex gap-1 lg:gap-5 w-fit absolute top-2 -right-3 lg:-right-2`}>
                            <div className={`flex flex-col gap-3 lg:gap-8`}>
                                {['React.js', 'Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript'].map((item, index) => (
                                    <span key={index} className={`py-2 lg:py-4 lg:px-3 px-3 text-xs 
                                    lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]`}>
                                        {item}
                                    </span>
                                ))}
                                <span className={`py-4 px-3 rounded-lg text-center bg-[#10132e]`}/>
                            </div>
                            <div className={`flex flex-col gap-3 lg:gap-8`}>
                                <span className={`py-4 px-3 rounded-lg text-center bg-[#10132e]`}/>
                                {['React.js', 'Next.js', 'TailwindCSS', 'Framer Motion', 'React-Hook-Form'].map((item, index) => (
                                    <span key={index} className={`py-2 lg:py-4 lg:px-3 px-3 text-xs 
                                    lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]`}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )
                }
                    {id===6 && (
                        <div className={`mt-5 relative`}>
                        <div className={`absolute -bottom-5 right-0`}>
                            <Lottie
                                height={200}
                                width={400}
                                options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData: animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice",
                                    },
                            }}/>
                        </div>
                            <MagicButton
                                title={copied ? "Email Copied!" : "Copy my email"}
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31] text-lg !md:text-xl"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
