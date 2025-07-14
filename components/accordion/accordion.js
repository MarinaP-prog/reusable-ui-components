"use strict"

import {createAccordionItem} from "./accordionItem.js";

export function createAccordion(items) {
    const container = document.createElement('div');
    container.classList.add('accordion');

    items.forEach(({title, content}) => {
        const item = createAccordionItem(title, content); // Data come from accordionData (in index.js); intended for future DB integration
        container.appendChild(item);
    });

    return container;
}