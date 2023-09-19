'const h2Elements = document.querySelectorAll('h2.head');
h2Elements.forEach(element => {
    element.style.backgroundColor = 'green';
    const innerElements = element.querySelectorAll('.inner');

    innerElements.forEach(innerElement => {
        innerElement.style.fontSize = '35px';
    });
});
