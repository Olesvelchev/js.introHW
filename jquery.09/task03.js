const h3Elements = document.querySelectorAll('h3');

h3Elements.forEach(h3Element => {
    const divElement = h3Element.nextElementSibling;

    if (divElement && divElement.tagName === 'DIV') {
        
        h3Element.parentNode.insertBefore(divElement, h3Element);
    }
});
