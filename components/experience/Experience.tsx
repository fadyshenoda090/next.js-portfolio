import React from 'react';
import {workExperience} from "@/data";
import {Button} from "@/components/ui/MovingBorder";

const Experience = () => {
    return (
        <section className={`py-20`}>
            <h1 className={`heading`}>
                My {` `}
                <span className={`text-purple`}>Work Experience</span>
            </h1>
            <div className={`w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10`}>
                {workExperience.map((item,index)=>(
                        <Button
                            key={index}
                            borderRadius={`1.75rem`}
                            duration={Math.ceil(Math.random() * 10000) + 10000}
                            className={`flex-1 text-white border-neutral-200 dark:border-slate-800`}
                        >
                            <div className={`flex flex-col lg:flex-row lg:items-center p-3 md:p-5 lg:p-10 gap-2 py-6`}>
                                <img src={item.thumbnail} className={`w-16 md:w-20 lg:w-32`} alt={item.desc} loading={`lazy`}/>
                                <div className={`lg:ms-5`}>
                                    <h1 className={`text-start text-xl md:text-2xl font-bold`}>
                                        {item.title}
                                    </h1>
                                    <p className={`text-start text-white-100 mt-3 font-semibold`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </Button>
                ))}
            </div>
        </section>
    );
};

export default Experience;