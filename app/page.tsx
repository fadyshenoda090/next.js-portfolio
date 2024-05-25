import Image from "next/image";
import Hero from "@/components/hero/Hero";
import {FloatingNav} from "@/components/ui/Floating-navbar";
import {FaHome} from "react-icons/fa";
import Grid from "@/components/ui/grid/Grid";

export default function Home() {
    return (
        <main className={`relative bg-black-100 flex items-center justify-center flex-col
        overflow-hidden mx-auto sm:px-10 px-5`}>
            <div className={`max-w-7xl w-full`}>
                <FloatingNav navItems={[
                    {name: "Home", link: "/", icon:<FaHome/>},
                    {name: "About", link: "#about", icon:<FaHome/>},
                    {name: "Projects", link: "#projects", icon:<FaHome/>},
                    {name: "Contact", link: "#contact", icon:<FaHome/>},
                ]}/>
               <Hero/>
                <Grid/>
            </div>
        </main>
    );
}
