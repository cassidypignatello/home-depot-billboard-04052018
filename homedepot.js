var background = document.getElementsByClassName('container');
var slideIndex = 2;
var slides = document.getElementsByClassName('slides');

function init() {
  handleArrows();
  showSlides(slideIndex);
  background[0].addEventListener('click', function() {
    ADTECH.click('Main Background', 'http://www.homedepot.com');
  });
}

function handleClick() {
  if (slideIndex === 1) {
    slides[slideIndex - 1].onclick = function(e) {
      e.stopPropagation();
      ADTECH.click('Nobody Banner', 'http://www.homedepot.com');
    };
  } else if (slideIndex === 2) {
    slides[slideIndex - 1].onclick = function(e) {
      e.stopPropagation();
      ADTECH.click(
        '35 Percent Off Banner',
        'https://www.homedepot.com/b/Appliances/Samsung/N-5yc1vZbv1wZa0f'
      );
    };
  } else if (slideIndex === 3) {
    slides[slideIndex - 1].onclick = function(e) {
      e.stopPropagation();
      ADTECH.click(
        'Spring Banner',
        'https://www.homedepot.com/b/Featured-Products-Appliances-Samsung-Spring-for-Something-New/N-5yc1vZcjlt'
      );
    };
  }
}

function handleArrows() {
  var leftArrow = document.getElementById('arrow-left');
  var rightArrow = document.getElementById('arrow-right');
  leftArrow.addEventListener('click', function(e) {
    e.stopPropagation();
    plusSlides(-1);
  });
  rightArrow.addEventListener('click', function(e) {
    e.stopPropagation();
    plusSlides(1);
  });
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
  handleClick();
}
ADTECH.ready(init);
