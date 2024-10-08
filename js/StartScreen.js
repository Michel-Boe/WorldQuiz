const startButton = document.getElementById("startButton");
startButton.addEventListener("click",showMenu);
startButton.addEventListener("click",saveName);

function showMenu() {
    // Alle Elemente mit der Klasse "startElements" abrufen
    const startElements = document.querySelectorAll('.startElements');
    
    // Die ersten beiden Elemente der Klasse "startElements" ausblenden
    startElements.forEach((el, index) => {
      if (index < 3) {
        el.style.display = 'none';
      }
    });
  
    // Alle Elemente mit der Klasse "optionButton" abrufen
    const finalElements = document.querySelectorAll('.optionButton');
    
    // Die ersten drei Elemente der Klasse "optionButton" einblenden
    finalElements.forEach((el, index) => {
      if (index < 3) {
        el.style.display = 'block';
      }
    });
}
  

function navigateTo(page) {
window.location.href = page;
}
