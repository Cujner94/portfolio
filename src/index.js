const navMain = document.querySelector('.nav-list');
const sectionMain = document.querySelector('#main');
let navArray = [...navMain.children];
let sectionArray = [...sectionMain.children];

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
		})
		
		sectionArray.forEach((e) => {
			if (e.id === selector) {
				e.classList.add('main-selected');
			}
		})
	}
})