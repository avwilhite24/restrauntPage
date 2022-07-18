import {removeMenu} from './removeMenuContent.js';
import {generateMenu} from './generateMenu.js';

function generateMeatMenu() {
    removeMenu();
    let menu = {
        "Hamburger" : "$7.50",
        "Cheeseburger" : "$8.50",
        "4oz Sirloin" : "$9.50",
        "Ribeye" : "$10.50",
        "BLT" : "$8.00",
        "Patty Melt" : "$8.00",
        "PB & J" : "$5.00",
        "Grilled Cheese" : "$5.00",
        "Chicken Noodle Soup" : "$7.00",
        "Sausage and Bacon" : "$8.50"
    };

    generateMenu(menu);
}
export {generateMeatMenu};