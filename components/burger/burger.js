"use strict"
import {createNavLinks} from "../../utils/createNavLinks.js";

export function createBurger(items) {
    const container = document.createElement('div');
    container.classList.add('burger-nav');

    const links = createNavLinks(items);
    links.classList.add('links', 'hidden'); // the burger menu is closed

    const button = document.createElement('button');
    button.classList.add('burger-button');


    // svg
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 448 512');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');


    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z')

    svg.appendChild(path);
    button.appendChild(svg);

    container.appendChild(button);
    container.appendChild(links);

    button.addEventListener('click', () => {
        links.classList.toggle('hidden');
    })


    setupDropdownLogic(container);
    return container;

}

function setupDropdownLogic(container) {
    const wrappers = container.querySelectorAll('.dropdown-wrapper');

    wrappers.forEach(wrapper => {
        const trigger = wrapper.querySelector('a');
        const dropdown = wrapper.querySelector('.dropdown');

        trigger.addEventListener('click', e => {
            e.stopPropagation();

            // Close other dropdowns in this container
            wrappers.forEach(w => {
                const otherDropdown = w.querySelector('.dropdown');
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.add('hidden');
                }
            });

            // Toggle actual
            dropdown.classList.toggle('hidden');
        });
    });

    // do not use global document – catch clicks only in the doc and container
    container.ownerDocument.addEventListener('click', e => {
        if (!container.contains(e.target)) {
            container.querySelectorAll('.dropdown').forEach(d => d.classList.add('hidden'));
        }
    });

    // closes the burger menu, if clicked on a link that not in the dropdown
    container.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (!link.closest('.dropdown-wrapper')) {
                const links = container.querySelector('.links');
                if (links) links.classList.add('hidden');
            }
        });
    });
}