import {createAccordion} from "./components/accordion/accordion.js";
import {createBurger} from "./components/burger/burger.js";
import {createTabs} from "./components/tabs/tabs.js";
import {createNavigation} from "./components/navigation/navigation.js";
import {createBlog} from "./components/blog/blog.js";
import {createPagination} from "./components/pagination/pagination.js";
import {createSearch} from "./components/search/search.js";
import {getArticlesFromStorage} from "./utils/blogUtils.js";

// accordion
const accordionData = [
    {title: 'What is this?', content: 'This is an accordion component.'},
    {title: 'How does it work?', content: 'It expands and collapses when you click on headers.'},
    {title: 'Is it reusable?', content: 'Yes, you can insert it anywhere!'}
];

const accordion = document.getElementById('accordion-container')
accordion.append(createAccordion(accordionData))

// burger
const navData = [
    {label: "Home", link: "#"},
    {label: "About", link: "#about"},
    {
        label: "Contact",
        link: "#contact",
        children: [
            {label: "Contact 1", link: "#contact1"},
            {label: "Contact 2", link: "#contact2"},
            {label: "Contact 3", link: "#contact3"},
            {label: "Contact 4", link: "#contact4"},
            {label: "Contact 5", link: "#contact5"},
        ]
    },
    {label: "FAQ", link: "#faq"},
    {
        label: "Categories",
        link: "#categories",
        children: [
            {label: "Salesforce Basics", link: "#salesforce-basics"},
            {label: "Apex Development", link: "#apex-dev"},
            {label: "HTML & CSS", link: "#html-css"},
            {label: "JavaScript", link: "#javascript"},
            {label: "Tailwind CSS", link: "#tailwind"},
            {label: "Responsive Design", link: "#responsive"},
            {label: "API Integrations", link: "#api-integrations"},
        ]
    },
];

const burger = document.getElementById('burger-container');
burger.append(createBurger(navData));


// navigation
const navigation = document.getElementById('nav-container');
navigation.append(createNavigation(navData));

// search

const search = document.getElementById('search-container');
search.append(createSearch());

// tabs

const tabsData = [
    {
        label: 'Overview',
        content: 'This section provides a quick summary of the application, its main features, and how to get started.',
    },
    {
        label: 'Features',
        content: 'Our app includes responsive layout, dynamic components, accessible design, and customizable themes. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium alias at, aut beatae, deserunt dicta eaque excepturi illum modi quo quos soluta suscipit totam ullam voluptate. Sed, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium alias at, aut beatae, deserunt dicta eaque excepturi illum modi quo quos soluta suscipit totam ullam voluptate. Sed, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium alias at, aut beatae, deserunt dicta eaque excepturi illum modi quo quos soluta suscipit totam ullam voluptate. Sed, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium alias at, aut beatae, deserunt dicta eaque excepturi illum modi quo quos soluta suscipit totam ullam voluptate. Sed, voluptatum.Our app includes responsive layout, dynamic components, accessible design, and customizable themes. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium alias at, aut beatae, deserunt dicta eaque excepturi illum modi quo quos soluta suscipit totam ullam voluptate. Sed, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium alias at, aut beatae, deserunt dicta eaque excepturi illum modi quo quos soluta suscipit totam ullam voluptate. Sed, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium alias at, aut beatae, deserunt dicta eaque excepturi illum modi quo quos soluta suscipit totam ullam voluptate. Sed, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium alias at, aut beatae, deserunt dicta eaque excepturi illum modi quo quos soluta suscipit totam ullam voluptate. Sed, voluptatum. :)',
    },
    {
        label: 'Getting Started',
        content: 'To begin using the app, install the dependencies, run the development server, and explore the UI components.',
    },
    {
        label: 'FAQ',
        content: 'Frequently Asked Questions: How to customize components? How to deploy the app? How to get support?',
    },
];

const tabs = document.getElementById('tab-content');
tabs.append(createTabs(tabsData));
// pagination
const pagination = document.querySelector('#pagination');

// blog
const blog = document.getElementById('articles-container');
blog.appendChild(createBlog());
const paginationComponent = createPagination();
if (paginationComponent && getArticlesFromStorage().length > 0) {
    pagination.append(paginationComponent.element);
}





