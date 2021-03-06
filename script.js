const cookieBanner = document.querySelector(".cookie-banner");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
	cookieBanner.classList.remove("active");
	localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
	if (!localStorage.getItem("cookieBannerDisplayed")) {
		cookieBanner.classList.add("active");
	}
}, 1000);
