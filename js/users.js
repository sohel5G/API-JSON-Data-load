document.getElementById('btn-username').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
        .then(data => displayUserName(data))
});
function displayUserName(usernames){
    let userContainer = document.getElementById('username-container');
    for (username of usernames ){
        let li = document.createElement('li');
        li.innerHTML = `
            <a href="https://google.com" target="_blank">${username.username}</a>
        `
        li.classList.add('my-class');
        userContainer.appendChild(li);

    }
}

