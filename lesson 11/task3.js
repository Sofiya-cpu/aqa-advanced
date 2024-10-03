async function toDo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const todo = await response.json(); // перетворює тіло відповіді в формат JSON + записує в todo
        return todo;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const getuser = await response.json();
        return getuser;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}

// Promise.all

(async () => {
    try {
        const result = await Promise.all([toDo(), getUser()]);
        const todo = result[0];
        const user = result[1];
        console.log('The info from the endpoint Todo:', todo);
        console.log('The info from the endpoint User:', user);
    } catch (error) {
        console.error('Oops, something went wrong!', error);
    }
})();

// Promise.race

// (async () => {
//     try {
//         const result = await Promise.race([toDo(), getUser()]);
//         console.log('The info from the endpoint: ', result);
//     } catch (error) {
//         console.error('Oops, something went wrong!', error);
//     }
// })();