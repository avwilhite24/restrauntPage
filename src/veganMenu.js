import {removeMenu} from './removeMenuContent.js';
import {generateMenu} from './generateMenu.js';

function generateVegMenu() {
    removeMenu();
    let menu = {
        "Caesar Salad" : "$7.50",
        "Brocoli" : "$5.50",
        "Brussel Sprouts" : "$5.50",
        "Green Tomatoes" : "$6.00",
        "Banana" : "$2.00",
        "Mushrooms" : "$6.00",
    };
    generateMenu(menu);
}
export {generateVegMenu};