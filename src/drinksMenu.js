import {removeMenu} from './removeMenuContent.js';
import {generateMenu} from './generateMenu.js';

function generateDrinkMenu() {
    removeMenu();
    let menu = {
        "Coke" : "$2.50",
        "Pepsi" : "$2.50",
        "Sprite" : "$2.50",
        "Unsweetened Tea" : "$2.00",
        "Sweet Tea" : "$2.00",
        "Lemonade" : "$3.00",
        "Milk" : "$2.00",
        "Orange Juice" : "$2.00"
    };

    generateMenu(menu);
}
export {generateDrinkMenu};