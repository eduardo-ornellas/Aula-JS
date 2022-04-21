
// String = "texto" (usar sempre entre aspas)
// Number = 3 (número, sem aspas)
// Boolean = true/false (comparativo)
// Null = vazio
// Undefined = indefinido 

//Tipos de variáveis 

/* VAR
- variável simples
- pode ser definida depois
- muito solta/não recomendada pois apresenta BUGS*/ 

var nome = "Eduardo";

/* LET
- deve ser definida antes
- variável recomendada*/

let idade = 13;

/* CONST

- não da para modificar depois;
- variável constante, não muda*/

const forma = area;
    if (forma === "quadrado") {
        area = lado * lado;
    } else {
        area = lado * lado / 2 
    }

/* OPERADORES JAVASCRIPT

= Recebe/Atribuição
está atribuindo um valor */

let num = 1

/* 
== Igual
comparação entre variáveis, ignorando o tipo */

let x = 10
x == 8 // false
x == 10 // true
x == "10" // true

/*
=== Valor Igual
compara variáveis, tipo e valor */

let x = 10
x === 8 // false
x === 10 // true
x === "10" // false, porque let é um number e x é string

/*

|| ou
&& e
!= não igual
!== estritamente não igual */