import {lazy} from "react";
import  {navItems} from "@/data";
import {FloatingNav} from "@/components/ui/Floating-navbar";
const Hero = lazy(()=> import ('@/components/hero/Hero'))
const Grid = lazy(()=>import ('@/components/ui/grid/Grid'))
const Card = lazy(()=>import ('@/components/ui/card/Card'))
const Experience = lazy(()=>import ("@/components/Experience"))
const Approach = lazy(()=> import ('@/components/Approach'))
const Footer = lazy(()=> import ('@/components/footer/Footer'))
const Skills = lazy(()=>import ('@/components/skills/Skills'))

export default function Home() {
    return (
        <main className={`relative bg-black-100 flex items-center justify-center flex-col 
         overflow-clip mx-auto sm:px-10 px-5`}>
            <div className={`max-w-[80vw] w-full relative`}>
                <FloatingNav navItems={navItems}/>
               <Hero/>
                <Grid/>
                <Skills/>
                <Card/>
                <Experience/>
                <Approach/>
                <Footer/>
            </div>
        </main>
    );
}
