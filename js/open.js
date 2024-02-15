const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navLinks = document.querySelectorAll(".nav__link")

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtn.classList.add("nav-button--active")
		document.querySelector("body").style.overflowY = "hidden"
	} else {
		navBtn.classList.remove("nav-button--active")
		document.querySelector("body").style.overflowY = "auto"
	}
}

for(let i of navLinks) {
	i.addEventListener("click", () => {
		nav.classList.remove('open')
		navBtn.classList.remove("nav-button--active")
		document.querySelector("body").style.overflowY = "auto"
	})
}