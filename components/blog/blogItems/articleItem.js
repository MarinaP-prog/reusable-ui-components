export function createArticleItem({title, author, content, date}) {
    const shortDesc = content.slice(0, 100);
    const isTruncated = content.length > 100;

    const article = document.createElement('article');
    article.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const span = document.createElement('div');
    span.textContent = author;

    const p = document.createElement('p');
    p.textContent = `${shortDesc}...`;
    p.classList.add('article-content');

    const dateSpan = document.createElement('span');
    dateSpan.textContent = date;

    // read more
    const readMore = document.createElement('button');
    readMore.textContent = 'Read more';
    readMore.classList.add('read-more');

    if (isTruncated) {
        readMore.addEventListener('click', () => {
            const isExpanded = readMore.textContent === 'Read more';
            p.classList.toggle('expanded', isExpanded);
            p.textContent = isExpanded ? content : `${shortDesc}...`;
            readMore.textContent = isExpanded ? 'Read less' : 'Read more';
        });
    }


    article.appendChild(h2);
    article.appendChild(span);
    article.appendChild(dateSpan);
    article.appendChild(p);
    article.appendChild(readMore);

    return article;
}