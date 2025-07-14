function displayFilteredArticles(query, articles = []) {

    let filtered = articles;
    const q = query.toLowerCase();

    if (query.trim() !== '') {
        filtered = articles.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.author.toLowerCase().includes(q)
        );
    }
    return filtered.reverse();
}

export {displayFilteredArticles};