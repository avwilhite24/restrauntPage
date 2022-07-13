
function loadPage() {

    let navBarContainer = document.querySelector('#navContainer');

    let tabsDict = {
        'menu': 'linkToMenu',
        'catering': 'linkToCatering',
        'about': 'linkToAbout',
        'contact us': 'linkToContactUs'
    };


    let tabKeys = Object.keys(tabsDict);

    tabKeys.forEach(element => {
        let tabContainer = document.createElement('div');
        let tabText = document.createElement('h2');
        tabText.innerText = element.toUpperCase();
        tabContainer.classList.add("tabContainer");
        tabContainer.appendChild(tabText);
        navBarContainer.appendChild(tabContainer)
    });

};
export {loadPage};