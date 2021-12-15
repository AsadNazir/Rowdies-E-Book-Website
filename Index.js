const Menu_open = document.querySelector(`#Open`);
const Menu_Close = document.querySelector(`#Close`);
const Menu = document.querySelector(`.side_menu`);
const Website = document.querySelector(`.website`);
const body = document.querySelector(`#all`)
const ul = document.querySelector(`#side_menu_ul`)
    // let isMenuOpen = false;

//Adding event listeners 

//Openinig Event Listner 
Menu_open.addEventListener(`click`, function() {

    Menu.style.opacity = `1`;
    Menu.style.transform = `translateX(0%) scaleX(1)`;

    // Website.style.opacity = `0.6`;
    // body.style.height = `100vh`;
    // body.style.overflow = `hidden`;


    console.log("here");
})



//Closing event listener
Menu_Close.addEventListener(`click`, Close_func)

//Close Fucntion
function Close_func() {
    Menu.style.opacity = `0`
    Menu.style.transform = `translateX(100%) scaleX(0)`;


    // Website.style.opacity = `1`;
    // body.style.height = `inherit`;
    //body.style.overflow = `visible`;




}



// {margin: 0; height: 100%; overflow: hidden}