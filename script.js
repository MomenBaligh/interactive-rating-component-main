const ratingButtons = document.querySelectorAll('.rating-btns button');
const submitButton = document.querySelector('.submit-btn');
const ratingContainer = document.getElementById('ratingContainer');
const thankYouMessage = document.getElementById('thankYouMessage');
const selectedRatingElement = document.getElementById('selectedRating');

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    ratingButtons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    const selectedRating = button.textContent;
    selectedRatingElement.textContent = selectedRating;
  });
});

  submitButton.addEventListener('click', () => {
    const isActive = [...ratingButtons].some(button => button.classList.contains('active'));

    if (isActive) {
      ratingContainer.style.display = 'none';
      thankYouMessage.style.display = 'block';
    } else {
      alert('Please select a rating before submitting.');
    }
  });