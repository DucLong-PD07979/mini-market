const createElementApendChildren = (idElement) => {
    let portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', idElement);
    document.body.appendChild(portalRoot)
    return portalRoot;
};

export { createElementApendChildren };