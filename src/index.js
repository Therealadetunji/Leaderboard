// import _ from 'lodash';
// import { method } from 'lodash';
import './index.css';
import './modules/Api-info.js';

const refresh = document.querySelector('#refresh');
const showPage = document.querySelector('#display-scores');

const displayScore = async () => {
  // fetching from the api using fetch() and awaiting the response
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/q6JDTAKTIqShhVc9wbL1/scores/',
  );
  // we want the response to be in .json() format
  const totalResult = await response.json();
  const arr = totalResult.result;
  return arr;
};

document.addEventListener('DOMContentLoaded', async () => {
  let newArr = [];
  try {
    // set the newArr to await the displayScore
    newArr = await displayScore();
  } catch (error) {
    // console.log('error 404');
  }
  newArr.forEach((element) => {
    showPage.innerHTML += `<span id="each-score">${element.user}: ${element.score}</span>`;
  });
});

refresh.addEventListener('click', async () => {
  let newArr = [];
  try {
    //     // set the newArr to await the displayScore
    newArr = await displayScore();
  } catch (error) {
    //     // console.log('error 404');
  }

  const domList = document.querySelectorAll('#each-score');

  domList.forEach((e) => {
    e.remove();
  });
  newArr.forEach((element) => {
    showPage.innerHTML += `<span id="each-score">${element.user}: ${element.score}</span>`;
  });
});
