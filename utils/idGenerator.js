const generateId = () => {
    const lastId = localStorage.getItem('lastId');
    const newId = lastId ? parseInt(lastId, 10) + 1 : 0;
    localStorage.setItem('lastId', JSON.stringify(newId));
    return newId;
};

export {generateId};