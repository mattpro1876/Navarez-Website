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


    if (image.src.includes("quiz1F.jpg")) {

        image.src = "quiz2B.jpg";

    }

    else {

        image.src = "quiz1F.jpg";

    }

}