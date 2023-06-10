const form = document.getElementById('form-comparacao');


form.addEventListener("submit", function(e){
    e.preventDefault();

const A = parseFloat (document.getElementById('campo-a').value);
const B = parseFloat (document.getElementById('campo-b').value);

function comparaNumero(A, B){
    if (B == A) {
        alert("A é igual a B, tente novamente!");
    } else if (A > B) {
        alert("A é maior que B, tente novamente!");
    } else {
        alert("A é menor que B, tudo certo!");
    }
}
formEValido = comparaNumero(A, B)
});