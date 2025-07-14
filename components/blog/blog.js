import {createArticleItem} from "./blogItems/articleItem.js";
import {createFormItem} from "./blogItems/formItem.js";
import {saveArticleToStorage, getArticlesFromStorage} from "../../utils/blogUtils.js";
import {displayFilteredArticles} from "../../utils/filteredItems.js";
import {createPagination} from "../pagination/pagination.js";

export function createBlog() {
    const container = document.createElement('div');
    container.classList.add('blog');

    // form
    const containerForm = createFormItem(handleNewArticle);
    containerForm.classList.add('card');
    containerForm.classList.toggle('visible');

    // articles
    const articlesWrapper = document.createElement('div');
    articlesWrapper.id = 'articles-wrapper';

    [...getArticlesFromStorage()].reverse().forEach(article => {
        articlesWrapper.appendChild(createArticleItem(article)); // render again
    })

    const addArticleBtn = document.querySelector('#add-post-btn');
    addArticleBtn.addEventListener('click', () => {
        containerForm.classList.toggle('visible');
    })

    function updatePaginationDisplay() {
        const pagination = document.querySelector('#pagination');
        pagination.innerHTML = '';

        const cards = articlesWrapper.querySelectorAll('.card');
        const hasArticles = [...cards].some(card => !card.matches('form'));

        if (hasArticles) {
            const {element: paginationElement} = createPagination();
            pagination.append(paginationElement);
        }
    }

    function handleNewArticle(article) {
        const articles = getArticlesFromStorage();
        articles.push(article);
        saveArticleToStorage(article);
        articlesWrapper.prepend(createArticleItem(article));
        updatePaginationDisplay();

    }

    // filter
    window.addEventListener("searchQuery", (e) => {
        const query = e.detail;
        const allArticles = getArticlesFromStorage();
        const filtered = displayFilteredArticles(query, allArticles)

        articlesWrapper.innerHTML = '';

        if (filtered.length === 0) {
            document.querySelector('#articles-found').classList.add('visible');
        } else {
            document.querySelector('#articles-found').classList.remove('visible');
            filtered.forEach(article => {
                articlesWrapper.appendChild(createArticleItem(article));
            })
        }
        updatePaginationDisplay();
    })

    const form = document.querySelector('#form-container');
    form.appendChild(containerForm);
    container.appendChild(form);
    container.appendChild(articlesWrapper);

    return container;
}

