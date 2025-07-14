export function createTabs(items) {

    const container = document.createElement('div');
    container.classList.add('wrapper')

    const containerWrapper = document.createElement('div');
    containerWrapper.classList.add('tabs');

    const contentWrapper = document.createElement('div');


    items.forEach((item, index) => {
        const tabId = `tab-${index}`;

        // button
        const button = document.createElement('button');
        button.classList.add('tablinks');
        button.textContent = item.label;
        button.setAttribute('data-id', tabId)
        containerWrapper.appendChild(button);

        // Content
        const content = document.createElement('div');
        content.classList.add('tab-content');
        content.setAttribute('data-id', tabId)

        const span = document.createElement('span');
        span.classList.add('topRight');
        span.textContent = '\u2715';
        const title = document.createElement('h3');
        title.textContent = item.label;

        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = item.content;

        content.appendChild(span);
        content.appendChild(title);
        content.appendChild(paragraphElement);
        contentWrapper.appendChild(content);

        button.addEventListener('click', () => {
            document.querySelectorAll('.tablinks').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('visible');
            });

            button.classList.add('active');
            content.classList.add('visible');
        });

        span.addEventListener('click', () => {
            content.classList.remove('visible');
        })
    });
    container.appendChild(containerWrapper);
    container.appendChild(contentWrapper);

    // Show the first tab automatically
    const firstBtn = containerWrapper.querySelector('.tablinks');
    const firstContent = contentWrapper.querySelector('.tab-content');

    if (firstBtn && firstContent) {
        firstBtn.classList.add('active');
        firstContent.classList.add('visible');
    }
    return container;
}