import React from 'react';
import {BentoGrid, BentoGridItem} from "@/components/ui/BentoGrid";
import {FaUserCircle} from "react-icons/fa";

const Grid = () => {
    return (
        <section id={`about`}>
            <BentoGrid>
                {[{
                    title: 'About Me',
                    description: 'I am a Front-End web developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies including React, Node.js, and MongoDB. I am always looking to learn new things and improve my skills.',
                }].map((item,index) => (
                        <BentoGridItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={<FaUserCircle className={`text-5xl text-blue-100`}/>}
                        />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;