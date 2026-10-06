//nav  look good when hover
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');


window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;


        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {

            current = section.getAttribute('id');

        }

    });


    navLinks.forEach(link => {

        link.classList.remove('active');


        if (link.getAttribute('href') === `#${current}`) {

            link.classList.add('active');

        }

    });

});



// for picture in porfolio
function showTask1() {
    const image = document.getElementById("task1Image");


    if (image.src.includes("images/quiz1F.jpg")) {

        image.src = "images/quiz2B.jpg";

    }
    else {
        image.src = "images/quiz1F.jpg";
    }
}

function enlarge(element) {
    element.classList.toggle("enlarged");
}

// for quizes pages
function openQuiz1() {
    window.location.href = "quiz1.html";
}
function openQuiz2() {
    window.location.href = "quiz2.html";
}
function openQuiz3() {
    window.location.href = "quiz3.html";
}
function openLongQuiz1() {
    window.location.href = "longQuiz1.html";
}
function openMidtermExam() {
    window.location.href = "midtermExam.html";
}
function openIndex() {
    window.location.href = "index.html";
}