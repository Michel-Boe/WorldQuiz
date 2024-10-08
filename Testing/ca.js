document.getElementById('colorButton').addEventListener('click', function(e) {
    // Die Position des Buttons erhalten
    const button = e.target;
    const rect = button.getBoundingClientRect();
    const circle = document.createElement('div');
    
    // Erstelle den animierten Kreis
    circle.classList.add('bg-circle');
    document.body.appendChild(circle);
    
    // Berechne die Position des Kreises (zentriert auf den Button)
    const circleX = rect.left + (rect.width / 2);
    const circleY = rect.top + (rect.height / 2);
    circle.style.left = `${circleX}px`;
    circle.style.top = `${circleY}px`;
    
    // Kleine Verzögerung, um sicherzustellen, dass die Position angewendet wurde
    setTimeout(() => {
      circle.classList.add('animated');
    }, 10);
    
    // Entferne den Kreis nach der Animation
    setTimeout(() => {
      document.body.style.backgroundColor = '#007BFF';
    //   document.html.style.backgroundColor = '#007BFF';
      circle.remove();
    }, 1000);
  });
  