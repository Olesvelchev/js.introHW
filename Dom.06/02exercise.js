document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('h1');
    header.style.color = 'white';
    header.style.backgroundColor = 'green';
    header.style.fontWeight = 'bold';
    header.style.padding = '10px';

    var paragraphs = document.querySelectorAll('p');
    paragraphs[0].style.color = 'black';
    paragraphs[1].style.color = 'black';
    paragraphs[2].style.color = 'red';
    paragraphs[3].style.color = 'black';
    paragraphs[2].style.textDecoration = 'underline';
    paragraphs[3].style.fontStyle = 'italic';
    
    var list = document.querySelector('#myList');
    list.style.listStyleType = 'none';
    
    var spanElement = document.querySelector('span');
    spanElement.style.display = 'none';
  });