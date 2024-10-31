
let currentIndex = 0;

  function showSlide(index) {
    const carousel = document.getElementById("carousel");
    const slides = document.querySelectorAll("#carousel > div");
    const totalSlides = slides.length;

    // Si el índice es menor a 0 o mayor que el total de diapositivas, se ajusta
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Mueve el contenedor de las diapositivas al índice actual
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }