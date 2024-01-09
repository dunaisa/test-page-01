const sliderList = document.querySelector('.slider__list');
const nextBtnSlider = document.querySelector('.slider__btn_next');
const prevBtnSlider = document.querySelector('.slider__btn_prev');
let offset = 0;

nextBtnSlider.addEventListener('click', function() {
  if (offset > 306) {
    nextBtnSlider.classList.add('slider__btn_next_inactive')
  }
  offset += 306;
  sliderList.style.left = -offset + 'px'
  console.log(offset)
})

prevBtnSlider.addEventListener('click', function() {
  if (offset < 0) {
    prevBtnSlider.classList.add('slider__btn_next_inactive')
  }
  offset -= 306;
  sliderList.style.left = -offset + 'px'
})