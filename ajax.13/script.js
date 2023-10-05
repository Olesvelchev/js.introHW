document.addEventListener('DOMContentLoaded', function() {
    const getDataButton = document.getElementById('getDataButton');
    const outputDiv = document.getElementById('output');

    getDataButton.addEventListener('click', function() {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', '/getData', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const now = new Date();
                const dateTimeString = now.toLocaleString() + ' ' + now.getTimezoneOffset()/60 + 'h UTC';
                outputDiv.innerHTML = `<p>Your vote is accepted!<br>Current date and time: ${dateTimeString}</p>`;
            } else {
                outputDiv.innerHTML = `<p>Error: ${xhr.status}</p>`;
            }
        };

        xhr.onerror = function() {
            outputDiv.innerHTML = "<p>Error sending request.</p>";
        };

        xhr.send();
    });
});
