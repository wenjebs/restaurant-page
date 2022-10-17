function loadMenu() {
    const loadMenu = document.createElement('div');
    loadMenu.classList.add('menu');
    
    
    const salmon = document.createElement('img');
    salmon.src = 'https://www.goodbites.com.sg/images/1-5XgpVE.png';
    const salmonBox = document.createElement('figure');
    const salmonCap = document.createElement('figcaption');
    salmonCap.textContent = 'yummy sammies';

    salmonBox.appendChild(salmon)
    salmonBox.appendChild(salmonCap);

    const pork = document.createElement('img');
    pork.src = 'https://www.goodbites.com.sg/images/3-1vsgtj.png';
    const porkBox = document.createElement('figure');
    const porkCap = document.createElement('figcaption');
    porkCap.textContent = 'yummy porks';

    porkBox.appendChild(pork);
    porkBox.appendChild(porkCap);

    loadMenu.appendChild(salmonBox);
    loadMenu.appendChild(porkBox);

    return loadMenu
};

export default loadMenu;