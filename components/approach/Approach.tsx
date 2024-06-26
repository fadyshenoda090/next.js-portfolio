"use client";
import React from "react";

import {AnimatePresence, motion} from "framer-motion";
import {CanvasRevealEffect} from "@/components/ui/CanavasReavealEffect";

const Approach = () => {
    return (
        <section className={`w-full`}>
            <h1 className={`heading`}>
                My {` `}
                <span className={`text-purple `}>
                    approach
                </span>
            </h1>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 w-[90vw] -ml-[6%]">
                <Card
                    title="Keep learning"
                    des={`I believe that learning journey never ends. I am always looking for new technologies and tools to learn and improve my skills.`}
                    icon={<AceternityIcon order={`phase 1`}/>}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-violet-900"
                    />
                </Card>
                <Card
                    title="Collaboration"
                    des={`I believe that collaboration is key to success. Working closely with others, sharing knowledge, and leveraging diverse perspectives help create more effective and robust solutions.`}
                    icon={<AceternityIcon order={`phase 2`}/>}>
                    <CanvasRevealEffect
                        animationSpeed={4}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                </Card>
                <Card
                    title="Adaptability"
                    des={`In a rapidly changing technological landscape, adaptability is crucial. I strive to stay flexible and open to change, quickly learning and integrating new methodologies and technologies.`}
                    icon={<AceternityIcon order={`phase 3`}/>}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-violet-900"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
                <Card
                    title="Embrace the Unknown"
                    des={`Receiving a new task involving unfamiliar concepts and technologies doesn't intimidate me. I am committed to learning and accomplishing the required tasks to the best of my ability.`}
                    icon={<AceternityIcon order={`phase 4`}/>}>
                    <CanvasRevealEffect
                        animationSpeed={4}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                </Card>
            </div>
        </section>
    );
}

const Card = ({
                  title,
                  icon,
                  children,
                  des
              }: {
    des?: string;
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-purple/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-2xl"
        >
            <Icon className="absolute h-10 w-10 -top-4 -left-5 text-purple font-thin"/>
            <Icon className="absolute h-10 w-10 -bottom-4 -left-5 text-purple font-thin"/>
            <Icon className="absolute h-10 w-10 -top-4 -right-5 text-purple font-thin"/>
            <Icon className="absolute h-10 w-10 -bottom-4 -right-5 text-purple font-thin"/>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div
                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="text-center text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
                <h2 className="dark:text-white text-base text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {des}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({order}: { order?: string }) => {
    return (
        <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                <span className="inline-flex h-full cursor-pointer items-center justify-center rounded-full bg-slate-950 w-[7rem] py-1 font-bold text-purple backdrop-blur-3xl text-xl">
                     {order}
                 </span>
            </button>
        </div>
    );
};

export const Icon = ({className, ...rest}: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
        </svg>
    );
};

export default Approach;
