document.querySelector('.header-burger').onclick = function() {
    document.querySelector('.header-burger').classList.toggle("active-burger");
    document.querySelector('.header_sm_menu').classList.toggle("active-burger");
};