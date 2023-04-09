var tela = document.getElementById('display').value += valor

function adicionaraoDiplay(valor) {
    document.getElementById('display').value += valor
}

function limpartela() {
    document.getElementById('display').value = '';
}

function calcular() {
    var valor = document.getElementById('display').value
    var resul = eval(valor)
    document.getElementById('display').value = resul
}