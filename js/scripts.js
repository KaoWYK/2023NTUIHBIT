/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/* 切換語言 */
var curLang = "zh"
window.onload = function init() {
    var enElements = document.querySelectorAll('[lang="en"]');
    for (var i = 0; i < enElements.length; i++) {
        enElements[i].style.display = 'none';
    }
};
function toggleLanguage() {
    var langElements = document.querySelectorAll('[lang]');
    for (var i = 0; i < langElements.length; i++) {
        if (langElements[i].lang === curLang) {
            langElements[i].style.display = 'none';
        } else {
            langElements[i].style.display = '';
        }
    }
    curLang = (curLang == 'zh') ? 'en' : 'zh'
};

/* 技術分析：切換日期 */
function filterSchedule(selectedValue) {
    // 隱藏所有的賽程區塊
    var scheduleDivs = document.getElementsByClassName("schedule-div");
    for (var i = 0; i < scheduleDivs.length; i++) {
        scheduleDivs[i].style.display = "none";
    }

    // 顯示符合所選日期的賽程區塊
    if (selectedValue === "all") {
        for (var i = 0; i < scheduleDivs.length; i++) {
            scheduleDivs[i].style.display = "block";
        }
    } else {
        var selectedDiv = document.getElementById(selectedValue);
        if (selectedDiv) {
            selectedDiv.style.display = "block";
        }
    }
}

function filterByGroup(selectedGroup) {
    var scheduleRows = document.querySelectorAll(".schedule-div tbody tr");

    for (var i = 0; i < scheduleRows.length; i++) {
        var row = scheduleRows[i];
        var groupCell = row.cells[3].innerText;

        if (selectedGroup === "all" || groupCell === selectedGroup) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    }
}

// function filterByTeam(selectedTeam) {
//     var scheduleRows = document.querySelectorAll(".schedule-div tbody tr");

//     for (var i = 0; i < scheduleRows.length; i++) {
//         var row = scheduleRows[i];
//         var teamCell1 = row.cells[5].innerText;
//         var teamCell2 = row.cells[6].innerText;

//         if (selectedTeam === "all" || teamCell1 === selectedTeam || teamCell2 === selectedTeam) {
//             row.style.display = "table-row";
//         } else {
//             row.style.display = "none";
//         }
//     }
// }
