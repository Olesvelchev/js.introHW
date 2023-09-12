document.addEventListener('DOMContentLoaded', function() {
    var button1 = document.getElementById('button1');
    button1.addEventListener('click', function() {
      document.body.style.backgroundColor = 'blue';
    });
  
    var button2 = document.getElementById('button2');
    button2.addEventListener('dblclick', function() {
      document.body.style.backgroundColor = 'pink';
    });
  
    var button3 = document.getElementById('button3');
    button3.addEventListener('mousedown', function() {
      document.body.style.backgroundColor = 'brown';
    });
  
    button3.addEventListener('mouseup', function() {
      document.body.style.backgroundColor = 'white';
    });
  
    var link = document.getElementById('myLink');
    link.addEventListener('mouseover', function() {
      document.body.style.backgroundColor = 'yellow';
    });
  
    link.addEventListener('mouseout', function() {
      document.body.style.backgroundColor = 'white';
    });
  });
  // html cod
  //<button id="button1">Кнопка 1</button>
//<button id="button2">Кнопка 2</button>
//<button id="button3">Кнопка 3</button>
//<a id="myLink" href="#">Посилання</a>

  