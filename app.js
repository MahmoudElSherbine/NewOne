/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
 * 
*/
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
//select sections.
const sections = document.getElementsByTagName("section");
let list = document.getElementById("navbar__list");
//creat documentFragment
let df = new DocumentFragment();
for (const  section of sections){
    //creat list items
    const LiElement = document.createElement("li");
    //link list items with sections 
LiElement.innerHTML= `<a href="#${section.id}" class= "menu__link" > ${section.dataset.nav} </a>`
// Event listener to make scrolling smooth
LiElement.addEventListener("click",(event) => {
    event.preventDefault();
    section.scrollIntoView({behavior:"smooth"});
});
df.append(LiElement);  
list.append(df); 
};



// Add class "active" to section when near top of viewport
window.addEventListener('scroll', secInViewPort);
function secInViewPort(){
    for (const section of sections){
        //Determine section position
        const sectionPosition = section.getBoundingClientRect();
        // Determine items to highlight it while their section is active
        const items = document.querySelector(`a[href="#${section.id}"]`);
        if (sectionPosition.top > -50 && sectionPosition.top <= 400 ){
            section.classList.add('activeClass');
           items.classList.add('activeitem');
        }
        else {
            section.classList.remove('activeClass');
           items.classList.remove('activeitem');
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active               







