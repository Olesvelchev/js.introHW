document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.querySelector('.btn');
  
    
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      
      var outBlock = document.querySelector('.out');
  
      
      var inputs = document.querySelectorAll('.arr');
  
      
      var data = {};
  
      
      inputs.forEach(function(input) {
        var key = input.getAttribute('data-form');
        var value = input.value;
        data[key] = value;
      });
  
      
      var outputString = '';
      for (var key in data) {
        outputString += key + ': ' + data[key] + '<br>';
      }
  
      
      outBlock.innerHTML = outputString;
    });
  });
  