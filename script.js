const slider = document.querySelector('.slider');
const sliderImgs = document.querySelectorAll('.slider_container');
const buttonR = document.querySelector('.btn-r');
const buttonL = document.querySelector('.btn-l');
let imgIndex = 0;
const dots = document.querySelectorAll('.switch-dots');

function showSlide(showIndex) {
    slider.style.transform = 'translateX(-'+ showIndex * 25 +'%)';
};

function dotsTrigger() {
    dots.forEach((dot, index) => {
        if(index === imgIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    })
};

function goNext() {
    imgIndex = (imgIndex + 1) % sliderImgs.length;
    showSlide(imgIndex);
    dotsTrigger()
};

function goToSlide(index) {
    imgIndex = index;
    showSlide(imgIndex);
    dotsTrigger()
}  

function goBack () {
    imgIndex = (imgIndex - 1 + sliderImgs.length) % sliderImgs.length;
    showSlide(imgIndex);
    dotsTrigger()
};

buttonR.addEventListener('click', goNext);
buttonL.addEventListener('click', goBack);

dots.forEach((dot, index) => 
    dot.addEventListener('click', () => goToSlide(index)
));

showSlide(imgIndex);