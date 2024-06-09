'use client';
import React, {useState} from 'react';
import {CardBody, CardContainer, CardItem} from "@/components/ui/ThreeDCard";
import {projects} from "@/data";
import {caveat} from '@/utils/cutomFonts'
import {FaLocationArrow} from "react-icons/fa";
import {BackgroundGradientAnimation} from "@/components/ui/GradientBg";

const Card = () => {
    const [clickedStates, setClickedStates] = useState(Array(projects.length).fill(false));

    const handleDescriptionClick = (index: number) => {
        setClickedStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <section className={`mt-28`}>
            <h1 className={`heading my-5`}>
                A small collection of {' '}
                <span className={`text-purple`}>
                    Recent projects
                </span>
            </h1>
            <section id="projects"
                     className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 !w-full">
                {projects.map((project, index) => (
                    <CardContainer key={index} className="inter-var m-5 rounded-3xl !w-full">
                        <CardBody className={`relative group/card border-purple/[0.2] bg-[#0a0024] bg-opacity-65 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border`}>
                            <CardItem className="text-2xl font-bold">
                                {project.title}
                            </CardItem>
                            <CardItem translateZ="30" className="mt-2">
                                <img src={project.img} alt={project.title} className="w-full h-auto"/>
                            </CardItem>
                            <CardItem translateZ="20" onClick={() => handleDescriptionClick(index)}
                                      className={`${clickedStates[index] ? 'line-clamp-none' : 'line-clamp-2'} text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300`}>
                                {project.des}
                            </CardItem>
                            <CardItem translateZ="10" className="flex space-x-2 mt-2">
                                {project.iconLists.map((icon, iconIndex) => (
                                    <img key={iconIndex} src={icon} alt="icon" className="w-6 h-6"/>
                                ))}
                            </CardItem>
                            <CardItem translateZ="5" className="mt-2 self-start cursor-pointer z-[99]">
                                <a href={project.link}
                                   className={`${caveat.className} flex items-center gap-2 text-xl font-semibold`}>
                                    Visit Project
                                    <FaLocationArrow className={`text-[#cbacf9]`}/>
                                </a>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                ))}
            </section>

            {/*<section id="projects"*/}
            {/*                 className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">*/}
            {/*            {projects.map((project, index) => (*/}
            {/*                <CardContainer key={index} className="inter-var !w-full gradient">*/}
            {/*                    <CardBody*/}
            {/*                        className="z-50 !w-full bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] ">*/}
            {/*                            <CardItem className="text-2xl font-bold self-start z-[99]">*/}
            {/*                                {project.title}*/}
            {/*                            </CardItem>*/}
            {/*                            <CardItem translateZ="30" className="my-3  z-[99]">*/}
            {/*                                <img src={project.img} alt={project.title} className="w-full h-auto"*/}
            {/*                                     loading={`lazy`}/>*/}
            {/*                            </CardItem>*/}
            {/*                            <CardItem translateZ="20" onClick={() => handleDescriptionClick(index)}*/}
            {/*                                      className={`${clickedStates[index] ? 'line-clamp-none' : 'line-clamp-2'} text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300`}>*/}
            {/*                                {project.des}*/}
            {/*                            </CardItem>*/}
            {/*                            <CardItem translateZ="10" className="flex space-x-2 my-3 self-start  z-[99]">*/}
            {/*                                {project.iconLists.map((icon, index) => (*/}
            {/*                                    <div key={index}*/}
            {/*                                         className={`border border-white/[0.2] rounded-full bg-[#0a0024] w-9 h-9 lg:w-11 lg:h-11 flex items-center justify-center`}>*/}
            {/*                                        <img src={icon} alt={icon} className={`p-2`} loading={`lazy`}/>*/}
            {/*                                    </div>*/}
            {/*                                ))}*/}
            {/*                            </CardItem>*/}
            {/*                            <CardItem translateZ="5" className="mt-2 self-start cursor-pointer z-[99]">*/}
            {/*                                <a href={project.link}*/}
            {/*                                   className={`${caveat.className} flex items-center gap-2 text-xl font-semibold`}>*/}
            {/*                                    Visit Project*/}
            {/*                                    <FaLocationArrow className={`text-[#cbacf9]`}/>*/}
            {/*                                </a>*/}
            {/*                            </CardItem>*/}
            {/*                    </CardBody>*/}
            {/*                </CardContainer>*/}
            {/*            ))}*/}
            {/*        </section>*/}
        </section>
    );
};

export default Card;
