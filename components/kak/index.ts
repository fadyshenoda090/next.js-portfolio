export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "Hello this is me 😁",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-start",
        img: "/avatar.jpg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-4 md:row-span-3",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-2 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    // {
    //     id: 5,
    //     title: "Currently building a JS Animation library",
    //     description: "The Inside Scoop",
    //     className: "md:col-span-3 md:row-span-2",
    //     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    //     titleClassName: "justify-center md:justify-start lg:justify-center",
    //     img: "/b5.svg",
    //     spareImg: "/grid.svg",
    // },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-5 md:col-span-2 md:row-span-2 !lg:place-self-center lg:py-3",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Movies Land - Movies watching platform",
        des: "A movies app as a personal project using React.js for Frontend and TMDB api to See tha latest releases of movies and series.",
        img: "/moviesApp.png",
        iconLists: ["/re.svg",'/js.svg', "/bootStrap.svg", "/redux.svg"],
        live:false,
        link: "https://github.com/fadyshenoda090/React-movies-app",
    },
    {
        id: 2,
        title: "Amazon E-commerce - Platform Clone",
        des: "Cloned Amazon E-commerce platform as an ITI graduation project using React.js where user can search for prods, register, login and add prods to cart.",
        img: "/amazon.png",
        iconLists: ["/re.svg", '/js.svg', "/tail.svg", "/redux.svg", "/firebase.svg"],
        live:true,
        link: "https://fir-88026.web.app/",
    },
    {
        id: 3,
        title: "Gamers Zone - the gamers' best place",
        des: "Gamers Zone is gamers place to get games updates, series upcoming parts, rating, the production company and reviews.",
        img: "/gamersZone.png",
        iconLists: ["/re.svg", "/js.svg", "/tail.svg",],
        live:true,
        link: "https://gamerz-zone.netlify.app/",
    },
    {
        id: 4,
        title: "Personal Youtube to mp3 downloader",
        des: "Personal youtube downloader so i can download youtube music for free to my device and listen to them any time and no need for internet.",
        img: "/mp3Downloader.png",
        iconLists: ['re.svg', '/js.svg'],
        live:true,
        link: "https://fady-dev.netlify.app/",
    },
    {
        id: 5,
        title: "Fake Store - E-commerce platform",
        des: "My very first next.js project where user can just register, login, see products and add products to cart.",
        img: "/fakeStore.png",
        iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/c.svg","/strapi.svg"],
        live:false,
        link: "https://github.com/fadyshenoda090/Fake-store-nextjs" +
            "",
    },
    {
        id: 5,
        title: "My Next.js Personal Portfolio",
        des: "Got the figma design and implemented the design using Next.js, TailwindCSS, Acternity UI and sentry.",
        img: "/portfolio.png",
        iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg","/sentry.svg"],
        link: "/ui.apple.com",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend development at ITI (Information Technology Institute)",
        desc: "learned the web flow and technologies used to create web apps like HTML5, CSS3, JavaScript and other technologies like react.js.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
//     {
//         id: 2,
//         title: "Mobile App Dev - JSM Tech",
//         desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
//         className: "md:col-span-2", // change to md:col-span-2
//         thumbnail: "/exp2.svg",
//     },
//     {
//         id: 3,
//         title: "Freelance App Dev Project",
//         desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
//         className: "md:col-span-2", // change to md:col-span-2
//         thumbnail: "/exp3.svg",
//     },
//     {
//         id: 4,
//         title: "Lead Frontend Developer",
//         desc: "Developed and maintained user-facing features using modern frontend technologies.",
//         className: "md:col-span-2",
//         thumbnail: "/exp4.svg",
//     },
];

export const socialMedia = [
    {
        id: 1,
        img: "/github.svg",
        alt: "github",
        link:'https://github.com/fadyshenoda090'
    },
    {
        id: 2,
        img: "/link.svg",
        alt: "linkedin",
        link:'https://linkedin.com/in/fady-shenoda'
    },
    {
        id:2,
        img:'/whatsapp.svg',
        alt:'whatsapp',
        link:'https://wa.me/201206753202'
    }
];



export const skills = [
    {
        title: "HTML5",
        img: "/html.svg",
    },
    {
        title: "CSS3",
        img: "/css3.svg",
    },
    {
        title: "JavaScript",
        img: "/js.svg",
    },
    {
        title: "TypeScript",
        img: "/ts.svg",
    },
    {
        title: 'BootStrap',
        img: '/bootStrap.svg'
    },
    {
        title: "TailwindCSS",
        img: "/tail.svg",
    },
    {
        title: "React.js",
        img: "/re.svg",
    },
    {
        title: "Next.js",
        img: "/next.svg",
    },
    {
        title:'Redux Toolkit',
        img:'/redux.svg'
    },
    {
        title: "Git & GitHub",
        img: "/github.svg",
    },
    {
        title: "Framer Motion",
        img: "/fm.svg",
    },
    {
        title: "Ubuntu OS",
        img: "/ubuntu.svg",
    },
    {
        title: "Windows OS",
        img: "/windows.svg",
    },
]
