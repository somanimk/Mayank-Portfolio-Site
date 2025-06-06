import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import jira from './Jira.png';
import postman from './Postman.png';
import dashboard_CMS from './Dashboard&CMS.png';
import portfolio from './portfolio.png';
import github from './Github.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    jira,
    postman,
    github,
    dashboard_CMS,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    portfolio,
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
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.graphics_icon, title: 'Frontend Web Development', description: 'Building modern, responsive UIs using React.js, Next.js, and Tailwind CSS with API integration and SEO optimization.', link: '' },
    { icon: assets.dashboard_CMS, title: 'Dashboard & CMS UI', description: 'Creating analytical dashboards, CMS modules, and admin panels with scalable component architecture and clean UX.', link: '' },
    { icon: assets.portfolio, title: 'Landing & Portfolio Sites', description: 'Designing fast, SEO-friendly landing pages, company websites, and portfolios using React, Next.js, and Tailwind.', link: '' },
    { icon: assets.web_icon, title: 'Web App Integration', description: 'Integrating APIs, auth systems (Clerk), and writing unit tests using Jest to ensure robust app functionality.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tech Stack', description: 'HTML5, CSS3, JavaScript, React.js, Next.js, Typescript, Tailwind CSS, Framer Motion, Bootstrap, Redux, PostGreSQL, Supabase, D3.js, Jest' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Master of Computer Applications (MCA) from Vellore Institute of Technology (VIT) and Bachelor of Computer Applications(BCA) from Rajasthan University(RU),Jaipur' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built and contributed to 10+ projects including ed-tech platforms, CMS, dashboards, admin panels, e-commerce, LMS, job portals, doctor booking, and mini apps like URL shortener, planner, and portfolios.' }
];

export const toolsData = [
    assets.vscode, assets.figma, assets.github , assets.jira , assets.postman
];