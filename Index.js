const Menu_open = document.querySelector(`#Open`);
const Menu_Close = document.querySelector(`#Close`);
const Menu = document.querySelector(`.side_menu`);
const Website = document.querySelector(`.website`);
// let isMenuOpen = false;

//Adding event listeners 

//Openinig Event Listner 
Menu_open.addEventListener(`click`, function() {
    Menu.style.transform = `translateX(0%)`;


    Website.style.opacity = `0.6`;
    Website.style.height = `99vh`;
    Website.style.overflow = `hidden`;
    console.log("here");

})



//Closing event listener
Menu_Close.addEventListener(`click`, Close_func)

//Close Fucntion
function Close_func() {
    Menu.style.transform = `translateX(100%)`;

    isMenuOpen = false;

    Website.style.opacity = `1`;
    Website.style.height = `inherit`;
    Website.style.overflow = `visible`;

}


// {margin: 0; height: 100%; overflow: hidden}