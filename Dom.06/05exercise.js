document.addEventListener('DOMContentLoaded', function() {
    var circleElements = document.querySelectorAll('.circle');
  
    circleElements.forEach(function(element) {
      var dataAnimValue = element.getAttribute('data-anim');
  
      if (dataAnimValue) {
        element.classList.add(dataAnimValue);

        if (element.classList.contains(dataAnimValue)) {
          console.log('Анімація успішно застосована до елементу.');
        } else {
          console.log('Помилка: Анімація не застосована до елементу.');
        }
      } else {
        console.log('Помилка: Немає значення data-anim для елемента.');
      }
    });
  });
  