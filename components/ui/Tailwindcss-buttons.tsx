import React from 'react';

const TailwindcssButtons = ({
    word, icon,position,handleClick,otherClasses}:{
    word:string;
    icon?:React.ReactNode,
    position?:string,
    handleClick?:()=>void,
    otherClasses?:string
}) => {
    return (
        <button className={`${otherClasses} w-full text-lg inline-flex h-12 animate-shimmer items-center justify-center 
        rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
        bg-[length:200%_100%] px-4 md:px-6 font-bold text-slate-400 transition-colors focus:outline-none`}>
            {position === "left" && icon}
            {word}
            {position === "right" && icon}
        </button>
);
};

export default TailwindcssButtons;