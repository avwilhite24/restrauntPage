function generateMenu(menu){
    let menuItems = Object.keys(menu);

    let leftContainer = document.querySelector("#menuContent > div:nth-child(1)");
    let rightContainer = document.querySelector("#menuContent > div:nth-child(3)");


    let count = 0;
    menuItems.forEach(element => {

        let item = document.createElement('p');
        item.innerText = element;
        item.style.maxWidth = "80%";
        let cost = document.createElement('p');
        cost.innerText = menu[element];
        cost.style.textAlign = "right";

        if (count < menuItems.length/2){
            leftContainer.appendChild(item);
            leftContainer.appendChild(cost);
        } else {
            rightContainer.appendChild(item);
            rightContainer.appendChild(cost);
        } //This Conditional Splits The Items Equally Across Left and Right Side

        count++;
    });
}
export {generateMenu};