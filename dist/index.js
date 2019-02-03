"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var wheelTimeout,currentEl,currentNav,navMain=document.querySelector(".nav-list"),sectionMain=document.querySelector("#main"),navArray=_toConsumableArray(navMain.children),sectionArray=_toConsumableArray(sectionMain.children),navSuffix="-nav";navMain.addEventListener("click",function(e){if("LI"===e.target.tagName){var t=e.target.innerText.toLowerCase();navArray.forEach(function(e){e.classList.contains("nav-selected")&&e.classList.remove("nav-selected")}),e.target.classList.add("nav-selected"),sectionArray.forEach(function(e){e.classList.contains("main-selected")&&e.classList.remove("main-selected"),e.id===t&&e.classList.add("main-selected")})}}),sectionMain.addEventListener("wheel",function(e){wheelTimeout||(wheelTimeout=setTimeout(function(){wheelTimeout=null,currentEl=document.querySelector(".main-selected"),e.deltaY<0&&currentEl.previousElementSibling?(currentNav=document.getElementById(currentEl.id+navSuffix),currentEl.classList.remove("main-selected"),currentNav.classList.remove("nav-selected"),currentEl.previousElementSibling.classList.add("main-selected"),currentNav.previousElementSibling.classList.add("nav-selected")):0<e.deltaY&&currentEl.nextElementSibling&&(currentNav=document.getElementById(currentEl.id+navSuffix),currentEl.classList.remove("main-selected"),currentNav.classList.remove("nav-selected"),currentEl.nextElementSibling.classList.add("main-selected"),currentNav.nextElementSibling.classList.add("nav-selected"))},100))}),sectionMain.addEventListener("touchstart",handleTouchStart,!1),sectionMain.addEventListener("touchmove",handleTouchMove,!1);var xDown=null,yDown=null;function getTouches(e){return e.touches||e.originalEvent.touches}function handleTouchStart(e){var t=getTouches(e)[0];currentEl=document.querySelector(".main-selected"),xDown=t.clientX,yDown=t.clientY}function handleTouchMove(e){if(xDown&&yDown){var t=e.touches[0].clientX,n=e.touches[0].clientY,r=xDown-t,a=yDown-n;Math.abs(r)>Math.abs(a)&&(0<r&&currentEl.nextElementSibling?(currentNav=document.getElementById(currentEl.id+navSuffix),currentEl.classList.remove("main-selected"),currentNav.classList.remove("nav-selected"),currentEl.nextElementSibling.classList.add("main-selected"),currentNav.nextElementSibling.classList.add("nav-selected")):r<0&&currentEl.previousElementSibling&&(currentNav=document.getElementById(currentEl.id+navSuffix),currentEl.classList.remove("main-selected"),currentNav.classList.remove("nav-selected"),currentEl.previousElementSibling.classList.add("main-selected"),currentNav.previousElementSibling.classList.add("nav-selected"))),yDown=xDown=null}}