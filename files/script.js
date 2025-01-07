const navbar = document.getElementById('nav')
const arrow = document.getElementById('arrow')
const those_things = document.getElementById('mobile_menu')
const menu = document.getElementById('menu')

let expand_times = 0

function expand_pc(){
	expand_times++
	navbar.classList.toggle('active')
	if (expand_times%2==1) {
		arrow.innerText = "x"
	}
	else{
		arrow.innerText = ">"	
	} 
}

function expand_mobile(){
	menu.classList.toggle('active')
}
