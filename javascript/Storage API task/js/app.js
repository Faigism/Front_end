if(localStorage.getItem('products') === null){
    localStorage.setItem('products', JSON.stringify([]));
}
let buttons = document.querySelectorAll('.btn');

for(let btn of buttons){
    btn.onclick = function(e){
        e.preventDefault();
        let id = this.parentElement.parentElement.id;
        let src = this.parentElement.parentElement.children[0].src;
        let pr_name = this.nextElementSibling.children[0].innerHTML;
        let pr_price = this.nextElementSibling.children[2].innerHTML;

        let product_list = JSON.parse(localStorage.getItem('products'));

        let existProd = product_list.find(item => item.Id === id);
        if(existProd === undefined){
            product_list.push({
                Id: id,
                Image: src,
                Name: pr_name,
                Price: pr_price,
                Count: 1
            })
            document.querySelector('.alert-box').innerHTML = 'Mehsul elave olundu'
            document.querySelector('.alert-box').style.right = '5%'
        }
        else{
            existProd.Count += 1;
            document.querySelector('.alert-box').innerHTML = 'Mehsul yeniden elave olundu';
            document.querySelector('.alert-box').style.right ='5%'
        }
        
        
        localStorage.setItem('products',JSON.stringify(product_list));

        setTimeout(() => {
            document.querySelector('.alert-box').style.right = '-15%'
        }, 2000);
        ShowCount()
    }
}

function ShowCount(){
    let product_list = JSON.parse(localStorage.getItem('products'));
    document.querySelector('#count').innerHTML = product_list.length
}
ShowCount()