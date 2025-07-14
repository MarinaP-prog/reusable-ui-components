const createNavLinks = (items) => {
    const navLinks = document.createElement('div');

    const linkHome = document.createElement('a');
    linkHome.href = '#';
    linkHome.textContent = 'Reusable UI Components';
    linkHome.classList.add('active');

    navLinks.appendChild(linkHome);

    items.forEach(item => {
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.label;

        if (item.children && item.children.length > 0) {

            const wrapper = document.createElement('div');
            wrapper.classList.add('dropdown-wrapper');

            const img = document.createElement('img');
            img.setAttribute('src', '../images/chevron-right.png');
            img.classList.add('arrow');

            wrapper.appendChild(img);

            wrapper.appendChild(link); // add the main link with children

            const dropdown = document.createElement('div');
            dropdown.classList.add('dropdown');

            item.children.forEach(child => {
                const childrenLink = document.createElement('a');
                childrenLink.href = child.link;
                childrenLink.textContent = child.label;
                dropdown.appendChild(childrenLink);
            });

            link.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.toggle('open');
            });

            wrapper.appendChild(dropdown);
            navLinks.appendChild(wrapper);
        } else {
            navLinks.appendChild(link);
        }


    });


    return navLinks;
}

export {createNavLinks}