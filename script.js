
//slide animation js logic
let slideIndexes = [1, 1];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndexes[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName("mySlides" + (no + 1));
    let dots = document.getElementsByClassName("dot" + (no + 1));
    if (n > slides.length) { slideIndexes[no] = 1; }
    if (n < 1) { slideIndexes[no] = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexes[no] - 1].style.display = "block";
    if(dots.length > 0) {
        dots[slideIndexes[no] - 1].className += " active";
    }
}


//portfolio web -> skill, exp, edu toggle
function toggleSection(id) {
    var sections = document.getElementsByClassName('section-content');
    var titles = document.getElementsByClassName('section-title');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
        titles[i].classList.remove('active');
    }

    var section = document.getElementById(id);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        document.querySelector(`.section-title[onclick="toggleSection('${id}')"]`).classList.add('active');
    }
}
