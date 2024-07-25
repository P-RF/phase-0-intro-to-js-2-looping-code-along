const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Charlie", "Samip", "Ali"];
const eventName = "birthday";
const thankYouMessages = writeCards(names, eventName);

function writeCards(names, eventName) {
    // Create a new array to hold messages
    const messages = [];
    
    for (let i = 0; i < names.length; i++) {
        // Create 'thank you' message for each name using string interpolation
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      
        // Add message to new array
        messages.push(message);
    }

    // Return the new array with 'thank you' messages for each name
    return messages;
}

console.log(thankYouMessages);

const number = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

function countDown(number) {
    if (number < 0) { 
        console.log(`Enter a positive integer.`);
        return;
    }
    while (number >= 0) {
        console.log(number); // Log curent number
        number--; // Decrement the number
    }
}
//Example
countDown(10);