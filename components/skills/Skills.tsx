'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {skills} from "@/data";

const Skills = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        dragFree: true,
        containScroll: 'trimSnaps',
    }, [
        AutoScroll({
            direction:`forward`,
            speed: 3,
            delay: 1000,
            stopOnMouseEnter: true,
            stopOnFocusIn: false,
            stopOnInteraction: false,
            playOnInit: true
        })
    ]);

    const handleMouseEnter = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (autoScroll) { // @ts-ignore
            autoScroll.stop();
        }
    }, [emblaApi]);

    const handleMouseLeave = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (autoScroll) { // @ts-ignore
            autoScroll.play();
        }
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.containerNode()?.addEventListener('mouseenter', handleMouseEnter);
            emblaApi.containerNode()?.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                emblaApi.containerNode()?.removeEventListener('mouseenter', handleMouseEnter);
                emblaApi.containerNode()?.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [emblaApi, handleMouseEnter, handleMouseLeave]);
    return (
        <section className={`-ml-[12%] !w-screen my-[3rem]`}>
            <div>
                <h1 className={`heading my-5`}>
                    My {' '}
                    <span className={`text-purple`}>
                        Skills
                    </span>
                </h1>
            </div>
            <div className={`embla overflow-hidden w-full`} ref={emblaRef}>
                <div className={`embla__container flex`}>
                    {skills.map((item, index) => (
                        <div style={{
                            backgroundImage:`url('./${item.img}')`,backgroundRepeat:`no-repeat`,backgroundSize:`contain`,backgroundPosition:`center`
                        }} className={`embla__slide mx-3 border border-purple h-28  rounded-[1rem] overflow-hidden
                        min-w-[calc(100%/2)] md:min-w-[calc(100%/4)] lg:min-w-[calc(100%/5)] xl:min-w-[calc(100%/6)] 2xl:min-w-[calc(100%/7)]`} key={index}>
                            <div className={`w-full h-full flex justify-center items-center gap-3 bg-gray-950 bg-clip-padding backdrop-filter backdrop-blur-[8px] bg-opacity-50`}>
                            <img src={item.img} alt={item.title} width={40} height={40} loading={`lazy`}/>
                            <p className={`text-2xl`}>
                                {item.title}
                            </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/*<div className={`w-full  mt-10`}>*/}
            {/*<EmblaCarousel/>*/}
            {/*{*/}
            {/*    skills.map((skill,index)=>(*/}
            {/*        <div key={index} className={`flex gap-2 col-span-6 sm:col-span-2 place-content-center`}>*/}
            {/*            <img src={skill.img} alt={skill.title} width={40} height={40} loading={`lazy`}/>*/}
            {/*            <p className={`text-2xl`}>*/}
            {/*                {skill.title}*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
            {/*</div>*/}
        </section>
    );
};

export default Skills;