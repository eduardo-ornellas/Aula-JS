/* ERROS NO TERMINAL JAVASCRIPT

No terminal indica o tipo do erro
ex: SyntaxError
erro na sintaxe, está digitado errado
- No terminal também fala a linha do erro*/

let x = 1
console.log = (x;

/* Erro: SyntaxError: missing );
Solução:
console.log = (x);
*/

let x = 1
console.log (y);

/* Erro: ReferenceError: y is not defined
Solução:
let y = 2;

Outros erros: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error 
*/