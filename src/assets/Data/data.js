import GameCardImg1 from '../../assets/Image/game-card1.png';
import GameCardImg2 from '../../assets/Image/game-card2.png';
import GameCardImg3 from '../../assets/Image/game-card3.png';
import GameCardImg4 from '../../assets/Image/game-card4.png';

import teamImag1 from '../../assets/Image/team-2-1.jpg';
import teamImag2 from '../../assets/Image/team-2-2.jpg';
import teamImag3 from '../../assets/Image/team-2-3.jpg';
import teamImag4 from '../../assets/Image/team-2-4.jpg';

import workBg1 from '../../assets/Image/work-card-bg1-1.png';

import clientImg1 from './../../assets/Image/testimonial-1.png';
import clientImg2 from './../../assets/Image/testimonial-2.png';
import clientImg3 from './../../assets/Image/testimonial-3.png';

import instaImg1 from './../../assets/Image/insta-1.png';
import instaImg2 from './../../assets/Image/insta-2.png';
import instaImg3 from './../../assets/Image/insta-3.png';
import instaImg4 from './../../assets/Image/insta-4.png';
import instaImg5 from './../../assets/Image/insta-5.png';
import instaImg6 from './../../assets/Image/insta-6.png';

export const navData = [
    {
        label: 'Home',
        link: '#',
    },
    {
        label: 'About',
        link: '#',
    },
    {
        label: 'Products',
        link: '#',
    },
    {
        label: 'Highlights',
        link: '#',
    },
    {
        label: 'Contact',
        link: '#',
    },
];

export const socialIconsData = [
    {
        name: 'Facebook',
        iconClass: 'ri-facebook-fill',
        link: '#',
    },
    {
        name: 'Twitter',
        iconClass: 'ri-twitter-fill',
        link: '#',
    },
    {
        name: 'LinkedIn',
        iconClass: 'ri-linkedin-fill',
        link: '#',
    },
    {
        name: 'Google',
        iconClass: 'ri-google-fill',
        link: '#',
    },
    {
        name: 'Behance',
        iconClass: 'ri-behance-fill',
        link: '#',
    },
    {
        name: 'YouTube',
        iconClass: 'ri-youtube-fill',
        link: '#',
    },
];

export const servicesData = [
    {
        id: '01',
        title: 'Game Server',
    },
    {
        id: '02',
        title: 'Game Testing',
    },
    {
        id: '03',
        title: 'AR/VR Integration',
    },
    {
        id: '04',
        title: 'Game Design',
    },
    {
        id: '05',
        title: 'Game Development',
    },
];

export const marqueeData = ['Gaming Community', 'Inclusive Gaming'];

export const gameCardsData = [
    {
        id: 1,
        image: GameCardImg1,
        alt: 'Game 1',
        actionText: 'DOWNLOAD',
        link: '#',
    },
    {
        id: 2,
        image: GameCardImg2,
        alt: 'Game 2',
        actionText: 'DOWNLOAD',
        link: '#',
    },
    {
        id: 3,
        image: GameCardImg3,
        alt: 'Game 3',
        actionText: 'DOWNLOAD',
        link: '#',
    },
    {
        id: 4,
        image: GameCardImg4,
        alt: 'Game 4',
        actionText: 'DOWNLOAD',
        link: '#',
    },
];

export const missionData = [
    {
        value: '370+',
        description: 'Creating and optimizing websites',
    },
    {
        value: '10+',
        description: 'Brand awareness and recognition',
    },
    {
        value: '4x',
        description: 'Measure and analyze performance',
    },
    {
        value: '50%',
        description: 'Increase conversions and sales',
    },
];

