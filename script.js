function roll() {
  // Generate a random number between 1 and 6
  var num = Math.floor(Math.random() * 6) + 1;

  // Get the dice image element
  var diceImage = document.getElementById("dice-image");

  // Add the roll animation class
  diceImage.style.animation = "roll 1s"; // Add animation for 1 second

  // Update the image after the animation ends
  setTimeout(function() {
      // Change the image source based on the rolled number
      if (num === 1) {
          diceImage.src = "images/dice11-removebg-preview.png";
      } else if (num === 2) {
          diceImage.src = "images/dice222-removebg-preview.png";
      } else if (num === 3) {
          diceImage.src = "images/dic33-removebg-preview.png";
      } else if (num === 4) {
          diceImage.src = "images/dice4-removebg-preview.png";
      } else if (num === 5) {
          diceImage.src = "images/dice5-removebg-preview.png";
      } else if (num === 6) {
          diceImage.src = "images/dice6-removebg-preview.png";
      }

      // Display the rolled number
      document.getElementById("random-num").textContent = `Result: ${num}`;

      // Remove the roll animation after it's done
      diceImage.style.animation = "";
  }, 1000); // Delay image change for 1 second to match the animation duration
}
