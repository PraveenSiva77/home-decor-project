import SlideImg1 from '../assets/img/slider/slide-1.png';
import SlideImg2 from '../assets/img/slider/slide-2.png';
import SlideImg3 from '../assets/img/slider/slide-3.png';


// Navigation bar Data

import Home from '../pages/Home';
import WhyUs from '../pages/WhyUs';
import Products from '../pages/Products';
import ContactUs from '../pages/ContactUs';


export const navData = [
    {
        title: 'Home',
        path: '/home-decor-project/',
        element: <Home/>,
    },
    {
        title: 'Why Us',
        path: '/home-decor-project/why-us',
        element: <WhyUs/>,
    },
    {
        title: 'Products',
        path: '/home-decor-project/products',
        element: <Products/>,
    },
    {
        title: 'Contact Us',
        path: '/home-decor-project/contact-us',
        element: <ContactUs/>,
    }
];

// Slider Data
export const sliderData = [
    {
        id: 1,
        title: 'Home Decor 1',
        img: SlideImg1,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: 2,
        title: 'Home Decor 2',
        img: SlideImg2,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: 3,
        title: 'Home Decor 3',
        img: SlideImg3,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    }
];


// Featured Categories Data

import FeatureImg1 from '../assets/img//Featured/sanitary-ware.png';
import FeatureImg2 from '../assets/img//Featured/outdoor.png';
import FeatureImg3 from '../assets/img//Featured/kitchen.png';
import FeatureImg4 from '../assets/img//Featured/living-room.png';
import FeatureImg5 from '../assets/img//Featured/bedroom.png';

import { PiCookingPotFill } from "react-icons/pi";
import { GiDoorHandle } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { BiCloset } from "react-icons/bi";

export const featuredData = [
    {
        id: 1,
        icon: <FaBath />,
        title: 'Sanitary Ware',
        img: FeatureImg1,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: 2,
        icon: <GiDoorHandle />,
        title: 'Door & Windows',
        img: FeatureImg2,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: 3,
        icon: <PiCookingPotFill />,
        title: 'Kitchen Ware',
        img: FeatureImg3,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: 4,
        icon: <BiCloset />,
        title: 'Wardrobe',
        img: FeatureImg4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: 5,
        icon: <IoIosBed />,
        title: 'Mattress',
        img: FeatureImg5,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    }
];


// Testimonial Data

import TestimonialImg1 from '../assets/img/avatars/avatar-1.png';
import TestimonialImg2 from '../assets/img/avatars/avatar-2.png';
import TestimonialImg3 from '../assets/img/avatars/avatar-3.png';
import TestimonialImg4 from '../assets/img/avatars/avatar-4.png';

export const testimonialData = [
    {
        id: 1,
        name: 'John Doe',
        img: TestimonialImg1,
        rating: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: 2,
        name: 'kate Doe',
        img: TestimonialImg2,
        rating: 5,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: 3,
        name: 'Smith John',
        img: TestimonialImg3,
        rating: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: 4,
        name: 'Jane Smith',
        img: TestimonialImg4,
        rating: 3,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    }
];


// Footer Data
export const footerData = [
    {
        id: 1,
        title: 'Information',
        links: [
            {
                id: 1,
                title: 'About Us',
                path: '/about-us',
            },
            {
                id: 2,
                title: 'Privacy Policy',
                path: '/privacy-policy',
            },
            {
                id: 3,
                title: 'Terms & Conditions',
                path: '/terms-and-conditions',
            },
            {
                id: 4,
                title: 'Shipping & Returns',
                path: '/shipping-and-returns',
            }
        ]
    },
    {
        id: 2,
        title: 'Categories',
        links: [
            {
                id: 1,
                title: 'Sanitary Ware',
                path: '/sanitary-ware',
            },
            {
                id: 2,
                title: 'Door & Windows',
                path: '/door-and-windows',
            },
            {
                id: 3,
                title: 'Kitchen Ware',
                path: '/kitchen-ware',
            },
            {
                id: 4,
                title: 'Mattress',
                path: '/mattress',
            }
        ]
    },
    {
        id: 3,
        title: 'Help',
        links: [
            {
                id: 1,
                title: 'FAQ',
                path: '/faq',
            },
            {
                id: 2,
                title: 'Shipping',
                path: '/shipping',
            },
            {
                id: 3,
                title: 'Returns',
                path: '/returns',
            },
        ]
    },
    {
        id: 4,
        title: 'Contact',
        links: [
            {
                id: 1,
                title: 'info@buyspectra.com',
                path: 'mailto:info@buyspectra.com',
            },
            {
                id: 2,
                title: '0422-4518380',
                path: 'tel:04224518380',
            },
            {
                id: 3,
                title: '763A, Avanashi Road, Next to Nexa Showroom, Coimbatore-641004',
                path: 'https://goo.gl/maps/X341R43X7J12',
            }
        ]
    }
];