export const teamData = [
    {
        id: 1,
        name: 'James Tylor',
        role: 'CEO',
        description: 'Measure and analyze performance',
        image: teamImag1,
        socials: ['ri-facebook-fill', 'ri-twitter-fill', 'ri-instagram-line'],
    },
    {
        id: 2,
        name: 'Katty Williams',
        role: 'Designer',
        description: 'Measure and analyze performance',
        image: teamImag2,
        socials: ['ri-facebook-fill', 'ri-twitter-fill', 'ri-instagram-line'],
    },
    {
        id: 3,
        name: 'Harry Newman',
        role: 'Developer',
        description: 'Measure and analyze performance',
        image: teamImag3,
        socials: ['ri-facebook-fill', 'ri-twitter-fill', 'ri-instagram-line'],
    },
    {
        id: 4,
        name: 'James Tylor',
        role: 'Founder',
        description: 'Measure and analyze performance',
        image: teamImag4,
        socials: ['ri-facebook-fill', 'ri-twitter-fill', 'ri-instagram-line'],
    },
    {
        id: 5,
        name: 'James Tylor',
        role: 'Designer',
        description: 'Measure and analyze performance',
        image: teamImag2,
        socials: ['ri-facebook-fill', 'ri-twitter-fill', 'ri-instagram-line'],
    },
];

export const worksData = [
    {
        id: 1,
        title: 'Upcoming Game Release',
        subtitle: 'CyberSaga Chronicles',
        category: 'Action - Adventure',
        marqueeText: 'Upcoming Game Release',
        marqueeBg: workBg1,
    },
    {
        id: 2,
        title: 'Upcoming Game Release',
        subtitle: 'Multiplayer',
        category: 'Adventure - PVP',
        marqueeText: 'The Rise of Cloud Gaming',
        marqueeBg: workBg1,
    },
    {
        id: 3,
        title: 'Behind the Scene',
        subtitle: 'Infinity Forge',
        category: 'Strategy',
        marqueeText: 'Behind the Scene',
        marqueeBg: workBg1,
    },
    {
        id: 4,
        title: 'Gaming Event Spotlight',
        subtitle: '2023 Recap',
        category: 'Sports - Racing',
        marqueeText: 'Gaming Event Spotlight',
        marqueeBg: workBg1,
    },
    {
        id: 5,
        title: 'Gaming for a Cause',
        subtitle: 'Community Spotlight',
        category: 'Battle Royale - PVP',
        marqueeText: 'Gaming for a Cause',
        marqueeBg: workBg1,
    },
];

export const testimonialsData = [
    {
        id: 1,
        name: 'Nick Davis',
        role: 'UI/UX Designer',
        message:
            'The team consistently delivers thoughtful, user-centered designs. Their attention to detail and performance optimization really stands out.',
        image: clientImg1,
    },
    {
        id: 2,
        name: 'Sarah Mitchell',
        role: 'Product Manager',
        message:
            'Working with this team has been seamless. They communicate clearly, meet deadlines, and always push for the best possible outcome.',
        image: clientImg2,
    },
    {
        id: 3,
        name: 'Daniel Rodriguez',
        role: 'Game Developer',
        message:
            'Their technical expertise and passion for gaming are evident in every feature they build. Performance and quality are always top-notch.',
        image: clientImg3,
    },
    {
        id: 4,
        name: 'Emily Chen',
        role: 'Marketing Strategist',
        message:
            'They helped us boost engagement and brand presence significantly. The results exceeded our expectations.',
        image: clientImg1,
    },
    {
        id: 5,
        name: 'James Wilson',
        role: 'Startup Founder',
        message:
            'Reliable, creative, and highly skilled. They understand business goals and translate them into powerful digital experiences.',
        image: clientImg2,
    },
];

export const contactOptionsData = [
    {
        id: 1,
        label: 'Design',
        value: 'design',
    },
    {
        id: 2,
        label: 'Development',
        value: 'development',
    },
    {
        id: 3,
        label: 'Animation',
        value: 'animation',
    },
    {
        id: 4,
        label: 'Other',
        value: 'other',
    },
];

export const instaFeedData = [
    {
        id: 1,
        image: instaImg1,
        alt: 'Instagram post 1',
    },
    {
        id: 2,
        image: instaImg2,
        alt: 'Instagram post 2',
    },
    {
        id: 3,
        image: instaImg3,
        alt: 'Instagram post 3',
    },
    {
        id: 4,
        image: instaImg4,
        alt: 'Instagram post 4',
    },
    {
        id: 5,
        image: instaImg5,
        alt: 'Instagram post 5',
    },
    {
        id: 6,
        image: instaImg6,
        alt: 'Instagram post 6',
    },
];
