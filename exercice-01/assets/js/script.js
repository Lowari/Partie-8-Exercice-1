let button = document.createElement('button');

button.textContent = "Revenir en haut de page";
button.classList.add('bg-info');

document.body.appendChild(button);

button.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
});