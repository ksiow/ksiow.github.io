
//navbar fixed
window.onscroll=function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed'); 
    }
}

//hamburger
var hamburgerButton = document.getElementById('hamburger');
var navMenu = document.querySelector('#nav-menu');

hamburgerButton.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('hidden');
});



//tab-list
let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
let panels = document.querySelectorAll(".tab-panel");

indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px';

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls");

        indicator.style.width = tab.getBoundingClientRect().width + 'px';
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px';

        panels.forEach(panel => {
            let panelId = panel.getAttribute("id");
            if (tabTarget === panelId) {
                panel.style.opacity = "1";
                panel.style.visibility = "visible";
            } else {
                panel.style.opacity = "0";
                panel.style.visibility = "hidden";
            }
        });
    });
});

// tab-list
// let tabs = document.querySelectorAll(".tab");
// let indicator = document.querySelector(".indicator");
// let panels = document.querySelectorAll(".tab-panel");

// indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';
// indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px';

// tabs.forEach(tab =>{
//     tab.addEventListener("click", ()=>{
//         let tabTarget = tab.getAttribute("aria-controls");

//         indicator.style.width = tab.getBoundingClientRect().width + 'px';
//         indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px';

//         panels.forEach(panel =>{
//             let panelId = panel.getAttribute("id");
//             if (tabTarget === panelId) {
//                 panel.classList.add("visible", "opacity-100");
//                 panel.classList.remove("invisible", "opacity-0");
//             } else {
//                 panel.classList.remove("visible", "opacity-100");
//                 panel.classList.add("invisible", "opacity-0");
//             }
//         })
//     })
// })