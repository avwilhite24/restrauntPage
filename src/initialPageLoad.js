import {generateMeatMenu} from './meatMenu.js';

function loadNavBar() {
    let navBarContainer = document.querySelector('#navContainer');
    let logoContainer = document.createElement('div');
    let tabsContainer = document.createElement('div');

    navBarContainer.appendChild(logoContainer);
    navBarContainer.appendChild(tabsContainer);

    //Generating Logo
    let logo = document.createElement('h2');
    logo.innerText = "Logo Here";
    logoContainer.appendChild(logo);

    //Generating Tabs
    let tabsDict = {
        'menu': 'linkToMenu',
        'catering': 'linkToCatering',
        'about': 'linkToAbout',
        'contact us': 'linkToContactUs'
    };
    let tabKeys = Object.keys(tabsDict);
    tabKeys.forEach(element => {
        let tabContainer = document.createElement('div');
        let tabText = document.createElement('h3');
        tabText.innerText = element.toUpperCase();
        tabContainer.classList.add("tabContainer");
        tabContainer.appendChild(tabText);
        tabsContainer.appendChild(tabContainer)
    });
}

function loadBlankMenu() {
    let bannerContainer = document.querySelector('#banner');
    let menuContainer = document.createElement('div');

    let menuTabsContainer = document.createElement('div');
    menuTabsContainer.id = "menuNav";
    let menuContentContainer = document.createElement('div');
    menuContentContainer.id = "menuContent";

    //Constructing Menu Tabs
    let menuTabs = ['Meat', 'Vegan', 'Drinks'];
    menuTabs.forEach(element => {
        let menuTabContainer = document.createElement('div');
        let menuTabText = document.createElement('h4');
        menuTabText.innerText = element;

        menuTabContainer.style.cssText = "display: flex; justify-content: center; align-items: center; padding-left: 0.625vw; padding-right: 0.625vw; height: 100%";
        menuTabContainer.appendChild(menuTabText);

        menuTabsContainer.appendChild(menuTabContainer);
    });

    //Construct Default LayOut Of MenuConentContainer
    let leftContentContainer = document.createElement('div');
    leftContentContainer.classList.add('contentSide');
    let rightContentContainer = document.createElement('div');
    rightContentContainer.classList.add('contentSide');
    let separator = document.createElement('div');
    separator.style.cssText = "background-color: white; width: 1px; opacity: 80%; margin-top: 1px;";

    menuContentContainer.appendChild(leftContentContainer);
    menuContentContainer.appendChild(separator);
    menuContentContainer.appendChild(rightContentContainer);
    menuContainer.appendChild(menuTabsContainer);
    menuContainer.appendChild(menuContentContainer);
    bannerContainer.appendChild(menuContainer);
}

function loadPage() {

    loadNavBar();
    loadBlankMenu();
    generateMeatMenu();
};
export {loadPage};