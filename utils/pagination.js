function shouldShowPage(page, currentPage, totalPages) {
    const delta = 1; // number of buttons to show around the current one

    return (
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - delta && page <= currentPage + delta)
    );
}

export {shouldShowPage}