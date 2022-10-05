let monsters_wrapper = document.querySelector('.monsters_wrapper');

let monsters_list;

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(responce){
    return responce.json()
})
.then((json) => {
    monsters_list = json;
})