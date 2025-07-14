function saveArticleToStorage(article) {
    const articles = getArticlesFromStorage();
    articles.push(article); // add data to local storage
    localStorage.setItem('posts', JSON.stringify(articles));
}

function getArticlesFromStorage() {
    const blog_articles = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
    return blog_articles;
}

function clearArticlesFromStorage() {
    localStorage.removeItem('posts');
}

export {saveArticleToStorage, getArticlesFromStorage, clearArticlesFromStorage}