"use strict"

export function createSearch() {
    const container = document.createElement('div');


// Search
    const navSearch = document.createElement('div');
    navSearch.classList.add('nav-search');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search...';
    input.classList.add('item');
    input.setAttribute('data-id', 'searchInput');

    const searchBtn = document.createElement('button');
    searchBtn.setAttribute('data-id', 'searchButton');
    searchBtn.classList.add('item');
    searchBtn.textContent = 'Search';
    navSearch.appendChild(input);
    navSearch.appendChild(searchBtn);

    input.addEventListener("keyup", (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    })
    searchBtn.addEventListener("click", () => {
        handleSearch();
    });

    function handleSearch() {
        const query = input.value.trim();

        window.dispatchEvent(new CustomEvent("searchQuery", {
            detail: query
        }));
        input.value = '';
    }

    container.appendChild(navSearch);

    return navSearch;
}