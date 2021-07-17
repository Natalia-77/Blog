


var slideIndex = 1;


//При кліку на поточне(обране) зображення -відображаю його.
function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
}

//Закриття.
function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
};


function changeSlide(n) {
    //кожен раз по кліку аргумент буде збільшуватись на одиницю.
    showSlide(slideIndex += n);
};

function toSlide(n) {
    //при кліку на конкретне зображення,відображення з нього.
    showSlide(slideIndex = n);
};



function showSlide(n) {
    //формується список елементів слайдера по ідентифікатору класу.
    const slides = document.getElementsByClassName('slide');


    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    slides[slideIndex - 1].style.display = 'block';
  
};