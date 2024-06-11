import React from 'react';
import {InfiniteMovingCards} from "@/components/ui/InfinitMovingCard";
import {companies, testimonials} from "@/data";

const Clients = () => {
    return (
        <section id={`testimonials`} className={`py-10`}>
            <h1 className={`heading my-5`}>
                Kind words from {' '}
                <span className={`text-purple`}>
                    Happy Clients
                </span>
            </h1>
            <div className={`flex flex-col items-center max-lg:mt-10`}>
                <InfiniteMovingCards
                        items={testimonials}
                        direction={`left`}
                        speed={"slow"}
                    />
                <div className={`flex flex-wrap items-center justify-center gap-3 md:gap-16 mx-lg: my-10`}>
                    {companies.map((com,index)=>(
                        <div key={index} className={`flex gap-2 max-w-32 md:max-w-60`}>
                            <img src={com.img} alt={com.name} className={`w-5 md:w-10`} loading={`lazy`}/>
                            <img src={com.nameImg} alt={com.name} className={`w-20 md:w-24`} loading={`lazy`}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;