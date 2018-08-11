let menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", toggleBtnClass, false);

function toggleBtnClass(){
	menuBtn.classList.toggle("active");
}