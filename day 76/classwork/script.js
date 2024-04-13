let count = 0;
const btn = document.getElementById('button');
const p = document.getElementById('p');


btn.addEventListener('click', () => {
    count += 1; 
    if (count === 10) {
        btn.removeEventListener('click', myFunction);
    }
    p.innerHTML = count;
});
