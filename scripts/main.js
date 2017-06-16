function handValue(hand) {
  let sumOfHand = 0;
  for (var i = 0; i < hand.length; i++) {
    let card = hand[i];
    if (card ==="K" || card === "Q" || card === "J") {
      someOfHand += 10;
    }
    else if (parseInt(card)) {
        sumOfHand += parseInt(card);
    }
    else {
      if (sumOfHand > 11) {
        sumOfHand += 1;
      }
      else {
        sumOfHand += 11;
      }
    }
  }
  return someOfHand;
}
