function pesquisar() {
    var pesquisou = document.getElementById('caixadepesquisa').value
    var wesley = 'wesley'
    if (pesquisou.toUpperCase() === wesley.toUpperCase()) {
        window.open("wesley.html", "_self")
    } else {
        window.open("pagina-nav.html", "_blank")
    }
}

function pesquisar_barra(botao) {
    if (botao.key === 'enter') {
        if (pesquisou.toUpperCase() === wesley.toUpperCase()) {
            window.open("wesley.html", "_self")
        } else {
            window.open("pagina-nav.html", "_blank")
        }
    }
}