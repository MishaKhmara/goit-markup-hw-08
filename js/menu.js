(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();





// $(document).ready(function(){
// 	// menu click event
// 	$('.menuBtn').click(function() {
// 		$(this).toggleClass('act');
// 			if($(this).hasClass('act')) {
// 				$('.mainMenu').addClass('act');
// 			}
// 			else {
// 				$('.mainMenu').removeClass('act');
// 			}
// 	});
// });