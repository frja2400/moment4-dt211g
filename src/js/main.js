"use strict";

    //Hämta menyknapparna.
    let openBtn = document.getElementById("open-menu");
    let closeBtn = document.getElementById("close-menu");

    //Addera händelselyssnare till båda knapparna.
    openBtn.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);

    //Funktion för klick på menyknapparna. 
    function toggleMenu() {

        let navMenuEl = document.getElementById("nav-menu"); //Hämtar in menyn när den är utfälld.
        let style = window.getComputedStyle(navMenuEl); //Hämtar css för menyn. 


        //Kollar om navigering är synlig eller inte med display och ändrar därefter. 
        if (style.display === "none") {
            navMenuEl.style.display = "block";
        } else {
            navMenuEl.style.display = "none";
        }
    }

    //Händelselyssnare som ser till att desktopnivå syns direkt när fönstret är större än 655px.
    window.addEventListener("resize", function () {
        let navMenuEl = document.getElementById("nav-menu");
        if (window.innerWidth > 655) {
            navMenuEl.style.display = "block"; // Visa menyn för desktop.
        } else {
            navMenuEl.style.display = "none"; // Dölj menyn för mobil.
        }
    });

    //Händelselyssnare för alla länkar i menyn för att se till att den försvinner vid klick.
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            // Kontrollera om skärmbredden är mindre än eller lika med 655px
            if (window.innerWidth <= 655) {
                document.getElementById('nav-menu').style.display = 'none';
            }
        });
    });