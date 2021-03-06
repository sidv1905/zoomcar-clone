/*let leftIndex = 0;

let rightIndex = 6;

showDivs(leftIndex, rightIndex);

function changeLeftAndRight(n) {
    showDivs((leftIndex += n), (rightIndex += n), n);
}

function showDivs(leftIndex, rightIndex, changeby) {
    var allSlides = document.getElementsByClassName("myslide");
    console.log(allSlides.length, "total slides");

    lefter =
        ((leftIndex % allSlides.length) + allSlides.length) % allSlides.length;
    righter =
        ((rightIndex % allSlides.length) + allSlides.length) % allSlides.length;

    console.log(lefter, righter);

    if (lefter < righter) {
        for (let i = lefter; i < righter; i++) {
            allSlides[i].style.display = "block";
        }
        for (let j = righter; j < allSlides.length; j++) {
            allSlides[j].style.display = "none";
        }
    }

    if (lefter > righter) {
        for (let k = lefter; k < allSlides.length; k++) {
            allSlides[k].style.display = "block";
        }
        for (let l = righter; l < lefter; l++) {
            allSlides[l].style.display = "none";
        }
    }

    // make four visible from lefter to righter and rest noen
}*/

//document.getElementById("myDIV").style.transform = "rotate(7deg)";

/*Image slider Logic*/
let imager = document.getElementById("image-contain");

function slidetheimage(amount) {
    imager.style.transform += `translateX(${amount}px)`;
    var style = window.getComputedStyle(imager);
    var matrix = new WebKitCSSMatrix(style.transform);
    console.log(matrix.m41);

    if (matrix.m41 <= -500) {
        imager.style.transform = `translateX(0px)`;
    } else if (matrix.m41 >= 800) {
        imager.style.transform = `translateX(0px)`;
    }
}
/* navbar appear on scroll logic*/
let elem = document.getElementById("forscroll");

window.onscroll = function() {
    showNavigationOnScrol();
};

function showNavigationOnScrol() {
    if (
        document.body.scrollTop > elem.offsetTop ||
        document.documentElement.scrollTop > elem.offsetTop
    ) {
        document.getElementById("scrollmenu").style.top = "0";
    } else {
        document.getElementById("scrollmenu").style.top = "-150px";
    }
}