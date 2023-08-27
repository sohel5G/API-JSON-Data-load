

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(varName => varName.json())
//     .then(varName => console.log(varName))



function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(anything => anything.json())
        .then(anything => console.log(anything))
}





