const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
const portfolioLinkItem = document.querySelectorAll('.portfolio_link-item')
const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelector('.nav_items')
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.nav_links-item')
let menuOpen = false;

for ( i = 0; i < menuItems.length ; ++i){
        menuItems[i].onclick = function hideMenu(){
            menuBtn.classList.remove('menu_burger-open');
            navItems.classList.remove('active');
            body.classList.remove('lockscroll')
            menuOpen = false;
        }
    }

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('menu_burger-open');
        navItems.classList.add('active');
        body.classList.add('lockscroll')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('menu_burger-open');
        navItems.classList.remove('active');
        body.classList.remove('lockscroll')
        menuOpen = false;
    }
})
// 
tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
    })
})

portfolioLinkItem.forEach(function (item) {
    item.addEventListener('click', function() {
        let currentLink = item;

        portfolioLinkItem.forEach(function(item) {
            item.classList.remove('active');
        });

        currentLink.classList.add('active');
    });
});