let button = document.querySelectorAll('button');
let content = document.querySelectorAll('.tabcontent');
let dark = document.querySelector('.dark');
let light = document.querySelector('.light');

function oneTub(event, id) {
    let button = document.querySelectorAll('button');
    let content = document.querySelectorAll('.tabcontent');
    button.forEach((element) => {
        element.classList.remove('active');
        id.classList.add('active');
    });
    content.forEach((element) => {
        element.classList.remove('activeTab');
        if(`content-${id.id}` == element.id) {
            element.classList.add('activeTab');
        }
    });
}

for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (event) => {
        oneTub(event, button[i]);
    });
}

let changeDarkButton = document.querySelector('.dark');
changeDarkButton.addEventListener('click', (event) => {
    document.body.classList.add('Dark');
    light.classList.add('visible');
    dark.classList.remove('visible');
});

let changeLightButton = document.querySelector('.light');
changeLightButton.addEventListener('click', (event) => {
    document.body.classList.remove('Dark');
    light.classList.remove('visible');
    dark.classList.add('visible');
});