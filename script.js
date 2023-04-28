const h1 = document.querySelector('h1');
const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const result = document.getElementById('result');

form.addEventListener('submit', viewResult);

function viewResult(event){
    event.preventDefault();
    const total = input1.value + input2.value;
    //result.append(total);
    result.innerText = "Resultado es: " + total;
}