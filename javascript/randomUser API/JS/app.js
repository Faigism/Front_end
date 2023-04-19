let btn = document.getElementById('btn');

let input = document.querySelector('#form input');
let users = [];
let genderSelect = document.getElementById('gender-select');
function GetUsers(){
    fetch('https://randomuser.me/api/?results=100')
    .then(response => response.json())
    .then(data => {
        let x = '';
        let y = '';
        genderSelect.addEventListener('change', function(){
            let selectedGender = genderSelect.value;
            if(selectedGender === 'Male'){
                data.results.forEach(item => {
                    if(item.gender === 'male'){
                        y += `
                    <div class="col-lg-3">
                <div class="card">
                    <img src=${item.picture.medium} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.name.first} ${item.name.last}</h5>
                      <p class="card-text">Email: ${item.email}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
                    `
                    }
                    
                })
                document.getElementById('list2').innerHTML = y;
            }
            else if(selectedGender === 'Female'){
                data.results.forEach(item => {
                    if(item.gender === 'female'){
                        y += `
                        <div class="col-lg-3">
                <div class="card">
                    <img src=${item.picture.medium} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.name.first} ${item.name.last}</h5>
                      <p class="card-text">Email: ${item.email}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
                        `
                    }
                })
                document.getElementById('list2').innerHTML = y;
            }
            
            
        })
        let male_count = 0;
        let female_count = 0;
        data.results.forEach(user => {
            users.push(user)
            if(user.gender === 'male'){
                male_count++;
            }
            else{
                female_count++;
            }
            x += `
            <div class="col-lg-3">
                <div class="card">
                    <img src=${user.picture.medium} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                      <p class="card-text">Email: ${user.email}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
            `
        })
        document.getElementById('list').innerHTML = x;
        document.getElementById('g_male').innerHTML = male_count;
        document.getElementById('g_female').innerHTML = female_count;
    })
    .catch(err => console.log(err))
}
GetUsers();

input.onkeyup = function(){
    let value = this.value;
    let filteredUser = users.filter(x => x.name.first.toLowerCase().includes(value.toLowerCase()))
    let x = '';
    if(filteredUser.length === 0){
        document.querySelector('.alert').classList.remove('d-none')
    }
    else{
        document.querySelector('.alert').classList.add('d-none')
    }
    filteredUser.forEach(item => {
        x += `
        <div class="col-lg-3">
            <div class="card">
                <img src=${item.picture.medium} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.name.first} ${item.name.last}</h5>
                  <p class="card-text">Email: ${item.email}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>
        `
    })
        document.getElementById('list').innerHTML = x;
}


