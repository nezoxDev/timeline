const items = document.querySelectorAll("#timeline li");

const isInViewport = el => {
	const rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 9 &&
		rect.bottom <=
		(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerHeight || document.documentElement.clientWidth)
	);
};

const run = () =>
	items.forEach(item => {
		if (isInViewport(item)) {
			item.classList.add("show");
		}
	});


// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run)