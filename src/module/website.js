import '../style.css';
import loadHome from './home';
import loadAbout from './about';
import loadMenu from './menu';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Good Bites!'

    header.appendChild(restaurantName);
    return header;
}

function initaliseSite() {
    const content = document.querySelector('#content');
    //load header
    content.appendChild(createHeader());

    //load nav buttons
    const nav = document.createElement('nav');
    content.appendChild(nav);

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    nav.appendChild(homeButton);
    homeButton.addEventListener('click', () => {
        mainContent.textContent = '';
        mainContent.appendChild(loadHome());
    });

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    nav.appendChild(menuButton);
    menuButton.addEventListener('click', () => {
        mainContent.textContent = '';
        mainContent.appendChild(loadMenu());
    });
    
    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'About';
    nav.appendChild(aboutButton);
    aboutButton.addEventListener('click', () => {
        mainContent.textContent = '';
        mainContent.appendChild(loadAbout());
    });

    //load home page content first
    const mainContent = document.createElement('main');
    mainContent.appendChild(loadHome());
    content.appendChild(mainContent);
    
}

export default initaliseSite