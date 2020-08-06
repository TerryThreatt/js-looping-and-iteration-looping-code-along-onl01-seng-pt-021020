// Code your solutions in this file

function writeCards(names, event) {
    let thankYouCards = [];
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankYouCards;
}

function countDown(num) {
    for (let countup = 0; countup < 11; countup++) {
        console.log(countup);
      }
}
