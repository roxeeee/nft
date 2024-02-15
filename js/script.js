const faqs = document.querySelectorAll(".faq__questions");

faqs.forEach(faq => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("active");
	})
})