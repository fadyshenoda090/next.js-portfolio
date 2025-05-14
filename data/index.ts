export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "Hello this is me 😁",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 md:min-h-[40vh] lg:min-h-[60vh]",
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
        title: "My Next.js Personal Portfolio",
        des: "Got the figma design and implemented the design using Next.js, TailwindCSS, Acternity UI and sentry.",
        img: "/portfolio.png",
        iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg", "/sentry.svg"],
        live: true,
        link: "https://fady-shenoda.vercel.app/",
    },
    {
        id: 2,
        title: "Value Platform",
        des: "Participated in the design of the landing page, I was responsible of design the first three sections of the landing page and implemented the design using React.js and native CSS styling.",
        img: "/value.png",
        iconLists: ['/re.svg', '/js.svg', '/css3.svg'],
        live: true,
        link: "https://value-platform.com/"
    },
    {
        id: 3,
        title: "Fake Store - E-commerce platform",
        des: "My very first next.js project where user can just register, login, see products and add products to cart.",
        img: "/fakeStore.png",
        iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/c.svg", "/strapi.svg"],
        live: false,
        link: "https://github.com/fadyshenoda090/Fake-store-nextjs" +
            "",
    },
    {
        id: 4,
        title: "Personal Youtube to mp3 downloader",
        des: "Personal youtube downloader so i can download youtube music for free to my device and listen to them any time and no need for internet.",
        img: "/mp3Downloader.png",
        iconLists: ['re.svg', '/js.svg'],
        live: true,
        link: "https://video-to-mp3-downloader.vercel.app/",
    },
    {
        id: 5,
        title: "Gamers Zone - the gamers' best place",
        des: "Gamers Zone is gamers place to get games updates, series upcoming parts, rating, the production company and reviews.",
        img: "/gamersZone.png",
        iconLists: ["/re.svg", "/js.svg", "/tail.svg",],
        live: true,
        link: "https://gamerz-zone.netlify.app/",
    },
    {
        id: 6,
        title: "Amazon E-commerce - Platform Clone",
        des: "Cloned Amazon E-commerce platform as an ITI graduation project using React.js where user can search for prods, register, login and add prods to cart.",
        img: "/amazon.png",
        iconLists: ["/re.svg", '/js.svg', "/tail.svg", "/redux.svg", "/firebase.svg"],
        live: true,
        link: "https://fir-88026.web.app/",
    },
    {
        id: 7,
        title: "Movies Land - Movies watching platform",
        des: "A movies app as a personal project using React.js for Frontend and TMDB api to See tha latest releases of movies and series.",
        img: "/moviesApp.png",
        iconLists: ["/re.svg", '/js.svg', "/bootStrap.svg", "/redux.svg"],
        live: false,
        link: "https://github.com/fadyshenoda090/React-movies-app",
    },
    {
        id: 8,
        title: 'Action Pad',
        des: 'A full-stack using MERN Stack, it is a platform where users can add their daily tasks, update them any time, mark them as to-do , in progress or done and delete them.',
        img: '/actionPad.png',
        iconLists: ['/re.svg', '/js.svg', '/tail.svg', 'rhf.svg', '/node.svg', '/mongo.svg', 'mongoose.svg', '/exp.svg'],
        live: true,
        link: 'https://to-do-app-front-three.vercel.app/'
    },
    {
        id: 9,
        title: 'G2 Digital',
        des: 'An e-commerce platform for digital products such as PUBG UCs, Call of Duty CPs, Netflix subscriptions, PlayStation and Xbox cards, Google Play gift cards, and more.',
        img: '/G2d.png',
        iconLists: ['/re.svg', '/js.svg', '/bootStrap.svg', '/scss.svg', 'redux.svg', 'rhf.svg'],
        live: true,
        link: 'https://g2.digital/'
    },
    {
        id: 10,
        title: 'G2 Digital V2',
        des: 'A redesigned and upgraded version of G2 Digital featuring new functionality like tournament hosting, organizer tools, and player participation in live competitions with prize rewards.',
        img: '/G2dV2.png',
        iconLists: ['/re.svg', '/js.svg', '/tail.svg', 'rhf.svg', 'redux.svg'],
        live: true,
        link: 'https://g2.digital/'
    }
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend development at ITI (Information Technology Institute)",
        desc: "learned the web flow and technologies used to create web apps like HTML5, CSS3, JavaScript and other technologies like react.js.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Frontend development at Alrowadit (AITSP)",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 3,
        title: "Frontend development at UTO Services LLC",
        desc: "Developed modern animated user interfaces using latest technologies .",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/github.svg",
        alt: "github",
        link: 'https://github.com/fadyshenoda090'
    },
    {
        id: 2,
        img: "/link.svg",
        alt: "linkedin",
        link: 'https://linkedin.com/in/fady-shenoda'
    },
    {
        id: 2,
        img: '/whatsapp.svg',
        alt: 'whatsapp',
        link: 'https://wa.me/201206753202'
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
        title: "React-hook-form",
        img: "/rhf.svg",
    },
    {
        title: "Node.js",
        img: "/node.svg",
    },
    {
        title: "MongoDB",
        img: "/mongo.svg",
    },
    {
        title: "Express.js",
        img: "/exp.svg",
    },
    {
        title: 'Redux Toolkit',
        img: '/redux.svg'
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
    }
]
