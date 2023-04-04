let btn = document.querySelector('.btn');
let alert_box = document.querySelector('.alert');
let count = document.querySelector('.count');

count = 0;
btn.onclick = () => {
    let span = document.querySelector('#count')
    let value = document.querySelector('#form input').value;
    
    let list = document.createElement('p');
    let div = document.createElement('div');
    let button = document.createElement('button');
    list.innerHTML = value
    
    button.innerHTML = 'DELETE'
    button.className = 'btn2 btn btn-danger';
    div.className = 'box d-flex, justify-content-between'

    div.appendChild(list)
    div.appendChild(button)
    
    button.onclick = function(){
        div.classList.add('d-none')
        console.log(count);
        count--;
        span.innerHTML = `${count} Listiniz silindi...`
        if(count == 0){
            span.innerHTML = 'List daxil edin'
        }
    }
    
    /*
    let x = `
    <div class="box">
    <p>${value}</p>
    <button class="btn btn-danger">DELETE</button>
</div>`
*/
    document.querySelector('#list').appendChild(div);

    alert_box.classList.remove('d-none');

    setTimeout(() => {
        alert_box.classList.add('d-none');
    }, 3000);
    if(value == ""){
        alert_box.innerHTML = 'Xana boş qala bilməz!..'
        alert_box.classList.add('alert-danger');
        div.className = 'd-none'
    }
    else{
        count++;
        span.innerHTML = `${count} List əlavə etdiniz.`
        alert_box.classList.remove('alert-danger');
        alert_box.innerHTML = 'Seçiminiz əlavə olundu..'
    }
    
}