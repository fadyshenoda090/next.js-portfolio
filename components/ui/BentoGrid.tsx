import React from "react";
import { cn } from "@/utils/cn";
import {BackgroundGradientAnimation} from "@/components/ui/GradientBg";
import {GridGlobe} from "@/components/ui/GridGlobe";

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
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
    return (
        <div
            className={cn(
                "h-[15rem] md:h-full row-span-1 relative overflow-hidden rounded-3xl border border-red-700 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
                    style={{background:"rgb(10,0,36)",
                    backgroundColor:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(81,37,156,1) 25%, rgba(77,28,110,1) 100%)"
        }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
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
                    <BackgroundGradientAnimation>
                        <div className={`absolute z-50 flex justify-center items-center text-white font-bold`}/>
                    </BackgroundGradientAnimation>
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
                </div>
                {id === 2 && (
                    <GridGlobe />
                )}
            </div>
        </div>
    );
};
