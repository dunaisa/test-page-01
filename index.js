const initSlider = () => {
  const sliderList = document.querySelector('.slider__list');
  const sliderBtns = document.querySelectorAll('.slider .slider__btn');
  const maxScrollLeft = sliderList.scrollWidth - sliderList.clientWidth;

  sliderBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const dir = btn.id === 'btn-prev' ? -1 : 1;
      const scrollAmount = sliderList.clientWidth * dir;
      sliderList.scrollBy({left: scrollAmount, behavior: 'smooth'})
    })
  })

  sliderList.addEventListener('scroll', () => {
    sliderBtns[1].style.display = sliderList.scrollLeft <= 0 ? 'none' : 'block';
    sliderBtns[0].style.display = sliderList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
  })

}

window.addEventListener('load', initSlider);

const faqBox = document.querySelectorAll('.faq__box');

faqBox.forEach(box => {
  box.addEventListener('click', function() {
    box.lastElementChild.classList.toggle('faq__answer_active')
  })
})