import user_image from "./profile-img.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import react from "./react.png";
import nextjs from "./nextjs.png";
import tailwind from "./tailwind.png";
import typescript from "./typescript.png";
import framer from "./framer.png";
import nodejs from "./nodejs.png";
import express from "./express.png";
import firebase from "./firebase.png";
import jwt from "./jwt.png";
import wp from "./wp.png";
import woo from "./woo.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.webp";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import js from "./js-icon-1.png";
import html from "./html-icon.png";
import css from "./css-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import cascade from "./cascade.jpg";
import fitTracker from "./fit-tracker.jpg";
import glowmart from "./glowmart.jpg";
import leafLog from "./leaflog.png";
import onePause from "./onepause.png";
import funnelHacker from "./funnelhacker.png";
import nayeemSquad from "./nayeemSquad.png";
import paybills from "./paybils.png";
import englishJanala from "./english-janala.png";
import tarragon from "./tarragon.png";
import roomhatch from "./Roomhatch.webp";
import LawBD from "./Law_BD_react_projects.webp";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
export const assets = {
  cascade,
  fitTracker,
  glowmart,
  leafLog,
  roomhatch,
  LawBD,
  onePause,
  funnelHacker,
  user_image,
  nayeemSquad,
  paybills,
  englishJanala,
  tarragon,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  react,
  nextjs,
  tailwind,
  framer,
  nodejs,
  jwt,
  express,
  vscode,
  firebase,
  typescript,
  figma,
  git,
  mongodb,
  wp,
  woo,
  right_arrow_white,
  logo,
  mail_icon,
  js,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  html,
  css,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "RoomHatch",
    subTitle: "MERN-Based Roommate & Room Listing Platform",
    techStack: [
      assets.react,
      assets.nodejs,
      assets.express,
      assets.mongodb,
      assets.tailwind,
      assets.firebase, // used only for auth
    ],
    image: assets.roomhatch,
    liveLink: "https://roomhatch-auth.web.app/",
    github: "https://github.com/Shakib-56/roomHatch-client",
    description:
      "RoomHatch is a full-stack MERN platform that helps users find roommates and available rooms. The frontend is built using React and Tailwind CSS, authentication is handled through Firebase, and the backend uses Node.js, Express.js, and MongoDB to manage listings, user data, and protected APIs.",
    keyHighlights: [
      "🔐 Firebase Authentication integrated with MERN stack",
      "🏠 Roommate & room listing with real-time data from MongoDB",
      "🛏️ Full CRUD: users can add, update, delete, and view listings",
      "🔍 Advanced filtering & search for roommate/room posts",
      "📊 Protected dashboard with user-specific listings",
      "🌐 Client hosted on Firebase, server deployed on Vercel",
      "🔄 RESTful API integration with secure routing",
      "📱 Fully responsive UI using Tailwind CSS",
    ],
    backendDescription: `
    The backend server is built using Node.js and Express.js, with MongoDB as the
    database for storing roommate listings and user data. It exposes RESTful API
    endpoints that the frontend consumes for:
    - User authentication and authorization sync with Firebase tokens
    - Creating, reading, updating, and deleting roommate listings
    - Filtering and searching roommate posts
    - Securing user-specific data with protected routes
  
    The backend is designed with scalability and security in mind, using proper
    validation, middleware, and error handling to ensure a stable and safe user
    experience.
  `,
    challengesFaced: [
      "Synchronizing Firebase authentication tokens with backend authorization",
      "Designing scalable MongoDB schemas for listings and user data",
      "Implementing secure protected routes on both frontend & backend",
      "Building efficient filtering & search functionality for listings",
      "Ensuring full responsiveness and smooth UX on all devices",
    ],
    futurePlans: [
      "Add full admin panel for listing moderation & user management",
      "Integrate payment gateway for booking or premium listings",
      "Add real-time chat between potential roommates",
      "Implement image uploads using Cloudinary",
      "Introduce advanced map-based search and location filtering",
      "Create analytics dashboard for user activity and listing performance",
    ],
  },

  {
    title: "Law BD",
    subTitle: "Professional Law Firm Website",
    techStack: [assets.react, assets.tailwind, assets.js],
    image: assets.LawBD,
    liveLink: "https://ph-law-bd.netlify.app/",
    github: "", // add GitHub repo if you have
    description:
      "PH Law BD is a clean, modern website for a law firm, built with a focus on professionalism and trust. The design emphasizes clarity, easy navigation, and a responsive layout to help potential clients find relevant legal services quickly.",
    keyHighlights: [
      "✅ Professionally styled homepage and service pages",
      "📱 Responsive and mobile-friendly layout",
      "🎯 Clear calls to action for consultation and contact",
      "🔒 Trust-building design with clean color scheme and clear contact info",
      "⚡ Fast loading times and optimized visuals",
    ],
    challengesFaced: [
      "Designing a site that feels trustworthy and authoritative",
      "Balancing legal professionalism with modern web aesthetics",
      "Making the navigation intuitive and client-focused",
      "Optimizing images and content for performance",
    ],
    futurePlans: [
      "Add attorney profile pages with bios and credentials",
      "Include a testimonial section from real or mock clients",
      "Integrate a secure contact form for booking free consultations",
      "Implement structured data for Enhanced SEO and local trust",
      "Add a blog or resource section to improve inbound client flow",
    ],
  },
  {
    title: "Pay Bills BD",
    subTitle: "Online Bill Payment Platform",
    techStack: [
      assets.react,
      assets.firebase,
      assets.tailwind,
      assets.nodejs,
      assets.express,
    ],
    image: assets.paybills, // Add a screenshot of your website here
    liveLink: "https://pay-billsbd.web.app/",
    github: "",
    description:
      "Pay Bills BD is a secure and user-friendly online platform that allows users to pay their utility bills including electricity, gas, water, and internet. Built with React and Firebase, the platform ensures fast, reliable, and responsive experiences across all devices.",
    keyHighlights: [
      "💳 Pay multiple utility bills in one place",
      "🔐 Secure user authentication using Firebase Auth",
      "📱 Fully responsive design for mobile, tablet, and desktop",
      "⚡ Fast and modern UI built with TailwindCSS",
      "🧾 Transaction history and payment confirmations",
      "🎨 Smooth animations with Framer Motion for better UX",
    ],
    challengesFaced: [
      "Integrating real-time payment status and confirmations",
      "Securing sensitive user data while maintaining smooth UX",
      "Ensuring reliable Firebase backend and API connectivity",
      "Designing a responsive UI for multiple devices",
      "Implementing dynamic form validation for various billers",
    ],
    futurePlans: [
      "Add support for more billers and service providers",
      "Introduce a mobile app version for iOS and Android",
      "Enable push notifications for due bills and payments",
      "Integrate AI-based bill reminders and suggestions",
      "Add multilingual support for wider accessibility",
    ],
  },
  {
    title: "English Janala",
    subTitle: "Interactive English Learning Website",
    techStack: [assets.js, assets.tailwind],
    image: assets.englishJanala, // Add screenshot to assets
    liveLink: "https://sakib-english-janala.netlify.app/",
    github: "https://github.com/Shakib-56/English_janala_web",
    description:
      "English Janala is a simple, clean, and fast English learning website built using Vanilla JavaScript and Tailwind CSS. It focuses on helping beginners practice basic English words, phrases, and grammar through an easy-to-use interface.",
    keyHighlights: [
      "📚 Simple English learning content for beginners",
      "⚡ Built with pure JavaScript (no frameworks)",
      "🎨 Fully responsive UI using TailwindCSS",
      "💡 Fast load time and lightweight design",
      "📱 Mobile-first layout for all devices",
    ],
    challengesFaced: [
      "Creating dynamic content interactions using only Vanilla JS",
      "Structuring a clean UI without using any JS frameworks",
      "Building fully responsive pages using Tailwind utilities",
      "Maintaining smooth performance with pure JavaScript",
    ],
    futurePlans: [
      "Add audio pronunciation for words",
      "Add quizzes and interactive exercises",
      "Implement progress tracking using Local Storage",
      "Add more vocabulary categories and lessons",
      "Include dark mode support",
    ],
  },
  {
    title: "Tarragon",
    subTitle: "Static product landing (HTML & CSS)",
    techStack: [assets.html, assets.css],
    image: assets.tarragon,
    liveLink: "https://shakib-56.github.io/Tarragon-by-css/",
    github: "https://github.com/Shakib-56/Tarragon-by-css",
    description:
      "Tarragon is a simple and elegant product landing page showcasing fresh fruit products. Created with semantic HTML and responsive CSS, it focuses on product photography and conversion-friendly layout.",
    keyHighlights: [
      "📸 Clean product-oriented hero and imagery",
      "📱 Mobile-first responsive layout",
      "⚡ Lightweight, static GitHub Pages deployment",
      "🧾 Contact info and footer with company details",
    ],
    challengesFaced: [
      "Creating an attractive hero using only HTML/CSS",
      "Ensuring consistent layout across devices",
      "Optimizing images for fast page loads",
    ],
    futurePlans: [
      "Add a small cart/checkout demo",
      "Add CSS-driven micro-interactions",
      "Add structured data for better SEO",
    ],
  },
  {
    title: "Glow Mart",
    subTitle: "Cosmetics eCommerce Website",
    techStack: [assets.wp, assets.woo],
    image: assets.glowmart,
    liveLink: "https://glowmartpoint.com/",
    description:
      "Glow Mart is a modern and visually appealing cosmetics eCommerce website built for a real client using WordPress...",
    keyHighlights: [
      "🛒 WooCommerce-powered store with secure checkout",
      "🎨 Custom layouts and styling using WPBakery Page Builder",
      "📦 Product catalog with categories, tags, and filtering options",
      "💳 Multiple payment gateway integration",
      "📱 Fully responsive and mobile-friendly design",
      "⭐ Customer reviews and ratings system",
      "🤝 Delivered as a real client project with tailored requirements",
    ],
    challengesFaced: [
      "Customizing WPBakery components for unique product layouts",
      "Configuring WooCommerce to handle multiple product variations and attributes",
      "Ensuring fast load times with optimized images and caching",
      "Integrating multiple payment gateways and testing transactions",
      "Managing SEO optimization while keeping the design clean",
      "Meeting specific design and functionality requirements from the client",
    ],
    futurePlans: [
      "Implement AI-powered product recommendations",
      "Add a loyalty rewards program for frequent customers",
      "Introduce subscription-based beauty boxes",
      "Integrate a virtual try-on feature for cosmetics",
      "Launch a dedicated mobile app for shopping",
    ],
  },

  {
    title: "One Pause Solution",
    subTitle: "Watch eCommerce Website",
    techStack: [assets.wp, assets.woo],
    image: assets.onePause,
    liveLink: "https://onepausesolution.com/",
    description:
      "One Pause Solution is a sleek and modern watch eCommerce website built for a real client...",
    keyHighlights: [
      "🛒 WooCommerce-powered store with secure checkout",
      "🎨 Custom design tailored for a luxury watch brand",
      "📦 Organized product catalog with categories and filtering",
      "💳 Multiple payment gateway integration",
      "📱 Fully responsive and mobile-friendly layout",
      "⭐ Customer reviews and ratings feature",
      "🤝 Delivered as a real client project with brand-specific customization",
    ],
    challengesFaced: [
      "Designing a luxury-focused UI to match the premium watch brand identity",
      "Customizing Elementor layouts for unique product presentation",
      "Ensuring WooCommerce handles multiple product variations smoothly",
      "Integrating and testing multiple payment gateways",
      "Optimizing performance while using high-resolution product images",
    ],
    futurePlans: [
      "Implement AI-powered product recommendations",
      "Introduce a loyalty program for frequent buyers",
      "Enable product customization options",
      "Add a virtual try-on feature for watches",
      "Launch a dedicated mobile app for shopping",
    ],
  },
  {
    title: "Funnel Hacker HQ",
    subTitle: "Funnel Building Website",
    techStack: [assets.wp, assets.woo],
    image: assets.funnelHacker,
    liveLink: "https://funnelhackerhq.com/",
  },
  {
    title: "Nayeem Squad",
    subTitle: "Electronics & Lifestyle eCommerce Website",
    techStack: [assets.wp, assets.woo],
    image: assets.nayeemSquad,
    liveLink: "https://dev-nayeemsquad.pantheonsite.io/",
    description:
      "Nayeem Squad is a dynamic eCommerce website built for electronics, home appliances, and lifestyle products using WordPress and WooCommerce...",
    keyHighlights: [
      "🛒 WooCommerce-powered store with secure checkout",
      "🎨 Custom product pages and category layouts",
      "📦 Product catalog with categories, tags, and filtering options",
      "💳 Multiple payment gateway integration",
      "📱 Fully responsive and mobile-friendly design",
      "⭐ Display of discounted pricing and promotions",
      "🤝 Designed as a client project with tailored requirements",
    ],
    challengesFaced: [
      "Customizing WooCommerce product pages for various categories",
      "Ensuring smooth navigation and responsive design across devices",
      "Optimizing site speed with caching and image compression",
      "Integrating multiple payment options and testing transactions",
      "Organizing a large catalog with filtering and sorting options",
      "Maintaining consistent branding and user-friendly UX",
    ],
    futurePlans: [
      "Implement AI-based product recommendations",
      "Add customer loyalty and rewards programs",
      "Integrate local payment options like bKash & Nagad",
      "Launch a mobile app for easier shopping",
      "Add real customer reviews and testimonials for trust",
    ],
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    institute: "Institute of Science & Technology",
    description: "B.Sc. in Computer Science and Engineering",
    duration: "Running",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Expriences",
    institute: "TechyPark Technologies, Inc.",
    description: "Junior Frontend Developer",
    duration: "2024 ( jan ) - 2025 ( feb )",
  },
];

export const toolsData = [
  assets.react,
  assets.nextjs,
  assets.tailwind,
  assets.typescript,
  assets.express,
  assets.firebase,
  assets.nodejs,
  assets.mongodb,
  assets.framer,
  assets.git,
  assets.jwt,
  assets.wp,
  assets.woo,
  // assets.vscode,
  assets.figma,
];

export const socialLinks = [
  {
    icon: <IoMailUnreadOutline size={18} />,
    url: "mailto:hossenmdshakib47@gmail.com",
  },
  { icon: <FaGithub size={18} />, url: "https://github.com/Shakib-56" },
  {
    icon: <FaLinkedinIn size={18} />,
    url: "https://www.linkedin.com/in/shakib-hossen-59773a339/",
  },
  {
    icon: <FaInstagram size={18} />,
    url: "https://www.instagram.com/sakibhossen5/",
  },
  {
    icon: <FaFacebookF size={18} />,
    url: "https://www.facebook.com/sakib.hossen.9081323/",
  },
];
