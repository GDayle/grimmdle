var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});

let list = document.querySelectorAll('.list');
let itemBox1 = document.querySelectorAll('.itemBox1');

for (let i = 0; i<list.length; i++){
	list[i].addEventListener('click', function(){
		for(let j = 0; j<list.length; j++){
			list[j].classList.remove('active');
		}
		this.classList.add('active');
		
		let dataFilter = this.getAttribute('data-filter');
		
		for( let k = 0; k<itemBox1.length; k++){
			itemBox1[k].classList.remove('active');
			itemBox1[k].classList.add('hide');
			
			if(itemBox1[k].getAttribute('data-item') == dataFilter ||
			dataFilter == "all"){
				itemBox1[k].classList.remove('hide');
				itemBox1[k].classList.add('active');
		}
	}
})
} 


let itemBox2 = document.querySelectorAll('.itemBox2');

for (let i = 0; i<list.length; i++){
	list[i].addEventListener('click', function(){
		for(let j = 0; j<list.length; j++){
			list[j].classList.remove('active');
		}
		this.classList.add('active');
		
		let dataFilter = this.getAttribute('data-filter');
		
		for( let k = 0; k<itemBox2.length; k++){
			itemBox2[k].classList.remove('active');
			itemBox2[k].classList.add('hide');
			
			if(itemBox2[k].getAttribute('data-item') == dataFilter ||
			dataFilter == "all"){
				itemBox2[k].classList.remove('hide');
				itemBox2[k].classList.add('active');
		}
	}
})
} 














