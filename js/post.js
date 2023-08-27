
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(rec => rec.json())
    .then(data => loadPosts(data))

function loadPosts(posts) {
    let postContainer = document.getElementById('posts-container');
    for (post of posts) {
        let article = document.createElement('article');
        article.innerHTML = `
            <h1 class="title"> ${post.title} </h1>
            <p> <strong> <span>Post Id : ${post.id} </span> <span>User Id : ${post.userId}</span> </strong> </p>
            <p class="description"> ${post.body} </p>
        `
        postContainer.appendChild(article);
    }
}


//__________________________________________________________________________________________________________________





