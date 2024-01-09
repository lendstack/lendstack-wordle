import wordDb from "./word-db.json";

// you can use this command in the console of browser to easy scrap and copy data
// copy(Array.from(document.querySelectorAll('.table li')).map(li => li.innerText))

function getRandomWord() {
  var randomWord = wordDb[Math.floor(Math.random() * wordDb.length)];
  console.log("The word is: " + randomWord);
  return randomWord;
}
