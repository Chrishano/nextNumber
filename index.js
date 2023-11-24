document.addEventListener('DOMContentLoaded', function() {
    const numberDisplay = document.getElementById('numberDisplay');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
  
    let currentNumber = 1;
  
    function updateNumber() {
      numberDisplay.textContent = currentNumber;
    }
  
    prevButton.addEventListener('click', function() {
      currentNumber--;
      updateNumber();
    });
  
    nextButton.addEventListener('click', function() {
      currentNumber++;
      updateNumber();
    });
  });

  