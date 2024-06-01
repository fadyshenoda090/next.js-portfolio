import React from 'react';
import {projects} from '@/data'

const RecentProjects = () => {
    return (
        <div className={`py-20`}>
            <h1 className={`heading`}>
            A small selection of {' '}
                <span className={`text-purple`}>
                    Recent projects
                </span>
            </h1>
            <div className={`flex flex-wrap items-center justify-center p-4 gap-16 mt-10`}>
                {projects.map((project,index)=>(
                    <div key={index} className={`lg:mon-h-[32.5rem] h-[25rem] flex items-center justify-center sm-96 w-[80vw]`}>
                        {project.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;