const links = document.querySelectorAll('a');

links.forEach(link => {
    if (link.href.startsWith('https://')) {
        
        link.setAttribute(target="_blank");
    }
});
