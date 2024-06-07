import Image from "next/image";
import Hero from "@/components/hero/Hero";
import {FloatingNav} from "@/components/ui/Floating-navbar";
import Grid from "@/components/ui/grid/Grid";
import Card from "@/components/ui/card/Card";
import Clients from '@/components/Clients'
import  {navItems} from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/footer/Footer";

export default function Home() {
    return (
        <main className={`relative bg-black-100 flex items-center justify-center flex-col
        overflow-hidden mx-auto sm:px-10 px-5`}>
            <div className={`max-w-[75vw] w-full`}>
                <FloatingNav navItems={navItems}/>
               <Hero/>
                <Grid/>
                {/*<RecentProjects/>*/}
                <Card/>
                <Clients/>
                <Experience/>
                <Approach/>
                <Footer/>
            </div>
        </main>
    );
}
