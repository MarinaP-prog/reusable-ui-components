"use strict"

function createAccordionItem(title, content) {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item');

    // header
    const headerBtn = document.createElement('button');
    headerBtn.classList.add('accordion-header');
    headerBtn.textContent = title;
    headerBtn.setAttribute('aria-expanded', 'false');


    // body - content
    const body = document.createElement('div');
    body.classList.add('accordion-content');

    const p = document.createElement('p');
    p.textContent = content;
    body.appendChild(p);

    accordionItem.appendChild(headerBtn);
    accordionItem.appendChild(body);
    headerBtn.addEventListener('click', () => {
        // accessibility
        const isOpen = headerBtn.classList.toggle('open'); // returns true/false
        headerBtn.setAttribute('aria-expanded', String(isOpen)); // String(isOpen) changes boolean to string

        const panel = headerBtn.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
    return accordionItem;
}

export {createAccordionItem}