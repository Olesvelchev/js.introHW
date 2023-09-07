document.addEventListener('DOMContentLoaded', function() {
    var colors = document.querySelectorAll('.color');
    var priceElement = document.getElementById('outprice');
  
    colors.forEach(function(color) {
      color.addEventListener('click', function() {
        var price = this.getAttribute('data-price');
        priceElement.textContent = price;
      });
    });
  
    var sizes = document.querySelectorAll('.size');
  
    sizes.forEach(function(size) {
      size.addEventListener('click', function() {
        var price = this.getAttribute('data-price');
        priceElement.textContent = price;
      });
    });
  
    var others = document.querySelectorAll('.other');
  
    others.forEach(function(other) {
      other.addEventListener('click', function() {
        var price = this.getAttribute('data-price');
        priceElement.textContent = price;
      });
    });
  });
  