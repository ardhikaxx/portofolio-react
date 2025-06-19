import Project1 from '@/public/images/project/projek1.png';
import Project2 from '@/public/images/project/projek2.png';
import Project3 from '@/public/images/project/projek3.jpg';
import Project4 from '@/public/images/project/projek4.png';
import Project5 from '@/public/images/project/projek5.png';
import Project6 from '@/public/images/project/projek6.png';
import Project7 from '@/public/images/project/projek7.png';
import Project8 from '@/public/images/project/projek8.png';
import Project9 from '@/public/images/project/projek9.png';
import Project10 from '@/public/images/project/projek10.png';
import Project11 from '@/public/images/project/projek11.png';
import Project12 from '@/public/images/project/projek12.png';
import { link } from 'fs';

export const projects = [
    {
        id: 1,
        name: 'Eat Well Analyzer Website',
        description: 'I developed the Eat Well Analyzer website to assist users in analyzing food nutrients. This project involved tackling complex challenges related to data processing and algorithm development. By leveraging teamwork and dedication, the website successfully delivers a user-friendly interface for understanding nutritional information.',
        image: Project1,
        languages: ['html', 'tailwind', 'javascript'],
        link: 'https://eat-well-analyzer.vercel.app/',
        year: 2024
    },
    {
        id: 2,
        name: 'Website-Based Posyandu Health Data Manager',
        description: 'This project involved creating a web application for managing toddler health data at posyandus (community health posts). Designed for use by cadres and midwives, the platform streamlines data management for child growth, immunizations, and health records. This final project for the 2024 even semester was part of a team effort that secured funding through the Student Creativity Program (PKM).',
        image: Project2,
        languages: ['html', 'css', 'bootstrap', 'php', 'laravel', 'javascript'],
        link: 'https://youtu.be/ouWihtoRrXQ?si=i9-c8RCqJMOmwfLo',
        year: 2024
    },
    {
        id: 3,
        name: 'Mobile-Based Posyandu Health Data Manager',
        description: 'This mobile application complements the web-based Posyandu Health Data Manager, allowing parents to easily track their children’s health records, growth, and immunization history. Developed as part of the final project for the 2024 even semester, this initiative also received funding from the Student Creativity Program (PKM).',
        image: Project3,
        languages: ['android studio', 'dart', 'flutter'],
        link: 'https://youtu.be/ouWihtoRrXQ?si=i9-c8RCqJMOmwfLo',
        year: 2024
    },
    {
        id: 4,
        name: 'Website PKM - PM 2024',
        description: 'This website supports the 2024 PKM project by providing resources related to the Health Data Management Information System for Posyandu. Users can access mobile app downloads, explore the web app features for managing child data, and view photo documentation of project activities. Designed for healthcare workers, cadres, and parents in Kp. Gudang, Situbondo, the system improves child health management efficiency.',
        image: Project4,
        languages: ['html', 'bootstrap', 'javascript'],
        link: 'https://web-app-posyandu.vercel.app/',
        year: 2024
    },
    {
        id: 5,
        name: 'Website Card Monument',
        description: 'I designed this website to preserve the history of Bondowoso, East Java, with a focus on the Gerbong Maut tragedy during the Dutch colonial era. This project combines historical storytelling with a visually engaging layout to educate and commemorate.',
        image: Project5,
        languages: ['html', 'css', 'javascript'],
        link: 'https://monumen-gerbong-maut.vercel.app/',
        year: 2024
    },
    {
        id: 6,
        name: 'Website Travel - PutraKJ Trans',
        description: 'I developed a website for PutraKJ Trans, a transportation company, to enhance their online presence. The site includes detailed information about services, fleet options, and an intuitive booking process, helping to connect clients with reliable transportation solutions.',
        image: Project6,
        languages: ['html', 'css', 'bootstrap', 'javascript'],
        link: 'https://www.putrakjtrans.com/',
        year: 2024
    },
    {
        id: 7,
        name: 'Website - Kelompok Tani Kopi Sumber Kembang',
        description: 'This website was designed for Kelompok Tani Kopi Sumber Kembang to promote their coffee farming practices and products. The platform provides insights into the community’s activities, sustainable farming efforts, and the high-quality coffee they produce.',
        image: Project7,
        languages: ['html', 'css', 'bootstrap', 'javascript'],
        link: 'https://kopisumberkembang.my.id/',
        year: 2024
    },
    {
        id: 8,
        name: 'Website Omeo AI - Interactive Education',
        description: 'This website provides educational content about Omeo AI, an AI-based platform for learning. It explains the platform’s features and functionality. Built using HTML, Tailwind CSS, Node.js, and JavaScript, the site is still under development and expected to be completed in 2024.',
        image: Project8,
        languages: ['html', 'tailwind', 'node.js', 'javascript'],
        link: 'https://omeo-ai.vercel.app/',
        year: 2024
    },
    {
        id: 9,
        name: 'Website EGG TIMER - Perfect Eggs Every Time!',
        description: 'This website is designed to help users cook eggs perfectly every time. It includes interactive timers and guides for different types of egg preparations. Built using HTML, Tailwind CSS, and JavaScript.',
        image: Project9,
        languages: ['html', 'css', 'tailwind', 'javascript'],
        link: 'https://egg-timer-eight.vercel.app/',
        year: 2025
    },
    {
        id: 10,
        name: 'GlucoWise Web Demo and Mobile App Showcase',
        description: 'I created this website to showcase a demo of the GlucoWise application developed by my team. The platform allows general users to download and install the mobile app directly from the site. Built using HTML, CSS, Bootstrap, and JavaScript, this website serves as an informative hub that explains what GlucoWise is—an innovative web-based data management and diabetes education application designed for healthcare professionals, as well as a mobile solution tailored for the general public.',
        image: Project10,
        languages: ['html', 'css', 'bootstrap', 'javascript'],
        link: 'https://glucowise-app.vercel.app/',
        year: 2025
    },
    {
        id: 11,
        name: 'Glucozia AI - Interactive Diabetes Education Chatbot',
        description: 'I developed the Glucozia AI website, an interactive chatbot powered by artificial intelligence designed to provide personalized diabetes education. This tool offers users real-time assistance, health analysis, and tailored advice through a responsive chat interface. It was built using HTML, CSS, Tailwind CSS, and JavaScript, ensuring a sleek and modern user experience. Glucozia acts as a virtual assistant, available 24/7 to help users understand diabetes, monitor their health status, and receive nutritional recommendations based on their individual needs.',
        image: Project11,
        languages: ['html', 'css', 'tailwind', 'javascript'],
        link: 'https://dev-aitec-2025.vercel.app/',
        year: 2025
    },
    {
        id: 12,
        name: 'Website AITeC VII 2025 - Politeknik Negeri Jember',
        description: 'I developed a website for the 7th Agricultural Innovation Technology Competition (AITeC) 2025, hosted by Politeknik Negeri Jember. This website was built using HTML, Tailwind CSS, and JavaScript. My role focused on creating the front-end interface, ensuring a responsive and user-friendly experience.',
        image: Project12,
        languages: ['html', 'css', 'tailwind', 'javascript'],
        link: 'https://dev-aitec-2025.vercel.app/',
        year: 2025
    },
    // {
    //     id: 13,
    //     name: '',
    //     description: '',
    //     image: Project12,
    //     link: '',
    //     year: 2025
    // }
];