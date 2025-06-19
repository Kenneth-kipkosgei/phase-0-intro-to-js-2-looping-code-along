// Function to create thank-you messages for each name
function writeCards(names, eventName) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return messages;
}

// Function to count down from a given number to 0
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
