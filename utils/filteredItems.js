function displayFilteredArticles(query, articles = []) {
    const q = query.trim().toLowerCase();
    return query
        ? articles.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.author.toLowerCase().includes(q)
        ).reverse()
        : articles.reverse();
}

export {displayFilteredArticles};