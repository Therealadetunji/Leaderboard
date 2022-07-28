const submitForm = document.querySelector('#user-form');
const enterName = document.querySelector('#username');
const enterScore = document.querySelector('#score');

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (enterName === '' || enterScore === '') return;

  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/q6JDTAKTIqShhVc9wbL1/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: enterName.value,
        score: enterScore.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  enterName.value = '';
  enterScore.value = '';
});
