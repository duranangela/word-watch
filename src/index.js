import $ from 'jquery'

const getTopWord = () => {
  fetch('http://localhost:3000/api/v1/top_word')
  .then(response => response.json())
  .then(obj => showWord(obj))
};

const showWord = (obj) => {
  $('.word-count').append(`
    ${Object.keys(obj["word"])[0]}: ${Object.values(obj["word"])[0]}
    `)
};

const breakDown = (event) => {
  event.preventDefault()
  let sample = $("#text").val()
  fetch('http://localhost:3000/api/v1/words', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "word": { "value": sample }
    })});
  $('.word-count').empty();
  getTopWord();
};

getTopWord()

$('#breakdown').on('click', breakDown)

$(document).ready(() => {
  // have fun!
})
