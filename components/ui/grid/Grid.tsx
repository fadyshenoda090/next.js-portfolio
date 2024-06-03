import React from 'react';
import {BentoGrid, BentoGridItem} from "@/components/ui/BentoGrid";
import {gridItems} from "@/data";

const Grid = () => {
    return (
        <section id={`about`}>
            <BentoGrid className={`w-full !h-fit py-10 my-[15rem]`}>
                {gridItems.map((item,index) => (
                        <BentoGridItem
                            id={item.id}
                            key={index}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                            img={item.img}
                            imgClassName={item.imgClassName}
                            titleClassName={item.titleClassName}
                            spareImg={item.spareImg}
                        />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;