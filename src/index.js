import {loadPage} from './initialPageLoad.js';
import { generateMeatMenu } from './meatMenu.js';
import { generateVegMenu } from './veganMenu.js';
import { generateDrinkMenu } from './drinksMenu.js';
import './style.css';

loadPage();

//logic for menu selection

let meatMenuSelector = document.querySelector("#banner > div > div :first-child");
let veganMenuSelector = document.querySelector("#banner > div > div :nth-child(2)");
let drinkMenuSelector = document.querySelector("#banner > div > div :nth-child(3)");
meatMenuSelector.addEventListener('click', () => {
    generateMeatMenu();
    meatMenuSelector.classList.add("menuTabOn");
    veganMenuSelector.classList.remove("menuTabOn");
    drinkMenuSelector.classList.remove("menuTabOn");
})
veganMenuSelector.addEventListener('click', () => {
    generateVegMenu();
    meatMenuSelector.classList.remove("menuTabOn");
    veganMenuSelector.classList.add("menuTabOn");
    drinkMenuSelector.classList.remove("menuTabOn");
})
drinkMenuSelector.addEventListener('click', () => {
    generateDrinkMenu();
    meatMenuSelector.classList.remove("menuTabOn");
    veganMenuSelector.classList.remove("menuTabOn");
    drinkMenuSelector.classList.add("menuTabOn");
})