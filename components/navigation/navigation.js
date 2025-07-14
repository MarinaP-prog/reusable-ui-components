"use strict"
import {createNavLinks} from "../../utils/createNavLinks.js";
import {createSearch} from "../search/search.js";

export function createNavigation(items) {
    const container = document.createElement('div');
    container.classList.add('main-nav');

    const navLinks = createNavLinks(items);
    navLinks.classList.add('nav-links');

    const search = createSearch();

    container.appendChild(navLinks);
    container.appendChild(search);
    return container;
}