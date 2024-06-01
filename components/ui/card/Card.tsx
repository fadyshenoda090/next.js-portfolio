import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/ThreeDCard";
import { projects } from "@/data";

const Card = () => {
    return (
        <section id="projects" className="py-10 flex flex-wrap items-center justify-center gap-5 border">
            {projects.map((project, index) => (
                <CardContainer key={index} className="inter-var">
                    <CardBody className={`bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border`}>
                        <CardItem className="text-2xl font-bold">
                            {project.title}
                        </CardItem>
                        <CardItem translateZ="30" className="my-3">
                            <img src={project.img} alt={project.title} className="w-full h-auto" />
                        </CardItem>
                        <CardItem translateZ="20" className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300">
                            {project.des}
                        </CardItem>
                        <CardItem translateZ="10" className="flex space-x-2 my-3">
                            {project.iconLists.map((icon, iconIndex) => (
                                <img key={iconIndex} src={icon} alt="icon" className="w-6 h-6" />
                            ))}
                        </CardItem>
                        <CardItem translateZ="5" className="mt-2">
                            <a href={project.link} className="text-blue-500 text-lg">
                                Visit Project
                            </a>
                        </CardItem>
                    </CardBody>
                </CardContainer>
            ))}
        </section>
    );
};

export default Card;
