

// document.addEventListener("mousemove", function(event) {
//     if (event.clientX > window.innerWidth - 200) {
//       document.getElementById("side-menu").classList.add("open");
//     } else {
//       document.getElementById("side-menu").classList.remove("open");
//     }
//   });

  const images = ['imgs/Screenshot_1.png', 'imgs/Screenshot_2.png', 'imgs/Screenshot_3.png'];
  const currentSlide = document.querySelector('#current-slide');
  let currentIndex = 0;
  
  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    currentSlide.src = images[currentIndex];
  }
  
  function nextSlide() {
    currentIndex++;
    if (currentIndex === images.length) {
      currentIndex = 0;
    }
    currentSlide.src = images[currentIndex];
  }

  document.addEventListener("mousemove", function(event) {
if (event.clientX > window.innerWidth - 250) {
document.getElementById("side-menu").classList.add("open");
} else {
document.getElementById("side-menu").classList.remove("open");
}
});

//   $(document).ready(function() {
//     $('.slider').slick({
//       arrows: true,
//       prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
//       nextArrow: '<button type="button" class="slick-next">Próximo</button>',
//     });
//   });



// const images = ['imgs/Screenshot_1.png', 'imgs/Screenshot_2.png', 'imgs/Screenshot_3.png'];
// const currentSlide = document.querySelector('#current-slide');
// let currentIndex = 0;

// function prevSlide() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = images.length - 1;
//   }
//   currentSlide.src = images[currentIndex];
// }

// function nextSlide() {
//   currentIndex++;
//   if (currentIndex === images.length) {
//     currentIndex = 0;
//   }
//   currentSlide.src = images[currentIndex];
