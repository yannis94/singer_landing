let countdown_div = document.querySelectorAll(".countdown_box");

// Set the date we're counting down to
var countDownDate = new Date("Jun 20 2020 12:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let week = Math.floor(days / 7);


    countdown_div.forEach(box => {
        if (box.id === "week") {
            if (week < 1) {
                box.style.display = "none";
            }
            else {
                box.innerHTML = `<h3>${week}</h3><p>S</p>`;
            }
        }
        else if (box.id === "day") {
            if (days < 1) {
                box.style.display = "none";
            }
            else {
                box.innerHTML = `<h3>${days}</h3><p>J</p>`;
            }
        }
        else if (box.id === "hours") {
            box.innerHTML = `<h3>${hours}</h3><p>H</p>`;
        }
        else if (box.id === "min") {
            box.innerHTML = `<h3>${minutes}</h3><p>M</p>`;
        }
        else if (box.id === "sec") {
            box.innerHTML = `<h3>${seconds}</h3><p>S</p>`;
        }
    });


    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector("#section_two").innerHTML = "<h2>L'event est en cours !</h2>"
    }
}, 1000);

countdown_div.forEach(e => {
    if (e == countdown_div[countdown_div.length - 1]) {
        e.style.borderRightStyle = "none";
    }
    else {
        e.style.borderRightStyle = "solid";
        e.style.borderColor = "white";
    }
});

let btn_top = document.querySelector("#btn_top-form");

btn_top.addEventListener("click", function () {
    document.querySelector("#section_height").scrollIntoView();
})

let btn_form = document.querySelectorAll(".choice");
let black = "black";
let gray = "lightgray";
let dark_gray = "darkgray";
btn_form.forEach(div => {
    btn = div.querySelector('.choice > div');
    btn.addEventListener("click", function() {
        document.querySelector("#popup_form").style.display = "block";
        if (div.id === "participant") {
            document.querySelector("#inscription").style.backgroundColor = `${black}`;
            document.querySelector("#inscription").style.color = `white`;
            document.querySelector("#inscr_top").style.backgroundColor = `${dark_gray}`;
            document.querySelector("#inscr_top > h3").innerText = "Inscription participant";
            document.querySelector("#form_sub").innerText = "VALIDER VOTRE INSCRIPTION";
            let new_npt_select = document.createElement("input");
            document.querySelector("#form_input").appendChild(new_npt_select);
            new_npt_select.type = "text";
            new_npt_select.placeholder="Test";
            new_npt_select.classList.add("form-control");
            let new_npt_file = document.createElement("input");
            document.querySelector("#form_input").appendChild(new_npt_file);
            new_npt_file.type = "file";
            new_npt_file.placeholder = "Test";
            new_npt_file.classList.add("form-control-file");

            document.querySelector("#inscr_bottom").innerHTML = `
            <p>Participer au Singer Award</p>
            <p>Créer votre collection sur les différents thèmes du défiler et tenter de décrocher le premier prix</p>
            <p>A la clef une machine à coudre Singer dernière génération et surtout votre collection sera créer, exposé et distribuer par nos partenaires</p>
            `;

        }
        else {
            document.querySelector("#inscription").style.backgroundColor = `${gray}`;
            document.querySelector("#inscription").style.color = `${black}`;
            document.querySelector("#inscr_top > h3").innerText = "Inscription Visiteur";
            document.querySelector("#form_sub").innerText = "INSCRIPTION";

            document.querySelector("#inscr_bottom").innerHTML = `
            <p>Participer au Singer Award</p>
            <p>Venez découvrir l'univers de la couture et de la création, voter pour les participants qui seront finaliste.</p>
            <p>Ils présenteront leur création dans un défilé de couture portant sur les dernières tendances de la mode ainsi que des valeurs que prône Singer !</p>
            `;
        }
    });
});

document.querySelector("#popup_close").addEventListener("click", function() {
    document.querySelector("#popup_form").style.display = "none";
});


//Julien carousel 

// le décalage en pixels du carousel
let carouselOffset = 0

// on récupère la largeur du carousel visible
let carouselVisibleWidth = carousel.querySelector(".carousel-visible").getBoundingClientRect().width

// combien d'éléments veut-on par page ?
let carouselNbElements = 4

// la largeur d'un élément sera alors égal à :
let carouselElementWidth = carouselVisibleWidth / carouselNbElements

// le nombre total d'éléments à afficher
let carouselNbTotalElements = carousel.querySelectorAll(".carousel-element").length

// on peut en calculer le nb de pages
let carouselNbPages = carouselNbTotalElements / carouselNbElements

// on met à jour la variable CSS
let root = document.documentElement;
root.style.setProperty('--elementWidth', carouselElementWidth + "px");

// la fonction quand on clique sur "Next"
function goRight() {
    // si on est arrivé au bout, on ne fait rien
    if (carouselOffset - carouselVisibleWidth <= -(carouselNbPages * carouselVisibleWidth))
        return;
    // sinon, on translate
    carouselOffset -= carouselVisibleWidth
    let allElements = carousel.querySelector(".carousel-all-elements")
    allElements.style.transform = `translateX(${carouselOffset}px)`
}

// la fonction quand on clique sur prev
function goLeft() {
    // si on eest arrivé au bout, on ne fait rien
    if (carouselOffset == 0) return;
    carouselOffset += carouselVisibleWidth
    let allElements = carousel.querySelector(".carousel-all-elements")
    allElements.style.transform = `translateX(${carouselOffset}px)`
}