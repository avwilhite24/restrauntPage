function removeMenu() {
    let leftContent = document.querySelector('#menuContent > div:nth-child(1)');
    let rightContent = document.querySelector('#menuContent > div:nth-child(3)');
    while (leftContent.firstChild){
        leftContent.removeChild(leftContent.firstChild);
    }
    while (rightContent.firstChild){
        rightContent.removeChild(rightContent.firstChild);
    }
}
export {removeMenu};