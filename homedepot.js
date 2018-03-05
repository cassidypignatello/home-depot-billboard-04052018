var background = document.getElementsByClassName('container');

function init() {
  handleEventListeners();
}

function handleEventListeners() {
  background[0].addEventListener('click', function() {
    ADTECH.click(
      'Banner',
      'https://www.homedepot.com/b/Appliances/Samsung/N-5yc1vZbv1wZa0f'
    );
  });
}
ADTECH.ready(init);
