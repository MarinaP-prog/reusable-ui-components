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

    function handleNewArticle(article) {
        const articles = getArticlesFromStorage();
        articles.push(article);
        saveArticleToStorage(article);
        articlesWrapper.prepend(createArticleItem(article));

    }

    // filter
    window.addEventListener("searchQuery", (e) => {
        const query = e.detail;
        const allArticles = getArticlesFromStorage();
        const filtered = displayFilteredArticles(query, allArticles)

        articlesWrapper.innerHTML = '';
        filtered.forEach(article => {
            articlesWrapper.appendChild(createArticleItem(article));
        })

        const pagination = document.querySelector('#pagination');
        pagination.innerHTML = '';

        const {element: paginationElement} = createPagination(); // new pagination
        pagination.append(paginationElement);
    })

    const form = document.querySelector('#form-container');
    form.appendChild(containerForm);
    container.appendChild(form);
    container.appendChild(articlesWrapper);

    return container;
}

