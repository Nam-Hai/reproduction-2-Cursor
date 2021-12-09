const cursorContainer = document.querySelector('.cursor-container');
const cursorWrapper = document.querySelector('.cursor-wrapper');
const cursorText = document.querySelector('#textWrapper');
const hero = document.querySelector('.hero');
const cursorImg = document.querySelector("#cursorImage")

var posX = 0;
var posY = 0;
var clientX = 0;
var clientY = 0;
const coef = 0.25


document.querySelector("body").addEventListener("mousemove", mouseActionner);
hero.addEventListener("mouseenter", mouseEnterHeroActionner);
hero.addEventListener("mouseleave", mouseLeaveHeroActionner);


function mouseActionner(event) {
    
    clientX = event.clientX;
    clientY = event.clientY;
};


function functionCursor() {
    
    posX = (clientX - posX)*coef + posX;
    posY = (clientY - posY)*coef + posY;
    cursorContainer.style.transform = "translate("+ posX+"px, "+ posY +"px)";
    setTimeout(()=> {
        functionCursor()
    }, 50)
}


functionCursor()


function mouseEnterHeroActionner() {
    cursorText.style.opacity = "0";
    cursorText.style.height = "6rem";
    cursorText.style.width = "6rem";
    
    cursorImg.style.opacity = "1";
    cursorWrapper.classList.toggle("mix-blend");
}
function mouseLeaveHeroActionner() {
    cursorText.style.height = "10rem";
    cursorText.style.width = "10rem";  
    cursorText.style.opacity = "1";
    cursorImg.style.opacity = "0";
    cursorText.style.transitionDelay = "200ms"

    setTimeout(()=> {
        cursorWrapper.classList.toggle("mix-blend");

        cursorText.style.transitionDelay = "0ms"

    }, 200)

}