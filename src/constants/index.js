export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'RAM IT Solutions',
    position: 'CEO',
    img: 'assets/review1.png',
    review:
      'Excellent work, delivered in time. Great skills sets, easy to communicate and would definitely hire him again for future work.',
  },
  {
    id: 2,
    name: 'Hamza Zaheer',
    position: 'Senior Software Engineer',
    img: 'assets/review2.jpg',
    review:
      'Highly recommended developer especially for his ability to solve problems. He has been contributing to the team with his task oriented, hard working and friendly personality.',
  },
];

export const myProjects = [
  {
    title: 'Speetar - Telemedicine Application',
    desc: 'A telemedicine application that connects patients with doctors for virtual consultations. Speetar is designed to provide a seamless user experience, with features like video calls, chat, and secure payments.',
    subdesc:
      'Built with React Native, Speetar is a secure and reliable platform for patients and doctors to connect remotely.',
    href: 'https://speetar.com/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'YC Directory - Startup Directory Platform',
    desc: 'A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.',
    subdesc:
      'Built with Next.js 15, Tailwind CSS and Sanity for live data updates, YC Directory is a platform that connects entrepreneurs with investors and accelerators, helping them grow their businesses.',
    href: 'https://yc-directory-pied-gamma.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#1c1115',
      border: '0.2px solid #451927',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 5,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://imaginify-alpha-swart.vercel.app/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 5,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Fingletek Oy',
    pos: 'Full Stack Developer',
    duration: 'Jul 2024 - Present',
    title:
      'I developed cloud-based solutions with applications in video surveillance using IoT and edge computing. I also deployed and maintained containerized applications on AWS cloud using Elastic Beanstalk, Elasticache and RDS',
    icon: '/assets/fingletek.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Letsbuildtek',
    pos: 'Software Engineer',
    duration: 'Apr 2023 - Jun 2023',
    title:
      'Collaborated to develop solutions for alternative medicine practices using IoTs using React Native. I also set up expo cli for instant updates, added data persistence, offline support, and MySQL database caching.',
    icon: '/assets/letsbuildtek.jpg',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Tekrowe',
    pos: 'Software Engineer',
    duration: 'Dec 2021 - Mar 2023',
    title:
      'Contributed to the development of multinational products with over 500k users across multiple platforms. And led the development of products E2E, from identifying requirements and dependencies to development and testing.',
    icon: '/assets/tekrowe.webp',
    animation: 'clapping',
  },
  {
    id: 4,
    name: 'Develo IT Solutions',
    pos: 'Mobile App Developer',
    duration: 'Aug 2021 - Nov 2021',
    title:
      'Developed pixel-perfect React Native applications, with app localization, authentication, and Stripe payments.',
    icon: '/assets/develo.jpg',
    animation: 'idle',
  },
];
