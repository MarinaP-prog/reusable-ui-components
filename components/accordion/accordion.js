"use strict"

import {createAccordionItem} from "./accordionItem.js";

/**
 * Vytvoří accordion komponentu.
 * @param {Array} items - Pole objektů ve formátu: { title: string, content: string }
 * @returns {HTMLElement} - Vrací celý accordion zabalený v <div>
 */


export function createAccordion(items) {
    const container = document.createElement('div');
    container.classList.add('accordion');

    items.forEach(({title, content}) => {
        const item = createAccordionItem(title, content);
        container.appendChild(item);
    });

    return container;
}