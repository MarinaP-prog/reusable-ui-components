import {generateId} from "../../../utils/idGenerator.js";

export function createFormItem(onSubmit) {
    const titleId = `title-${generateId()}`;
    const authorId = `author-${generateId()}`;
    const contentId = `content-${generateId()}`;

    const form = document.createElement('form');
    form.setAttribute('id', 'form');

    const title = document.createElement('input');
    title.setAttribute('placeholder', 'Enter a title');
    title.setAttribute('id', titleId);
    title.classList.add('postTitle');

    const labelForTitle = document.createElement('label');
    labelForTitle.textContent = 'Title:';
    labelForTitle.setAttribute('for', titleId);
    labelForTitle.classList.add('postheading');

    const author = document.createElement('input');
    author.setAttribute('placeholder', 'Enter an author\'s name');
    author.setAttribute('id', authorId);
    author.classList.add('postCategory');

    const labelForAuthor = document.createElement('label');
    labelForAuthor.textContent = 'Author:';
    labelForAuthor.setAttribute('for', authorId);
    labelForAuthor.classList.add('postheading');

    const content = document.createElement('textarea');
    content.setAttribute('placeholder', 'Enter content');
    content.setAttribute('id', contentId);
    content.classList.add('postDescription');

    const labelForDesc = document.createElement('label');
    labelForDesc.textContent = 'Content:';
    labelForDesc.setAttribute('for', contentId);
    labelForDesc.classList.add('postheading');

    const wrapperBtn = document.createElement('div');
    wrapperBtn.classList.add('btn-wrapper');

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Publish';
    submitBtn.classList.add('postSubmitBtn', 'btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Close';
    deleteBtn.setAttribute('data-id', contentId);
    deleteBtn.classList.add('delete-post', 'btn');


    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const now = new Date(Date.now());
        let dateNow = now.toLocaleDateString();

        const articleData = {
            id: generateId(),
            title: title.value.trim(),
            author: author.value.trim(),
            content: content.value.trim(),
            date: dateNow,
        };

        if (typeof onSubmit === 'function') {
            onSubmit(articleData);
        }
        form.reset();
        form.closest('.card').classList.toggle('visible');
    })

    deleteBtn.addEventListener('click', (event) => {
        event.preventDefault();
        form.reset();
        form.closest('.card').classList.toggle('visible');
    })

    wrapperBtn.appendChild(submitBtn);
    wrapperBtn.appendChild(deleteBtn);
    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(content);
    form.appendChild(wrapperBtn);

    return form;
}