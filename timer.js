var interval = null;
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#button").onclick = () => {
    let min = document.getElementById("minimo").value;
    let max = document.getElementById("maximo").value;
    if (min == "" || max == "") {
        alert("O tempo mínimo e máximo não podem estar vazios");
    } else if (min > max) {
        alert("O tempo máximo deve ser maior que o mínimo")
    } else {
        interval = setInterval(function() {count(min, max);}, 1000);
        remover();
    }
    };
});

remover = () => {
    document.querySelector("#tempos").remove();
    let btn = document.createElement("button");
    btn.innerHTML = "Parar"
    btn.classList.add('btn');
    btn.classList.add('btn-primary');
    btn.id = 'parar';
    document.querySelector("div").appendChild(btn);
    document.querySelector("#parar").onclick = () => {
    clearInterval(interval);
    return false;
    };
};

let s = 0;
let m = 0;

count = (min, max) => {
    let time = `${m.toLocaleString(undefined, {minimumIntegerDigits: 2})}:${(s % 60).toLocaleString(undefined, {minimumIntegerDigits: 2})}`
    min *= 60;
    max *= 60;
    let med = parseInt((min + max)/2)
    let bodyColor = document.querySelector('body');

    document.querySelector('h1').innerHTML = time;
    if (s >= min && s < med) {
        bodyColor.style.backgroundColor = 'green';
    } else if (s >= med && s < max) {
        bodyColor.style.backgroundColor = 'yellow';
    } else if (s >= max && s < max+30) {
        bodyColor.style.backgroundColor = 'red';
    } else if (s >= max+30) {
        bodyColor.style.backgroundColor = 'purple';
        document.querySelector('#start').innerHTML = "Desqualificar";
        document.querySelector('#start').style.fontSize = "80px";
        document.querySelector('#start').style.padding = "80px";
    };
    s++;
    if (s > 0 && (s % 60 === 0)) {
        m++;
    }

    return false;
};