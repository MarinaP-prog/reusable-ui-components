"use strict"
import {shouldShowPage} from "../../utils/pagination.js";

const cardsPerPage = 3;

export function createPagination() {
    const articleContainer = document.querySelector('#articles-container');

    const cards = Array.from(articleContainer.getElementsByClassName('card')).filter(card => !card.matches('form'));

    const wrapper = document.createElement('div');

    const prevBtn = document.createElement('a');
    prevBtn.textContent = 'Prev';
    prevBtn.href = '#';
    prevBtn.setAttribute('id', 'prev');

    const nextBtn = document.createElement('a');
    nextBtn.textContent = 'Next';
    nextBtn.href = '#';
    nextBtn.setAttribute('id', 'next');

    const paginationWrapper = document.createElement('div');
    paginationWrapper.classList.add('wrapperPagination');
    paginationWrapper.setAttribute('id', 'paginationBtns');

    const pageNumbers = document.createElement('p');
    pageNumbers.setAttribute('id', 'page-numbers');

    wrapper.appendChild(prevBtn);
    wrapper.appendChild(paginationWrapper);
    wrapper.appendChild(nextBtn);
    wrapper.appendChild(pageNumbers);


    const totalPages = Math.ceil(cards.length / cardsPerPage);
    let currentPage = 1;

    function displayPage(page) {
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        cards.forEach((card, index) => {
            card.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
        });
    }

    function renderPagination() { // updatePagination
        paginationWrapper.innerHTML = '';
        pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;

        for (let i = 1; i <= totalPages; i++) {
            if (!shouldShowPage(i, currentPage, totalPages)) {
                if ((i === 2 && currentPage > 3) || (i === totalPages - 1 && currentPage < totalPages - 2)) {
                    const dots = document.createElement('span');
                    dots.textContent = '...';
                    paginationWrapper.appendChild(dots);
                }
                continue;
            }
            const link = document.createElement('a');
            link.textContent = `${i}`;
            link.classList.add('page-link');
            link.setAttribute('data-page', i);
            link.href = '#';

            if (i === currentPage) {
                link.classList.add('active');
            }

            link.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentPage !== i) {
                    currentPage = i;
                    displayPage(currentPage);
                    renderPagination();
                }
            });

            paginationWrapper.appendChild(link);
        }

        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
            renderPagination();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
            renderPagination();
        }
    });

    // initialize
    displayPage(currentPage);
    renderPagination();

    return {
        element: wrapper,
        updatePagination: renderPagination // Exposed for external calls, such as when new content is added dynamically
    }
}