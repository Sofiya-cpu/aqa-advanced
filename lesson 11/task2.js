function toDo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => { return response.json() })
        .catch(error => { return console.error('Error in To do:', error) });
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => { return response.json() }) // перетворює тіло відповіді в формат JSON
        .catch(error => { return console.error('Error in User:', error) });
}

// Promise.all

const promiseCollection = Promise.all([toDo(), getUser()])
    .then(response => { console.log("The info from the endpoint: ", response) })
    .catch(error => { console.log("Oops, something went wrong!", error) })

// Promise.race

/* .const promiseCollection = Promise.race([toDo(), getUser()])
    .then(response => { console.log("The info from the endpoint: ", response) })
    .catch(error => { console.log("Oops, something went wrong!", error) }) */