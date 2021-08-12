// Tabela de multiplicação
function tabelaMultiplicacao() {
    let arr = [];
    for (let i = 0; i <= 10; i++) {
        arr[i] = [];
        for (let j = 0; j <= 10; j++){
            arr[i][j] = i*j
        }         
    }
    console.table(arr)
}
tabelaMultiplicacao();


// BÔNUS
function tabelaMultiplicacao(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr[i] = [];
        for (let j = 0; j <= n; j++){
            arr[i][j] = i*j
        }         
    }
    console.table(arr)
}
tabelaMultiplicacao(16);