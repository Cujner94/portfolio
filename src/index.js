const navMain = document.querySelector('.nav-list');
const sectionMain = document.querySelector('#main');
let navArray = [...navMain.children];
let sectionArray = [...sectionMain.children];
let wheelTimeout;
let currentEl;
let currentNav;
let navSuffix = '-nav';

// Manage navigation
navMain.addEventListener('click', (e) => {
	if (e.target.tagName === "LI") {
		
		let selector = e.target.innerText.toLowerCase();
	
		navArray.forEach((e) => {
			if (e.classList.contains('nav-selected')) {
				e.classList.remove('nav-selected');
			}
		});
		e.target.classList.add('nav-selected');
		
		sectionArray.forEach((e) => {
			if (e.classList.contains('main-selected')) {
				e.classList.remove('main-selected');
			}
			if (e.id === selector) {
				e.classList.add('main-selected');
			}
		})	
	}
})

// HANDLE SCROLLING IN BROWSER
sectionMain.addEventListener('wheel', (e) => {
	if (!wheelTimeout) {
		wheelTimeout = setTimeout(() => {
			wheelTimeout = null;
			
			currentEl = document.querySelector('.main-selected');
			if (e.deltaY < 0 && currentEl.previousElementSibling) {
				
				currentNav = document.getElementById(currentEl.id+navSuffix);
				
				currentEl.classList.remove('main-selected');
				currentNav.classList.remove('nav-selected');
				currentEl.previousElementSibling.classList.add('main-selected');
				currentNav.previousElementSibling.classList.add('nav-selected');
			}
			else if(e.deltaY > 0 && currentEl.nextElementSibling){
				
				currentNav = document.getElementById(currentEl.id+navSuffix);
				
				currentEl.classList.remove('main-selected');
				currentNav.classList.remove('nav-selected');
				currentEl.nextElementSibling.classList.add('main-selected');
				currentNav.nextElementSibling.classList.add('nav-selected');
			}
		}, 100);
	}
});

// HANDLE SWIPING ON MOBILE

sectionMain.addEventListener('touchstart', handleTouchStart, false);        
sectionMain.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;                                                        
let yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];   
		currentEl = document.querySelector('.main-selected');                                   
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 && currentEl.nextElementSibling) {
					currentNav = document.getElementById(currentEl.id+navSuffix);
				
					currentEl.classList.remove('main-selected');
					currentNav.classList.remove('nav-selected');
					currentEl.nextElementSibling.classList.add('main-selected');
					currentNav.nextElementSibling.classList.add('nav-selected');
        } else if(xDiff < 0 && currentEl.previousElementSibling) {
					currentNav = document.getElementById(currentEl.id+navSuffix);	
				
					currentEl.classList.remove('main-selected');
					currentNav.classList.remove('nav-selected');
					currentEl.previousElementSibling.classList.add('main-selected');
					currentNav.previousElementSibling.classList.add('nav-selected');
        }                       
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};