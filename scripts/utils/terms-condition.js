export const termsAndCondition = () => {
  const nextBtn = document.querySelector('.next-btn');
  nextBtn.addEventListener('click', () => {
    validateCheckBox();
  });

  function validateCheckBox() {
    var checkbox = document.getElementById('agree');

    if (checkbox.checked) {
        nextBtn.parentElement.classList.add('hidden');
      document.querySelector('.book-form').classList.remove('hidden');
      document.querySelector('.book-form').classList.add('flex');
    } else {
        document.querySelector('.agreed-text').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please agree to the terms and conditions first.'
        return;
    }
  }
}