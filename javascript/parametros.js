/* PARÂMETROS

- Parâmetros são os elementos dentro dos parenteses de uma função */

function exemplo (parametro) {
    return parametro;
}

function apresentacao (nome, idade, cidade) {
    return `Meu nome é ${nome}, tenho ${idade} anos e moro na cidade de ${cidade}`
}
    console.log(apresentacao("Eduardo", 24, "Maringá"))

// Deve passar os parâmetros na ordem para ser exibida.