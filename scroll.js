const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// показать кнопку, когда пользователь прокрутил страницу вниз
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// переместить пользователя вверх страницы при клике на кнопку
scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});