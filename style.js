let green_button = document.getElementById('agree_button')
let red_button = document.getElementById('disagree_button')
let div_buttons = document.getElementById('div_buttons')
let all_buttons = document.getElementsByClassName('buttons')
let general_div = document.getElementById('general_div')
let text = document.getElementById('text')
let img = document.getElementById('img')


for (let button of all_buttons){
    button.addEventListener('click', (e)=>{
        e.preventDefault()
        if (button.id === red_button.id){
            div_buttons.removeChild(red_button)
            green_button.style.fontSize = '90px'
            green_button.innerHTML = 'Of course you will'
        }
        else if (button.id === green_button.id) {
            window.location.href = 'yes.html'
        }
    })
}
