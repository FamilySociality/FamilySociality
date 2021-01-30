const menu = document.querySelecto('#mobile-menu');
const menulinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function(){
    menu.classlist.toggle('is-active');
    menulinks.classlist.toggle('active');
})