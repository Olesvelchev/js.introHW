document.addEventListener('DOMContentLoaded', function() {
    const getAuthorsButton = document.getElementById('getAuthorsButton');
    const authorsList = document.getElementById('authorsList');

    getAuthorsButton.addEventListener('click', function() {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'books.json', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                const booksData = JSON.parse(xhr.responseText);
                const authors = booksData.map(book => book.author);

                authorsList.innerHTML = authors.map(author => `<li>${author}</li>`).join('');
            } else {
                authorsList.innerHTML = `<li>Error: ${xhr.status}</li>`;
            }
        };

        xhr.onerror = function() {
            authorsList.innerHTML = `<li>Error sending request.</li>`;
        };

        xhr.send();
    });
});
