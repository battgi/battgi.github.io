window.onload = function () {
    toggleMenuButton();
    sendMail();
}

function toggleMenuButton() {
    "use strict";
    let toggles = document.querySelectorAll(".menuButtonAnimation");
    for (let i = toggles.length - 1; i >= 0; i--) {
        let toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        let sidenav = document.getElementById('mySidenav'),
            pushed = document.getElementsByClassName('pushMe'),
            brand = document.getElementsByClassName('brand')[0];
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            if (this.classList.contains("is-active") === true) {
                this.classList.remove("is-active");
                sidenav.classList.remove('sidenavOpen');
                for (let i = 0; i < pushed.length; i++) {
                    pushed[i].classList.remove('pushed');
                }
                sidenav.classList.add('sidenavClosed');
                brand.classList.remove('removeBrand')
                console.log("Sidenav: closed");
            } else {
                this.classList.add("is-active");
                brand.classList.add('removeBrand');
                sidenav.classList.remove('sidenavClosed');
                sidenav.classList.add('sidenavOpen');
                for (let i = 0; i < pushed.length; i++) {
                    pushed[i].classList.add('pushed');
                }
                console.log("Sidenav: open");
            };
        });
    }
};

function sendMail(){
    document.getElementById("mailForm").onclick = function() {
    var wnd = window.open("https://formspree.io/thanks?next=https%3A%2F%2Fbattgi.github.io%2FmyProjects%2FprivateProjects%2Fsikkerhetinnlandet%2Findex.html");
    setTimeout(function() {
      wnd.close();
    }, 2000);
    return false;
  };
}