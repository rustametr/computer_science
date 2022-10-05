let monsters_wrapper = document.querySelector('.monsters_wrapper');

let seacr_box = document.querySelector('.search_box');

let monsters_list;

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(responce){
    return responce.json()
})
.then((json) => {
    monsters_list = json;

    monsters_wrapper.innerHTML = '';

    for(let i=0; i<monsters_list.length; i++){
        monsters_wrapper.innerHTML += `
            <div class="monster_container">
                <img src="${`https://robohash.org/${monsters_list[i].id}?set=set2&size=180x180`}" alt="">
                <h2>${monsters_list[i].company.name}</h2>
                <p>${monsters_list[i].email}</p>
            </div>
        `
    }
})


seacr_box.oninput = () => {
    let value = seacr_box.value.toLowerCase();

    monsters_wrapper.innerHTML = '';
    
    
    for(let i=0; i<monsters_list.length; i++){
        let name = monsters_list[i].company.name.toLowerCase();
        if(name.includes(value)){
            monsters_wrapper.innerHTML += `
                <div class="monster_container">
                    <img src="${`https://robohash.org/${monsters_list[i].id}?set=set2&size=180x180`}" alt="">
                    <h2>${monsters_list[i].company.name}</h2>
                    <p>${monsters_list[i].email}</p>
                </div>
            `
        }
    }
}