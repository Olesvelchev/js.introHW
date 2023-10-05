document.addEventListener('DOMContentLoaded', function() {
    const userInfoDiv = document.getElementById('user-info');

    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            const userInfoHTML = `
                <img src="${user.picture.large}" alt="User Avatar">
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Age: ${user.dob.age}</p>
                <p>Gender: ${user.gender}</p>
                <p>Country: ${user.location.country}</p>
                <p>Login: ${user.login.username}</p>
                <p>Password: ${user.login.password}</p>
                <p>Email: ${user.email}</p>
            `;

            userInfoDiv.innerHTML = userInfoHTML;
        })
        .catch(error => console.error('Error:', error));
});
