document.addEventListener('DOMContentLoaded', function() {
    var body = document.createElement('body');
    var main = document.createElement('main');
    main.className = 'mainClass check item';

    var div = document.createElement('div');
    div.id = 'myDiv';

    var paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode('First paragraph'));

    div.appendChild(paragraph);
    main.appendChild(div);
    body.appendChild(main);

    document.documentElement.appendChild(body);
});
