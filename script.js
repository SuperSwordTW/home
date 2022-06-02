console.log("works");

const checkbox = document.querySelector('button.checkbox');

checkbox.addEventListener('click', (event) => {
    if (checkbox.classList.contains('on')) {
        checkbox.setAttribute('aria-checked', 'false');
    }
    else {
        checkbox.setAttribute('aria-checked', 'true');
    }
    checkbox.classList.toggle('on');
});