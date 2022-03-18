function changeMode() {
    changeClasses();
    changeText();    
    
    
}

function changeClasses() {
    button.classList.toggle('dark-mode');
    text.classList.toggle('dark-mode');
    div.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');

}

function changeText() {
    if (button.classList.contains('dark-mode')) {
        button.innerHTML = "Light mode";
        text.innerHTML = "Dark mode on";
        
    }else{
        button.innerHTML = "Dark mode";
        text.innerHTML = "Light mode on";
    }
}

const button = document.getElementById('mode-selector');
const text = document.getElementsByTagName('p')[0];
const div = document.getElementsByTagName('div')[0];
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', changeMode);