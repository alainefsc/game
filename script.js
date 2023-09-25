
document.addEventListener("DOMContentLoaded", function () {
  let randomNumber = Math.floor(Math.random() * 100) + 1; //para gerar um número aleatório entre 1 e 100
  const guessInput = document.getElementById("guess");
  const checkButton = document.getElementById("check");
  const messageElement = document.getElementById("message");
  const restartButton = document.getElementById("restart");
  let attempts = 0;

  checkButton.addEventListener("click", function () {
      const guess = parseInt(guessInput.value);
      if (isNaN(guess) || guess < 1 || guess > 100) {
          messageElement.textContent = "Digite um número válido entre 1 e 100.";
      } else {
          attempts++;
          if (guess === randomNumber) {
              messageElement.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
              disableGame();
          } else if (guess < randomNumber) {
              messageElement.textContent = "Tente um número maior.";
          } else {
              messageElement.textContent = "Tente um número menor.";
          }
      }
  });

  restartButton.addEventListener("click", function () {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      guessInput.value = "";
      messageElement.textContent = "";
      attempts = 0;
      enableGame();
  });

  function disableGame() {
      guessInput.disabled = true;
      checkButton.disabled = true;
  }

  function enableGame() {
      guessInput.disabled = false;
      checkButton.disabled = false;
  }
});
